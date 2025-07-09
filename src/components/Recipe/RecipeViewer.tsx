"use client";
import { Recipe } from '@/types';
import { enhanceRecipe} from '@/utils';
import { useEffect } from 'react';
import { useRecipeStore } from '@/store';
import { Tabs } from '../Tabs';
import { RecipeDetails } from '../RecipeDetails';
import { Buy } from './Buy';
import { Prep } from './Prep';

interface RecipeViewerProps {
  recipe: Recipe;
}

export const RecipeViewer = ({ recipe: recipeData }: RecipeViewerProps) => {
  const recipe = useRecipeStore((state) => state.recipe);
  const setRecipe = useRecipeStore((state) => state.setRecipe);
  // const portionMultiplier = useRecipeStore((state) => state.portionMultiplier);

  useEffect(() => {
    setRecipe(enhanceRecipe(recipeData));
  }, [recipeData]);

  if (!recipe.title) {
    return <h1>Loading!</h1>;
  }

  const { author, description, difficulty, duration, ingredients, method, slug, title, defaultPortions, unhealthinessRating } = recipe;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {/* <h3>{`Prepped?: ${isPrepCompleted(recipe.ingredients)}`}</h3> */}
      {/* <h3>{`Bought?: ${areAllItemsOwned(recipe.ingredients)}`}</h3> */}
      {/* <h2>PortionMultiplier: {portionMultiplier}</h2> */}
      <h3></h3>
      <RecipeDetails
        author={author}
        difficulty={difficulty}
        duration={duration}
        unhealthinessRating={unhealthinessRating}
      />
      <Tabs tabs={[
        {
          label: 'Buy', content: <Buy />,
        },
        {
          label: 'Prep', content: <Prep />
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
