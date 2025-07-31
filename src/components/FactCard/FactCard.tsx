import styles from './FactCard.module.scss';

type FactCardProps = {
  topText: string;
  middleText: string;
  bottomText: string;
};

export const FactCard = ({ topText, middleText, bottomText }: FactCardProps) => {
  return (
    <div className={styles.FactCard}>
      <p>{topText}</p>
      <h4 className={styles.circledText}>{middleText}</h4>
      <p>{bottomText}</p>
    </div>
  );
};
