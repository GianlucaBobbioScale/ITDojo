export type TInput = {
  id: number;
  name: string;
  type: string;
  label: string;
  required: boolean;
  placeholder: string;
  validates?: { regexString: string; message: string }[];
  extraProps?: { [key: string]: any };
};

export interface FormState {
  [key: string]: any;
}

export interface ICustomValidate {
  validate: (values: any[]) => boolean;
  message: string;
  valuesIds: string[];
}

export interface ICustomValidates {
  [field: string]: ICustomValidate[];
}

export interface FormContextType {
  formState: FormState;
  updateFormState: (name: string, value: any) => void;
  addCustomValidates: (customValidates: ICustomValidates) => void;
  errors: { [field: string]: string };
}
