import styles from './Checkbox.module.scss';

import { useId } from 'react';

type CheckboxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export const Checkbox = ({ onChange, label }: CheckboxProps) => {
  const id = useId();

  return (
    <div className={styles.Checkbox}>
      <input id={id} type="checkbox" onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
