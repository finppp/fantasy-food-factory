"use client";
import { DIFFICULTIES, FATBOI_RATINGS } from '@/constants';
import { Recipe } from '@/types';
import { areAllItemsOwned, enhanceRecipe, generateDurationText, isPrepCompleted } from '@/utils';
import { useEffect } from 'react';
import { useRecipeStore } from '@/store';
import { IngredientList, IngredientListType } from '../IngredientList/IngredientList';
import { Tabs } from '../Tabs';

interface RecipeViewerProps {
  recipe: Recipe;
}

export const RecipeViewer = ({ recipe: recipeData }: RecipeViewerProps) => {
  const recipe = useRecipeStore((state) => state.recipe);
  const setRecipe = useRecipeStore((state) => state.setRecipe);

  useEffect(() => {
    setRecipe(enhanceRecipe(recipeData));
  }, [recipeData]);

  if (!recipe.title) {
    return <h1>Loading!</h1>;
  }

  const { author, description, difficulty, duration, ingredients, method, slug, title, defaultPortions, unhealthinessRating } = recipe;

  return (
    <div>
      <h3>{title}</h3>
      <h3>{`Prepped?: ${isPrepCompleted(recipe.ingredients)}`}</h3>
      <h3>{`Bought?: ${areAllItemsOwned(recipe.ingredients)}`}</h3>
      <h3>{description}</h3>
      <h3>{author}</h3>
      <h3>{DIFFICULTIES[difficulty]}</h3>
      <h3>{FATBOI_RATINGS[unhealthinessRating]}</h3>
      <h3>Time to make: {generateDurationText(duration)}</h3>
      <Tabs tabs={[
        {
          label: 'Buy', content: (
            <><h2>BUY</h2><IngredientList listType={IngredientListType.buy} /></>)
        },
        {
          label: 'Prep', content: (
            <><h2>PREP</h2><IngredientList listType={IngredientListType.prep} /></>
          )
        },
        {
          label: 'Cook', content: (
            <><h2>Cook!</h2></>
          )
        },
      ]} />
    </div>
  );
};
