import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singInSchema } from "../../utils/validationSchemas.js";

import { closeModal } from "../../redux/modal/slice.js";
import { useDispatch } from "react-redux";

import InputField from "../InputField/InputField.jsx";
import FormButton from "../FormButton/FormButton.jsx";

import css from "./SignInForm.module.css";

export default function SignInForm() {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(singInSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data); //  Прибрати перед продакшеном !!!
    dispatch(closeModal());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={css.imputContainer}>
          <InputField name="email" label="Email" type="email" placeholder="Email" />
          <InputField name="password" label="Password" type="password" placeholder="Password" />
        </div>
        <FormButton>Sign In</FormButton>
      </form>
    </FormProvider>
  );
}
