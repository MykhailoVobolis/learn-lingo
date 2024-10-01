import { useSelector } from "react-redux";
import { TutorFeaturesBar } from "../../components/TutorFeaturesBar/TutorFeaturesBar.jsx";
import { selectLoading } from "../../redux/auth/selectors.js";

import AboutApp from "../../components/AboutApp/AboutApp.jsx";
import HeroImage from "../../components/HeroImage/HeroImage.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

import css from "./HomePage.module.css";

export default function HomePage() {
  const loading = useSelector(selectLoading);

  return (
    <section className={css.hero}>
      {loading && <Spinner isLoading={loading} />}
      <div className={css.container}>
        <AboutApp />
        <HeroImage />
      </div>
      <TutorFeaturesBar />
    </section>
  );
}
