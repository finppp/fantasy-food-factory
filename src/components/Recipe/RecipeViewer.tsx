"use client"
import { DIFFICULTIES, FATBOI_RATINGS } from '@/constants';
import { Recipe } from '@/types';
import { enhanceRecipe, generateDurationText } from '@/utils';
import { Checkbox } from '../Checkbox';
import { useEffect } from 'react';
import { useRecipeStore } from '@/store';

interface RecipeViewerProps {
  recipe: Recipe;
}

export const RecipeViewer = ({ recipe: recipeData }: RecipeViewerProps) => {
  const { setRecipe, recipe} = useRecipeStore()

  useEffect(() => {
    setRecipe(enhanceRecipe(recipeData))
  }, [])

  console.log('recipe', recipe);

  if (!recipe.title) {
    return <h1>Loading!</h1>
  }
  const { author, description, difficulty, duration, ingredients, method, slug, title, defaultPortions, unhealthinessRating } = recipe;
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{author}</h3>
      <h3>{DIFFICULTIES[difficulty]}</h3>
      <h3>{FATBOI_RATINGS[unhealthinessRating]}</h3>
      <h3>Time to make: {generateDurationText(duration)}</h3>
      {ingredients.map((ingredient, index) => (
      <div key={ingredient.name}>
        <Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIngredientAsPrepped(e.target.checked, index)}/> 
        <p>{ingredient.name}</p>
      </div>
      ))}
    </div>
  );
};
