import { AUTO_COMPLETE_PREP_METHODS, PREP_METHODS } from '@/constants';
import { Ingredient, Recipe, RecipeWithStatus } from '@/types';

/** Takes a simple recipe data and adds status flags: `isPrepped`, `isCompleted` and `isOwned`  */
export const enhanceRecipe = (recipe: Recipe): RecipeWithStatus => {
  // Add properties to recipe object
  const enhancedRecipe: RecipeWithStatus = {
    ...structuredClone(recipe),
    ingredients: recipe.ingredients.map((ingredient) => ({
      ...ingredient,
      isPrepped: isIngredientAutoPrepped(ingredient),
      isOwned: false,
    })),
    method: recipe.method.map((methodItemText) => ({
      text: methodItemText,
      completed: false,
    })),
  }
  return enhancedRecipe
}


const isIngredientAutoPrepped = (ingredient: Ingredient): boolean => {
  const preparationMethodKey = ingredient.preparationMethod as keyof typeof PREP_METHODS;
  console.log('preparationMethodKey', preparationMethodKey);
  return AUTO_COMPLETE_PREP_METHODS.includes(preparationMethodKey);
  // }
  // return AUTO_COMPLETE_PREP_METHODS.includes(ingredient.preparationMethod)
}
