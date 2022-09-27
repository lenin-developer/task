import styles from './main.module.css'
import { Task } from '../../widgets'
import {array} from 'prop-types'

export const Main = ({tasks}) => {
    
    return (
        <main className={styles.main} >
            <h1>Number Task: { } </h1>
            <section className={styles.main__sectionTasks} >
                {tasks.map((task) => (<Task key={task?.id} task={task} />) )}
            </section>
        </main>
    );
}

Main.propTypes = {
    tasks: array
}

Main.defaultProps = {
    tasks: []
}
