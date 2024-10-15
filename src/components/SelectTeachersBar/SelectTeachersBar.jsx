import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { setFilter } from "../../redux/teachers/slise.js";

import css from "./SelectTeachersBar.module.css";

export default function SelectTeachersBar() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(setFilter(data));
  };

  const handleChange = (name) => (event) => {
    const selectedValue = event.target.value;
    setValue(name, selectedValue); // Оновлює значення в react-hook-form
    handleSubmit(onSubmit)(); // Сабміт після оновлення значення
  };

  return (
    <form>
      <div>
        <label htmlFor="language">Languages</label>
        <select {...register("language")} id="language" onChange={handleChange("language")}>
          <option value="">All</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Mandarin Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Korean">Korean</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
        {errors.languages && <p>{errors.languages.message}</p>}
      </div>

      <div>
        <label htmlFor="level">Level of knowledge</label>
        <select {...register("level")} id="level" onChange={handleChange("level")}>
          <option value="">All</option>
          <option value="A1 Beginner">A1 Beginner</option>
          <option value="A2 Elementary">A2 Elementary</option>
          <option value="B1 Intermediate">B1 Intermediate</option>
          <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
          <option value="C1 Advanced">C1 Advanced</option>
          <option value="C2 Proficient">C2 Proficient</option>
        </select>
        {errors.level && <p>{errors.level.message}</p>}
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <select {...register("price")} id="price" onChange={handleChange("price")}>
          <option value="">All</option>
          <option value={25}>25 $</option>
          <option value={27}>27 $</option>
          <option value={28}>28 $</option>
          <option value={30}>30 $</option>
          <option value={32}>32 $</option>
          <option value={35}>35 $</option>
        </select>
        {errors.level && <p>{errors.level.message}</p>}
      </div>
    </form>
  );
}
