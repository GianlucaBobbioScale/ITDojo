import { useState } from "react";
import CustomInput from "./CustomInput";

export default function DynamicForm({ inputs }) {
  const [inputsCheck, setInputsCheck] = useState([]);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };

  return (
    <div>
      <h1>DynamicForm</h1>
      {inputs.map((input) => {
        return (
          <CustomInput
            key={input.name}
            data={input}
            isSubmit={submit} // el estado se envia en true cuando se aprieta el boton de submit.
            setSubmit={setSubmit} // envia el set para que input pueda modificar el estado despues de hacer la verificacion.
            setCheck={setInputsCheck} // envia el set para hacer que el input le avise si esta todo ok.
          />
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
      {inputsCheck.length ? (
        <ul style={{ color: "red" }}>
          <p>Error in:</p>
          {inputsCheck.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
