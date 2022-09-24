import styles from './home.module.css';
import { Aside } from './sections';

export const Home = () => {
    return (
        <div className={styles.homeLayout}>
            <Aside />
        </div>
    );
}