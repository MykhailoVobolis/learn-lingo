import { nanoid } from "nanoid";
import ReviewCard from "../ReviewCard/ReviewCard.jsx";

import css from "./Reviews.module.css";

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={nanoid()}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}
