import { GoStarFill } from "react-icons/go";
import css from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {
  const { reviewer_name, reviewer_rating, comment } = review;
  const rating = reviewer_rating.toFixed(1);

  return (
    <div className={css.reviewCard}>
      <div className={css.aboutAutorReview}>
        <img
          className={css.avatar}
          src={
            "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
          }
          alt={`${reviewer_name}'s avatar`}
          width={44}
          height={44}
          loading="lazy"
        />
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
