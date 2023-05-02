import React, { useState } from "react";
import {
  Box
} from "@material-ui/core";
import DefaultButton from "./Components/GenericButton";
import DefaultInput from "./Components/GenericInput";

const Form = ({inputs}) => {

  const [valuesCollector, setValuesCollector] = useState({});

  
  const handleSubmit = () => {
    inputs.forEach(input => {
      if(input.validation)
      {
        if(!input.validation(valuesCollector[input.name]))
        {
          alert(`Error en ${input.name}`)
        }
      }
    });
  };


  return (
    <Box  display="grid"
    justifyContent="center"
    alignItems="center">
      {inputs.map((input)=>
        {
          return <DefaultInput setValueCollector={setValuesCollector} valueCollector={valuesCollector} data={input}/>
        })}

    <DefaultButton label={'Submit'} handleSubmit={handleSubmit}/>

    </Box>
  );
};

export default Form;