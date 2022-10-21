import styles from './inputText.module.css'
import { string } from 'prop-types'

export const InputText = ({ placeholder, ...res }) => {
  return (
    <input type='text' className={`${styles.inputText}`} placeholder={placeholder} {...res} />
  )
}

InputText.propTypes = {
  placeholder: string
}
