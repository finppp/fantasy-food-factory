// import styles from './Checkbox.module.scss';

type CheckboxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({onChange}: CheckboxProps) => {
  return (
    <input type="checkbox" onChange={onChange} />
  )
}
