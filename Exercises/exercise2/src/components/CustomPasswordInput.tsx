import { memo } from 'react';
import FormField from './FormField';
import { TInput } from '../utils/types';

const CustomPasswordInput = ({
  id,
  name,
  label,
  placeholder,
  required,
}: TInput) => {
  return (
    <>
      <FormField
        {...{
          type: 'password',
          label: label,
          name: name,
          id: id,
          placeholder: placeholder,
          required,
        }}
      />
      <FormField
        {...{
          type: 'password',
          label: 'Validate password',
          name: 'validatePassword',
          id: 8,
          placeholder: 'Validate password',
          required: true,
          customValidates: [
            {
              validate: ([validatePassword]: any[]) => !!validatePassword,
              message: 'This field is required',
              valuesIds: ['validatePassword'],
            },
            {
              validate: ([password, validatePassword]: any[]) => {
                return password === validatePassword;
              },
              message: 'Passwords must match',
              valuesIds: ['password', 'validatePassword'],
            },
          ],
        }}
      />
    </>
  );
};

export default memo(CustomPasswordInput);
