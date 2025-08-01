import { Ingredient, IngredientWithStatus, PreparationMethod, WeightUnit } from '@/types';
import { lowerCaseFirstChar } from '../string';
import pluralize from 'pluralize';
import { PLURALIZED_UNITS, PREP_METHODS } from '@/constants';

export const isPrepCompleted = (ingredients: IngredientWithStatus[]) => {
 return ingredients.every((ingredient) => ingredient.isPrepped)
}

export const areAllItemsOwned = (ingredients: IngredientWithStatus[]) => {
 return ingredients.every((ingredient) => ingredient.isOwned)
}

export const getIngredientString = ({ name, count, unit }: Ingredient, portionMultiplier: number = 1) => {
  count = count * portionMultiplier
  name = lowerCaseFirstChar(name)
  name = pluralize(name, count)

  if (unit === '') {
    return `${count} ${pluralize(name, count)}`
  } else if (shouldUnitBePluralised(unit)) {
    return `${count} ${pluralize(unit, count)} of ${name}`
  }
  return `${count}${unit} ${name}`
}

export const shouldUnitBePluralised = (unit: WeightUnit) => {
  return PLURALIZED_UNITS.includes(unit)
}

export const isIngredientAutoPrepped = (prepMethod: keyof PreparationMethod) => {
  return !PREP_METHODS[prepMethod].action
}
