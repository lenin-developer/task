import styles from './aside.module.css'
import {element} from 'prop-types'

export const Aside = ({children}) => {
    return (
        <aside className={styles}>
            {children}
        </aside>
    );
}

Aside.propTypes = {
    children: element
}

Aside.defaultProps = {
    children: <></>
}