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
      <input checked={checked} id={id} type="checkbox" onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
