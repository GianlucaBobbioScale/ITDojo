import React, { useMemo } from 'react';
import { TInput } from '../utils/types';
import '../global.css';
import CustomPasswordInput from './CustomPasswordInput';
import FormField from './FormField';

const InputsSwitch: React.FC<TInput> = (props) => {
  const { type } = props;

  const Input = useMemo(() => {
    switch (type) {
      case 'custom-password':
        return <CustomPasswordInput {...props} />;

      default:
        return <FormField {...props} />;
    }
  }, [type, props]);

  return Input;
};

export default InputsSwitch;
