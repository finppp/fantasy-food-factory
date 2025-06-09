import { IngredientWithStatus } from '@/types';

export const isPrepCompleted = (ingredients: IngredientWithStatus[]) => {
  console.log(ingredients);
 return ingredients.every((ingredient) => ingredient.isPrepped)
}
