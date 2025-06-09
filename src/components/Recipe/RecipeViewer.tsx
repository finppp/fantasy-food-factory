"use client"
import { DIFFICULTIES, FATBOI_RATINGS } from '@/constants';
import { Recipe } from '@/types';
import { enhanceRecipe, generateDurationText, isPrepCompleted } from '@/utils';
import { Checkbox } from '../Checkbox';
import { useEffect } from 'react';
import { useRecipeStore } from '@/store';

interface RecipeViewerProps {
  recipe: Recipe;
}

export const RecipeViewer = ({ recipe: recipeData }: RecipeViewerProps) => {
  const recipe = useRecipeStore((state) => state.recipe);
  const setRecipe = useRecipeStore((state) => state.setRecipe);
  const setIngredientPreppedStatus = useRecipeStore((state) => state.setIngredientPreppedStatus);

  useEffect(() => {
    setRecipe(enhanceRecipe(recipeData));
  }, [recipeData]);

console.log('recjle, ]', recipe);
  if (!recipe.title) {
    return <h1>Loading!</h1>;
  }

  const { author, description, difficulty, duration, ingredients, method, slug, title, defaultPortions, unhealthinessRating } = recipe;

  return (
    <div>
      <h3>{title}</h3>
      <h3>{`prepped?: ${isPrepCompleted(recipe.ingredients)}`}</h3>
      <h3>{description}</h3>
      <h3>{author}</h3>
      <h3>{DIFFICULTIES[difficulty]}</h3>
      <h3>{FATBOI_RATINGS[unhealthinessRating]}</h3>
      <h3>Time to make: {generateDurationText(duration)}</h3>
      {ingredients.map((ingredient, index) => (
        <div key={ingredient.name}>
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIngredientPreppedStatus(index, e.target.checked)
            }
          />
          <p>{ingredient.name}</p>
        </div>
      ))}
    </div>
  );
};
