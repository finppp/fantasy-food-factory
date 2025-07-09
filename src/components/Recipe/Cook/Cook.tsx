import { Checkbox } from '@/components/Checkbox';
import { useRecipeStore } from '@/store';

export const Cook = () => {
  const method = useRecipeStore((state) => state.recipe.method);

  console.log({method});
  
  const setMethodCompletedStatus = useRecipeStore(state => state.setMethodCompletedStatus);

  return (
    <>
      <h2>Cook!</h2>
      {method.map((step, i) => (
        <Checkbox
          key={i}
          label={step.text}
          checked={step.completed}
          onChange={(e) => setMethodCompletedStatus(i, e.target.checked)} 
        />
      ))}
    </>
  );
};
