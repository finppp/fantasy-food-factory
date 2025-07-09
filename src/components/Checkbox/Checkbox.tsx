import clsx from 'clsx';
import styles from './Checkbox.module.scss';

import { useId } from 'react';

type CheckboxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  checked: boolean;
};

export const Checkbox = ({ onChange, label, checked }: CheckboxProps) => {
  const id = useId();

  return (
    <div className={styles.Checkbox}>
      <input checked={checked} id={id} type="checkbox" onChange={(onChange)} />
      <label className={styles.label} htmlFor={id}>
        <div className={styles.box}>
          {checked && <img className={styles.checkboxImage} src="/icons/times-light.svg" alt="check mark"/>}
        </div>
        <p className={clsx({
          [styles.text]: true,
          [styles.checked]: checked,
        })}>
          {label}
        </p>
      </label>
    </div>
  );
};
