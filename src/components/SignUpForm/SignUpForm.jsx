import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../utils/validationSchemas.js";

import { closeModal } from "../../redux/modal/slice.js";
import { useDispatch } from "react-redux";

import InputField from "../InputField/InputField.jsx";
import FormButton from "../FormButton/FormButton.jsx";

import { register } from "../../redux/auth/operations.js";

import css from "./SignUpForm.module.css";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "all",
  });

  const onSubmit = (userData) => {
    dispatch(register(userData));
    methods.reset();
    dispatch(closeModal());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={css.imputContainer}>
          <InputField name="name" label="Name" placeholder="Name" />
          <InputField name="email" label="Email" type="email" placeholder="Email" />
          <InputField name="password" label="Password" type="password" placeholder="Password" />
        </div>
        <FormButton>Sign Up</FormButton>
      </form>
    </FormProvider>
  );
}
