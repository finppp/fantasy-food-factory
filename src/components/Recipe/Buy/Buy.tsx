import { IngredientList, IngredientListType } from '@/components/IngredientList';
import { useRecipeStore } from '@/store';

export const Buy = () => {
  // const defaultPortions = useRecipeStore(state => state.recipe.defaultPortions)
  const portions = useRecipeStore((state) => state.portions);
  const setNumberOfPortions = useRecipeStore(state => state.setNumberOfPortions)
  console.log({portions});
  return (
    (
      <>
        <h2>BUY</h2>
        <p>
          Portions: {portions.quantity}
          Multiplier: {portions.multiplier}
        </p>
        <button disabled={portions.quantity === 1} onClick={() => setNumberOfPortions(portions.quantity! - 1)}>Decrease portions</button>
        <button onClick={() => setNumberOfPortions(portions.quantity! + 1)}>Increase portions</button>
        <IngredientList listType={IngredientListType.buy} />
      </>)
  );
};
