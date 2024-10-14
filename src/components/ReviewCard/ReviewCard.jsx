import { GoStarFill } from "react-icons/go";
import css from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {
  const { reviewer_name, reviewer_rating, comment } = review;
  const rating = reviewer_rating.toFixed(1);

  return (
    <div className={css.reviewCard}>
      <div className={css.aboutAutorReview}>
        <div className={css.firstLeterName}>{reviewer_name[0]}</div>
        <div>
          <h3 className={css.name}>{reviewer_name}</h3>
          <div>
            <div className={css.ratingContainer}>
              <GoStarFill className={css.starIcon} size={16} />
              <p className={css.rating}>{rating}</p>
            </div>
          </div>
        </div>
      </div>
      <p className={css.textReview}>{comment}</p>
    </div>
  );
}
