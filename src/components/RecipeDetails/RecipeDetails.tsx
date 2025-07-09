import { DIFFICULTIES, FATBOI_RATINGS } from '@/constants';
import styles from './RecipeDetails.module.scss';
import { generateDurationText } from '@/utils';
import { Duration } from '@/types';

type RecipeDetailsProps = {
  author: string;
  difficulty: number;
  duration: Duration;
  unhealthinessRating: number;
};

export const RecipeDetails = ({ author, difficulty, duration, unhealthinessRating }: RecipeDetailsProps) => {

  return (
    <div className={styles.RecipeDetails}>
      <h4>By {author}</h4>
      <div className={styles.statsContainer}>
        <div className={styles.statContainer}>
          <h5 className={styles.label}>Difficulty</h5>
          <p>{difficulty}/10</p>
          <p> {DIFFICULTIES[difficulty]} </p>
        </div>
        <div className={styles.statContainer}>
          <h5 className={styles.label}>Time to make</h5>
          <p>{generateDurationText(duration)}</p>
        </div>
        <div className={styles.statContainer}>
          <h5 className={styles.label}>Fatboi rating</h5>
          <p>{unhealthinessRating}/10</p>
          <p>{FATBOI_RATINGS[unhealthinessRating]}</p>
        </div>
      </div>
    </div>
  );
};
