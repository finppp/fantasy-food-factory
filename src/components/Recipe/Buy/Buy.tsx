import { IngredientList, IngredientListType } from '@/components/IngredientList';
import { PortionControl } from '../PortionControl';

export const Buy = () => {
  return (
    (
      <>
        <PortionControl />
        <IngredientList listType={IngredientListType.buy} />
      </>)
  );
};
