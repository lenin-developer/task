import { string } from 'prop-types'
import styles from './button.module.css'

export const Button = ({ text }) => {
    return (
        <button type='button' className={styles.button} >{text}</button>
    );


}

Button.propTypes = {
    text: string
}