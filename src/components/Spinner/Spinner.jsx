import RingLoader from "react-spinners/RingLoader";

import css from "./Spinner.module.css";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Spinner({ isLoading }) {
  return (
    <div className={css.spinerContainer}>
      <RingLoader
        color={"var(--main-spinner-color)"}
        loading={isLoading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
