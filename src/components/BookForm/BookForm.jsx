import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/slice.js";
import { bookSchema } from "../../utils/validationSchemas.js";
import { clearCurentTeacher } from "../../redux/teachers/slise.js";

import FormButton from "../FormButton/FormButton.jsx";
import InputField from "../InputField/InputField.jsx";

import css from "./BookForm.module.css";
import RadioButton from "../RadioButton/RadioButton.jsx";

export default function BookForm() {
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(bookSchema),
    mode: "all",
    defaultValues: {
      reason: "Career and business",
    },
  });

  const onSubmit = (userData) => {
    toast("You have successfully booked a trial lesson!!", {
      style: {
        color: "var(--main-black-color)",
        backgroundColor: "var(--main-button-color)",
      },
    });

    methods.reset();
    dispatch(closeModal());
    dispatch(clearCurentTeacher());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={css.radioGroup}>
          <RadioButton
            name="reason"
            label="Career and business"
            value="Career and business"
            register={methods.register}
          />
          <RadioButton name="reason" label="Lesson for kids" value="Lesson for kids" register={methods.register} />
          <RadioButton name="reason" label="Living abroad" value="Living abroad" register={methods.register} />
          <RadioButton
            name="reason"
            label="Exams and coursework"
            value="Exams and coursework"
            register={methods.register}
          />
          <RadioButton
            name="reason"
            label="Culture, travel or hobby"
            value="Culture, travel or hobby"
            register={methods.register}
          />
        </div>
        <div className={css.imputContainer}>
          <InputField name="name" label="Name" placeholder="Full Name" />
          <InputField name="email" label="Email" type="email" placeholder="Email" />
          <InputField
            name="number"
            label="Phone number"
            type="tel"
            placeholder="Phone number"
            setValue={methods.setValue}
          />
        </div>
        <FormButton>Book</FormButton>
      </form>
    </FormProvider>
  );
}
