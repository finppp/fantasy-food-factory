// store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RecipeWithStatus } from '../types';

type State = {
  recipe: RecipeWithStatus;
  setRecipe: (recipe: RecipeWithStatus) => void;
  setIngredientPreppedStatus: (ingredientIndex: number, newValue: boolean) => void;
  isPrepCompleted: boolean;
  // markStepComplete: (recipeId: string, stepIndex: number) => void;
};

export const useRecipeStore = create<State>()(
  persist(
    (set, get) => ({
      recipe: {} as RecipeWithStatus, // Default value for recipe
      setRecipe: (recipe: RecipeWithStatus) => {
        set((state) => ({
          ...state,
          recipe,
        }) )
      },
      setIngredientPreppedStatus: (ingredientIndex: number, newValue: boolean) => {
        set((state) => {
          const updatedIngredients = [...state.recipe.ingredients];
          updatedIngredients[ingredientIndex] = {
            ...updatedIngredients[ingredientIndex],
            isPrepped: newValue,
          };

          return {
            ...state,
            recipe: {
              ...state.recipe,
              ingredients: updatedIngredients,
            },
          };
        } )
      },
      get isPrepCompleted() {
        const ingredients = get().recipe.ingredients || [];
        console.log('ingredients', ingredients);
        return ingredients.length > 0 && ingredients.every((ingredient) => ingredient.isPrepped);
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
