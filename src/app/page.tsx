import { RecipeCard } from '@/components';
import styles from "./page.module.css";
import utilStyles from '@/styles/utils.module.scss';

export default function Home() {
  return (
    <div>
      {/* <main className={styles.main}> */}
      {/* </main> */}
      <div className={utilStyles.containerAlt}>
        <h1>Oooooooo welcome</h1>
        <h2>FFFF has a website, baby!</h2>
      </div>
      <div className={utilStyles.container}>
        <h2>Latest Recipes</h2>
        <div className={utilStyles.grid}>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
      <div className={utilStyles.containerAlt}>
        <p>Over 7 recipes</p>
        <p>Founded in 2019</p>
        <p>With 1 author</p>
        <p>700+ followers on Insta</p>
      </div>
    </div>
  );
}
