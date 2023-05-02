export const passwordValidation = (valuePassword, confirmPassword) => {
  if (valuePassword.length < 8) {
    return {
      errorExist: true,
      errorMessage: "Password must be at least 8 characters long",
    };
  }

  if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(valuePassword)) {
    return {
      errorExist: true,
      errorMessage:
        "Password must contain at least one uppercase letter, one lowercase letter and one number",
    };
  }

  if (confirmPassword && valuePassword !== confirmPassword) {
    return {
      errorExist: true,
      errorMessage: "Passwords don't match",
    };
  }

  return {
    errorExist: false,
    errorMessage: "",
  };
};

export const makeSecondFieldMandatory = (firstInput, secondInput) => {

  if (firstInput.length > 0 && secondInput.length === 0) {
    return {
      errorExist: true,
      errorMessage: "This field is mandatory",
    };
  }

  return {
    errorExist: false,
    errorMessage: "",
  };
};
