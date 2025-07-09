import { JSX, ClassAttributes, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export const Button = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={styles.Button} {...props} />
}
