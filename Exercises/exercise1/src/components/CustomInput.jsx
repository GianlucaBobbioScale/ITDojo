import { useEffect, useState } from "react";
import validate from "../validate";

export default function CustomInput({ isSubmit, setSubmit, setCheck, data }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const { name, label, type, errorMessage, validations } = data;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    //si se submitea setea el estado de Error, segun lo que devuelva la funcion validate
    if (isSubmit) {
      setError(validate(value, validations));
    }
    // si tiene error agrega al estado que maneja el form con su nombre que tiene error.
    if (error) {
      setCheck((prevState) => {
        // si ese campo ya tiene error no vuelve a agregar su nombre
        if (!prevState.includes(name)) {
          return [...prevState, name];
        }
        return prevState;
      });
    } else {
      // si no tiene error, tendria que buscar si esta su nombre y sacarlo.
      setCheck((prevState) => prevState.filter((e) => e !== name));
    }
    // despues de chequear vuelve el submit a false para poder volver a chequear si es necesario en un futuro
    setSubmit(false);
    // eslint-disable-next-line
  }, [isSubmit]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label>{label}</label>
      <input type={type} onChange={handleChange} />
      {error ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
    </div>
  );
}
