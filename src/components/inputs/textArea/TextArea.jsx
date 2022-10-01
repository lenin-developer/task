import { bool, string } from 'prop-types';
import styles from './textArea.module.css';

export const TextArea = ({
    placeholder, value, rows, readonly, disabled, 
    width, ...rest}) => {

    let stylesInline = {};
    if(width) stylesInline.width = width;
   
    return (
        <textarea 
        autoComplete='off' 
        placeholder={placeholder}
        value={value}
        rows={rows}
        readOnly={readonly}
        disabled={disabled}
        className={`${styles.textArea}`}
        style={stylesInline}
        {...rest}
        />
     );
}

TextArea.propTypes = {
    placeholder: string,
    value: string,
    rows:string,
    width: string,
    readonly: bool,
    disabled: bool,

}

TextArea.defaultProps = {
    placeholder: 'description...',
    rows:'6',
    width:'40',
    readonly: false,
    disabled: false,
}
