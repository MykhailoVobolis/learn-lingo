import heroImg from "../../assets/images/hero-img.webp";
import heroImg2x from "../../assets/images/hero-img@2x.webp";

import css from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <picture>
      <source srcSet={heroImg2x} type="image/webp" media="(min-resolution: 2dppx)" />

      <img className={css.heroImage} src={heroImg} alt="Hero Image" width="568" height="530" />
    </picture>
  );
}
