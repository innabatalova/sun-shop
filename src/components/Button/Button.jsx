import styles from './Button.module.sass'

const Button = ({ IButtonColorProps, IButtonTextProps }) => {
  return (
    <button className={styles.button + ' ' + styles[IButtonColorProps]}>{IButtonTextProps}</button>
  )
}

export default Button