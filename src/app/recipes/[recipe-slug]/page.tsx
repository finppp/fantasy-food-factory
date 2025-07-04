import { RecipeViewer } from '@/components';
import { CLARIFIED_MILK_PUNCH } from '@/constants/recipes';

// function generateStaticParams() {}

export default function Page() {
  return (
    <>
      <RecipeViewer recipe={CLARIFIED_MILK_PUNCH} />
    </>

  );
}
