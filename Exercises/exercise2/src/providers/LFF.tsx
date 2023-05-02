import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  FormContextType,
  FormState,
  ICustomValidates,
  TInput,
} from '../utils/types';
import '../global.css';
import InputSwitch from '../components/InputsSwitch';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const LucasFinalForm = ({
  fields,
  title,
  handleSubmit,
}: {
  fields: TInput[];
  title: string;
  handleSubmit: (body: { [key: string]: any }) => void;
}) => {
  const [formState, setFormState] = useState<FormState>({});
  const [errors, setErrors] = useState<{ [field: string]: string }>({});
  const [customValidates, setCustomValidates] = useState<ICustomValidates>({});

  const updateFormState = useCallback((name: string, value: any) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const addCustomValidates = useCallback(
    (customValidates: ICustomValidates) => {
      setCustomValidates((prevState) => ({ ...prevState, ...customValidates }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const newErrors: { [field: string]: string } = {};

    const fieldStates = Object.entries(formState);

    fieldStates.forEach((field) => {
      const [fieldName, fieldValue] = field;

      const fieldData = fields.find((field) => field.name === fieldName);
      if (fieldData) {
        if (fieldData.required && !fieldValue) {
          newErrors[fieldName] = `${fieldData.label} is required`;
        }
        if (fieldData.validates) {
          fieldData.validates.forEach((validate) => {
            const { regexString, message } = validate;
            const regex = new RegExp(regexString);
            if (!regex.test(fieldValue) && !newErrors[fieldName]) {
              newErrors[fieldName] = message;
            }
          });
        }
      }

      if (customValidates[fieldName]) {
        customValidates[fieldName].forEach((customValidate) => {
          const values = customValidate.valuesIds.map(
            (valueId) => formState[valueId]
          );
          if (!customValidate.validate(values) && !newErrors[fieldName]) {
            newErrors[fieldName] = customValidate.message;
          }
        });
      }
    });

    setErrors(newErrors);
    return newErrors;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customValidates.length, fields, formState]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newErrors = validateForm();
      if (Object.keys(newErrors).length === 0) {
        handleSubmit(formState);
      }
    },
    [formState, handleSubmit, validateForm]
  );

  useEffect(() => {
    setErrors({});
  }, [formState]);

  return (
    <FormContext.Provider
      value={{
        errors,
        formState,
        updateFormState,
        addCustomValidates,
      }}
    >
      <div className="form-container">
        <div className="form-wrapper">
          <form onSubmit={onSubmit} noValidate>
            <h2 className="form-title">{title}</h2>
            {fields.map((field) => (
              <InputSwitch {...field} key={field.id} />
            ))}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export const useFieldError = (name: string) => {
  const context = useFormContext();

  if (!context) {
    throw new Error('useFieldError must be used within a FormProvider');
  }

  const { errors } = context;
  const error = errors[name];

  return error;
};
