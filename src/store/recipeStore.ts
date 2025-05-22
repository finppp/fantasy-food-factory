// store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RecipeWithStatus } from '../types';

type State = {
  recipe: RecipeWithStatus;
  setRecipe: (recipe: RecipeWithStatus) => void;
  // markStepComplete: (recipeId: string, stepIndex: number) => void;
};

export const useRecipeStore = create<State>()(
  persist(
    (set) => ({
      recipe: {} as RecipeWithStatus, // Default value for recipe
      setRecipe: (recipe: RecipeWithStatus) => {
        set((state) => ({
          ...state,
          recipe,
        }) )
      },
      // markStepComplete: (recipeId: string, stepIndex: number) =>
      //   set((state) => {
      //     const steps = new Set(state.progress[recipeId] || []);
      //     steps.add(stepIndex);
      //     return {
      //       progress: {
      //         ...state.progress,
      //         [recipeId]: Array.from(steps),
      //       },
      //     };
      //   }),
    }),
    {
      name: 'recipe-progress', // key in localStorage
    }
  )
);


// const setIngredientAsPrepped = (isChecked: boolean, ingredientIndex: number) => {
//   const updatedIngredients = [...recipe.ingredients]
//   updatedIngredients[ingredientIndex].isPrepped = isChecked
//   setRecipe({
//     ...recipe,
//     ingredients: updatedIngredients,
//   })
// }
