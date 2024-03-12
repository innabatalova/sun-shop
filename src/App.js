import logo from './img/logo.svg'
import styles from './App.module.sass'
import Button from './components/Button'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.headline_one}>This is some text</span>
      <span className={styles.headline_two}>This is some text</span>
      <span className={styles.headline_three}>This is some text</span>
      <span className={styles.headline_four}>This is some text</span>
      <span className={styles.headline_five}>This is some text</span>
      <span className={styles.headline_six}>This is some text</span>
      <span className={styles.body_small}>This is some text</span>
      <span className={styles.body_medium}>This is some text</span>
      <span className={styles.body_large}>This is some text</span>
      <img src={logo} className={styles.logo} alt="Logo Malina Shop" />
      <Button IButtonTextProps='Button' IButtonColorProps ='white'/>
    </div>
  )
}

export default App