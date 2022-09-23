import { FormTaskAdd } from './widgets/formTaskAdd/FormTaskAdd'
import { Aside } from './sections'
import styles from './home.module.css'

export const Home = () => {
    return (
        <main className={styles.main}>
            <Aside>
                <FormTaskAdd />
            </Aside>
        </main>
    );
}