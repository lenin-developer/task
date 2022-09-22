import {string} from 'prop-types'
import styles from './title.module.css'

export const Title = ({children}) => {
    return ( 
        <h1 className={styles.title} >{children}</h1>
     );


}

Title.propTypes = {
    text:string
}
