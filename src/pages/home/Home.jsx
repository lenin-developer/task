import {TadkAddForm} from './widgets/tadkAddForm/TadkAddForm'
import styles from './home.module.css'

export const Home = () => {
    return (
        <aside className={styles.layout}>
            <TadkAddForm />
            
        </aside>
    );
}