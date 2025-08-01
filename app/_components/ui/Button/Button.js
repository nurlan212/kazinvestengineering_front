import styles from './Button.module.css';

const Button = ({title, onClickHandler}) => {
  return(
    <button className={styles.button} onClick={onClickHandler}>{title}</button>
  )
}

export default Button;