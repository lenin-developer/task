import { string } from 'prop-types'
import styles from './button.module.css'

export const Button = ({ text, type, ...res }) => {
  return (
    <button type={type} className={styles.button} {...res}>{text}</button>
  )
}

Button.propTypes = {
  text: string,
  type: string
}

Button.defaultProps = {
  type: 'button'
}
