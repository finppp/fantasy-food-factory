import { RecipeCard, RecipeCardProps } from '@/components';
import styles from './page.module.scss';
// function generateStaticParams() {}
const recipes: RecipeCardProps[] = [
  {
    imageUrl: '/recipeImages/cake.jpg',
    title: 'Cake',
    url: 'recipes/cake',
    description: 'It\'s a cake! Obviously!',
    difficulty: 3,
  },
  {
    imageUrl: '/recipeImages/fish.jpg',
    title: 'Some fish with a greeney delicious sauce',
    url: 'recipes/cake',
    description: 'A tasty fish dish with a green sauce.',
    difficulty: 2,
  },
  {
    imageUrl: '/recipeImages/humus.jpg',
    title: 'Humusy thing',
    url: 'recipes/cake',
    description: 'A delicious humus-based dish.',
    difficulty: 1,
  },
  {
    imageUrl: '/recipeImages/icecream.jpg',
    title: 'Ice cream!',
    url: 'recipes/cake',
    description: 'A sweet and creamy ice cream treat.',
    difficulty: 2,
  },
  {
    imageUrl: '/recipeImages/cake.jpg',
    title: 'Cake',
    url: 'recipes/cake',
    description: 'A delicious cake for dessert.',
    difficulty: 3,
  },
  {
    imageUrl: '/recipeImages/icecream.jpg',
    title: 'More Ice cream!',
    url: 'recipes/cake',
    description: 'Another sweet and creamy ice cream treat.',
    difficulty: 2,
  },
];

export default function Page() {
  return (
    <>
      <h1>{"List of recipes:"}</h1>
      <div className={styles.grid}>
        {recipes.map((recipe, i) => (
          <RecipeCard key={i} {...recipe} />
        ))}
      </div>
    </>

  );
}
