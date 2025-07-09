import { useRecipeStore } from '@/store';
import styles from './PortionControl.module.scss';

export const PortionControl = () => {
  const portions = useRecipeStore((state) => state.portions);
  const setNumberOfPortions = useRecipeStore(state => state.setNumberOfPortions);
  return (
    (
      <div className={styles.PortionControl}>
        <h3>Portions</h3>
        <div className={styles.counterSection}>
          <button
            className={styles.counterButton}
            disabled={portions.quantity === 1}
            onClick={() => setNumberOfPortions(portions.quantity! - 1)}
          >−</button>
          <h2 className={styles.currentCount}>
            {portions.quantity}
          </h2>
          <button
            className={styles.counterButton}
            onClick={() => setNumberOfPortions(portions.quantity! + 1)}
          >+</button>
        </div>
      </div>)
  );
};
