import AboutApp from "../../components/AboutApp/AboutApp.jsx";
import HeroImage from "../../components/HeroImage/HeroImage.jsx";
import { TutorFeaturesBar } from "../../components/TutorFeaturesBar/TutorFeaturesBar.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <AboutApp />
        <HeroImage />
      </div>
      <TutorFeaturesBar />
    </section>
  );
}
