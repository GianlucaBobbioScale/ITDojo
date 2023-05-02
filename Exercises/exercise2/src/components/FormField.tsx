import { TInput } from '../utils/types';
import { useCallback, useEffect, useState } from 'react';
import { useFieldError, useFormContext } from '../providers/LFF';
import '../global.css';

interface IFormFieldProps extends TInput {
  customValidates?: {
    validate: (values: any[]) => boolean;
    message: string;
    valuesIds: string[];
  }[];
  initialValue?: any;
}

const FormField = ({
  type,
  id,
  name,
  label,
  placeholder,
  required,
  customValidates,
  initialValue,
  extraProps = {},
}: IFormFieldProps) => {
  const error = useFieldError(name);
  const [value, setValue] = useState('');
  const { updateFormState, addCustomValidates } = useFormContext();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      updateFormState(name, e.target.value);
    },
    [name, updateFormState]
  );

  useEffect(() => {
    if (customValidates) {
      addCustomValidates({
        [name]: customValidates,
      });
    }
    updateFormState(name, initialValue || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${error ? 'inputError' : ''} input`}>
      <label htmlFor={`${id}-${name}`}>{label}</label>
      <input
        id={`${id}-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        {...extraProps}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormField;
