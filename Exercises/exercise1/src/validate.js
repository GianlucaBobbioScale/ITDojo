export default function validate(value, validations) {
  // en esta funcion deberian estar todas las validaciones dependiendo el tipo de input.

  let check = false;
  const { required, maxCharacters } = validations;

  //valida si el campo esta vacio
  if (required && !value.length) {
    check = true;
  }

  //valida el maximo de caracteres
  if (maxCharacters && value.length > maxCharacters) {
    check = true;
  }

  return check;
}
