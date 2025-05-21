import { RecipeViewer } from '@/components';
import { CLARIFIED_MILK_PUNCH } from '@/constants/recipes';

// function generateStaticParams() {}
 
export default function Page() {
  return (
    <>
    <h1>{"It\'s a recipe!"}</h1>
    <RecipeViewer recipe={CLARIFIED_MILK_PUNCH}/>
    </>

  )
}
