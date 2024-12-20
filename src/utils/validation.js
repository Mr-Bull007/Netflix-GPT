export const checkValidData = (email, password) => {
  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const checkPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!checkEmail) return "Email is not valid";
  if (!checkPassword)
    return "Password is not valid. It should be 8 characters long, and it should have atleast one lowercase, one uppercase, one digit and one special character.";

  return null;
};
