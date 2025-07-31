import Image from 'next/image';
import styles from './RecipeCard.module.scss';

export type RecipeCardProps = {
  imageUrl: string;
  title: string;
  url: string;
  difficulty: number;
  description: string;
};

export const RecipeCard = ({ imageUrl, title, url, description, difficulty }: RecipeCardProps) => {
  return (
    <a href={url} className={styles.RecipeCard}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} width={500} height={200} src={imageUrl} alt={`${title} image`} />
        <div className={styles.recipeDetailsOverlay}>
          <div className={styles.recipeStatsContainer}>
            <div className={styles.recipeStat}>
              <p>{`${difficulty}/10`}</p>
              <p>difficulty</p>
            </div>
            <div className={styles.recipeStat}>
              <p>2 hours</p>
              <p>cooking time</p>
            </div>
            <div className={styles.recipeStat}>
              <p>3/10</p>
              <p>grease level</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recipeDetails}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
