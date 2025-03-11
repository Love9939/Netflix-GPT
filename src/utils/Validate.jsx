
export const checkValidateData = (email,password,name="")=>{

const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
const isNameValid = name.trim().length >= 2;

if(!isEmailValid) return "Email is not valid";
if(!isPasswordValid) return "Password is not valid";
if (name && !isNameValid) return "Name must be at least 2 char.";

return null;
};