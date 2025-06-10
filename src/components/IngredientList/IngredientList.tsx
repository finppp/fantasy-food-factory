import { useRecipeStore } from '@/store';
import { Checkbox } from '../Checkbox';
import { getIngredientString } from '@/utils';

export enum IngredientListType {
  buy = 'buy',
  prep = 'prep'
}

export type IngredientListProps = {
  listType: IngredientListType
};

export const IngredientList = ({listType}: IngredientListProps) => {
  const recipe = useRecipeStore((state) => state.recipe);
  const setIngredientPreppedStatus = useRecipeStore((state) => state.setIngredientPreppedStatus)
  const setIngredientOwnedStatus = useRecipeStore((state) => state.setIngredientOwnedStatus)
  const onChange = listType === IngredientListType.buy ? setIngredientOwnedStatus : setIngredientPreppedStatus;
  return (
    recipe.ingredients.map((ingredient, index) => (
        <Checkbox label={getIngredientString(ingredient)} onChange={(e) => onChange(index, e.target.checked)} key={index} />
    ))
  );
};
