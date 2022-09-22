import {string} from 'prop-types'
import styles from './textArea.module.css'

export const TextArea = ({value ,placeholder}) => {
    return (
        <textarea 
        autoComplete='off' 
        placeholder={placeholder}
        cols="40"
        rows="10"
        className={styles.textArea}
        value={value}
        />
     );

}

TextArea.propTypes = {
    children: string,
    placeholder: string
}

TextArea.defaultProps = {
    placeholder: 'description'
}
