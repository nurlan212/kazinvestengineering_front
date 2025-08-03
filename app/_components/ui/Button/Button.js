import styles from './Button.module.css';

const Button = (props) => {
  const {title, ...currentProps} = props;
  return(
    <button className={styles.button} {...currentProps}>{title}</button>
  )
}

export default Button;