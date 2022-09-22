import styles from './inputText.module.css'
import { string } from 'prop-types';

export const InputText = ({placeholder}) => {

    return (
        <input type="text" className={`${styles.inputText}`}  placeholder={placeholder} />
    );
}

InputText.propTypes = {
    placeholder: string
}