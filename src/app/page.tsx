import { FactCard, RecipeCard } from '@/components';
import styles from "./page.module.scss";
import utilStyles from '@/styles/utils.module.scss';

export default function Home() {
  return (
    <div>
      {/* <main className={styles.main}> */}
      {/* </main> */}
      <div className={utilStyles.containerAlt}>
        <h1>Welcome to the greatest recipe website in entire world!</h1>
        <h2>Have a look around</h2>

      </div>
      <div className={utilStyles.container}>
        <h2>Latest Recipes - to be static props from BE</h2>
        <div className={utilStyles.grid}>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
      <div className={utilStyles.containerAlt}>
        <div className={styles.achievements}>
          <FactCard topText="Over" middleText="7" bottomText="recipes" />
          <FactCard topText="Featuring" middleText="1" bottomText="author" />
          <FactCard topText="Founded in" middleText="2019" bottomText="...whoa!" />
          <FactCard topText="Instagram" middleText="700+" bottomText="followers" />
        </div>
      </div>
    </div>
  );
}
