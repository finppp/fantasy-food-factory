"use client"
import { DIFFICULTIES, FATBOI_RATINGS } from '@/constants';
import { IngredientWithStatus, Recipe, RecipeWithStatus } from '@/types';
import { enhanceRecipe, generateDurationText } from '@/utils';
import { Checkbox } from '../Checkbox';
import { useState } from 'react';

interface RecipeViewerProps {
  recipe: Recipe;
}

export const RecipeViewer = ({ recipe: recipeData }: RecipeViewerProps) => {

  // extend incase it's not loaded!
  const [recipe, setRecipe] = useState<RecipeWithStatus>(enhanceRecipe(recipeData))
  console.log('recipe', recipe);

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
