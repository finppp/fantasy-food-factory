import { IngredientList, IngredientListType } from '@/components/IngredientList';
import { PrepRunner } from '../PrepRunner';

export const Prep = () => {
  return (
    (
      <>
        <PrepRunner />
        <IngredientList listType={IngredientListType.prep} />
      </>)
  );
};
