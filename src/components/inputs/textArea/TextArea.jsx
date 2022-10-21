import { bool, string } from 'prop-types'
import styles from './textArea.module.css'

export const TextArea = ({
  placeholder, value, rows, readonly,
  width,
  changeDescription,
  ...rest
}) => {
  const stylesInline = {}
  if (width) stylesInline.width = width

  return (
    <textarea
      value={value}
      rows={rows}
      readOnly={readonly}
      autoComplete='off'
      className={`${styles.textArea}`}
      style={stylesInline}
      {...rest}
    />
  )
}

TextArea.propTypes = {
  value: string,
  rows: string,
  width: string,
  readonly: bool
}

TextArea.defaultProps = {
  rows: '6',
  readonly: false
}
