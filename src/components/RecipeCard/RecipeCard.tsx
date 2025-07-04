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
        <Image className={styles.image} width={500} height={500} src={imageUrl} alt={`${title} image`} />
      {/* <div className={styles.imageContainer}> */}
      {/* </div> */}
      <div className={styles.recipeDetails}>
        <p>{description}</p>
        <p>{`${difficulty}/10 difficulty`}</p>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </a>
  );
};
