// store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RecipeWithStatus } from '../types';

type State = {
  recipe: RecipeWithStatus;
  setRecipe: (recipe: RecipeWithStatus) => void;
  setIngredientPreppedStatus: (ingredientIndex: number, newValue: boolean) => void;
  setIngredientOwnedStatus: (ingredientIndex: number, newValue: boolean) => void;
  setMethodCompletedStatus: (methodIndex: number, newValue: boolean) => void;
  isPrepCompleted: boolean;
  areAllItemsOwned: boolean;
  setNumberOfPortions: (newPortionMultiplier: number) => void;
  portions: {
    quantity: number | null;
    multiplier: number | null;
  };
};

export const useRecipeStore = create<State>()(
  persist(
    (set, get) => ({
      recipe: {} as RecipeWithStatus, // Default value for recipe
      setRecipe: (recipe: RecipeWithStatus) => {
        set((state) => ({
          ...state,
          recipe,
          portions: {
            quantity: recipe.defaultPortions,
            multiplier: 1,
          },
        }));
      },
      portions: {
        quantity: null,
        multiplier: null,
      },
      setNumberOfPortions: (newNumberOfPortions) => {
        set((state) => {
          return {
            ...state,
            portions: {
              multiplier: newNumberOfPortions / state.recipe.defaultPortions,
              quantity: newNumberOfPortions,
            }
          };
        });
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
        });
      },
      setIngredientOwnedStatus: (ingredientIndex: number, newValue: boolean) => {
        set((state) => {
          const updatedIngredients = [...state.recipe.ingredients];
          updatedIngredients[ingredientIndex] = {
            ...updatedIngredients[ingredientIndex],
            isOwned: newValue,
          };

          return {
            ...state,
            recipe: {
              ...state.recipe,
              ingredients: updatedIngredients,
            },
          };
        });
      },
      setMethodCompletedStatus: (methodIndex: number, newValue: boolean) => {
        set((state) => {
          const updatedRecipe = {...state.recipe}
          updatedRecipe.method[methodIndex].completed = newValue
          return {
            ...state,
            recipe: updatedRecipe,
          }
        })
      },
      get isPrepCompleted() {
        const ingredients = get().recipe.ingredients || [];
        return ingredients.length > 0 && ingredients.every((ingredient) => ingredient.isPrepped);
      },
      get areAllItemsOwned() {
        const ingredients = get().recipe.ingredients || [];
        return ingredients.length > 0 && ingredients.every((ingredient) => ingredient.isOwned);
      },

    }),
    {
      name: 'recipe-progress', // key in localStorage
    }
  )
);
