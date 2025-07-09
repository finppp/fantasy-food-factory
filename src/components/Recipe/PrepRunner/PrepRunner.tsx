import styles from './PrepRunner.module.scss';
import { Button } from '@/components/Button';
import { PREP_METHODS } from '@/constants';
import { useRecipeStore } from '@/store';
import { IngredientWithStatus } from '@/types';
import { getIngredientString } from '@/utils';

const getFirstUnpreppedIngredientIndex = (ingredients: IngredientWithStatus[]) => ingredients.findIndex((ingredient) => !ingredient.isPrepped);

export const PrepRunner = () => {
  const ingredients = useRecipeStore((state) => state.recipe.ingredients);
  const setIngredientPreppedStatus = useRecipeStore((state) => state.setIngredientPreppedStatus);
  const currentIngredientIndex = getFirstUnpreppedIngredientIndex(ingredients);
  const currentIngredient = ingredients[currentIngredientIndex];
  const portionMultiplier = useRecipeStore((state) => state.portions.multiplier);
  const isPrepCompleted = currentIngredientIndex === -1;

  return (
    <div className={styles.PrepRunner}>
      {!isPrepCompleted && (
        <>
          <h2>
            {getIngredientString(currentIngredient, portionMultiplier!)}
          </h2>
          <Button onClick={() => setIngredientPreppedStatus(currentIngredientIndex, true)}>
            {PREP_METHODS[currentIngredient.preparationMethod].pastTense}
          </Button>
        </>
      )}
      {isPrepCompleted && (
        <>
          <h2>Prep is done!</h2>
          <h3>{"It's time to cook!"}</h3>
        </>
      )}
    </div>
  );
}

