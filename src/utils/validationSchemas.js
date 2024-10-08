import * as yup from "yup";

const regex = {
  emailRegexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phoneNumberRegexp: /^[+]{1}[0-9]{2}[(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
};

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").matches(regex.emailRegexp, "Invalid email"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
});

export const singInSchema = yup.object().shape({
  email: yup.string().required("Email is required").matches(regex.emailRegexp, "Invalid email"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
});

export const bookSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").matches(regex.emailRegexp, "Invalid email"),
  number: yup
    .string()
    .required("Phone number is required")
    .matches(regex.phoneNumberRegexp, "Number format: +38(000)000-00-00"),
});
