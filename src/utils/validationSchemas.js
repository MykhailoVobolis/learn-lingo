import * as yup from "yup";

const regex = {
  emailRegexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
  number: yup.string().required("Phone number is required").min(8, "Phone number must be at least 8 characters"),
});
