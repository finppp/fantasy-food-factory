import { DIFFICULTIES, FATBOI_RATINGS } from '@/constants';
import { Recipe } from '@/types';
import { generateDurationText } from '@/utils';
import { Checkbox } from '../Checkbox';

interface RecipeViewerProps {
  recipe: Recipe;
}

export const RecipeViewer = ({ recipe }: RecipeViewerProps) => {

  const { author, description, difficulty, duration, ingredients, method, slug, title, defaultPortions, unhealthinessRating } = recipe;
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{author}</h3>
      <h3>{DIFFICULTIES[difficulty]}</h3>
      <h3>{FATBOI_RATINGS[unhealthinessRating]}</h3>
      <h3>Time to make: {generateDurationText(duration)}</h3>
      {ingredients.map((ingredient) => (
        <div key={ingredient.name}>
          <Checkbox /> 
          <p>{ingredient.name}</p>
        </div>
      ))}
    </div>
  );
};
