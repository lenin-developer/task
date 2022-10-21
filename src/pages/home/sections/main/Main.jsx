import styles from './main.module.css'
import { Task } from '../../widgets'
import { array } from 'prop-types'

export const Main = ({ tasks }) => {
  const copitasks = [
    ...tasks
  ]

  const NewList = copitasks?.sort((a, b) => {
    return ((a.id < b.id) ? 1 : (a.id > b.id) ? -1 : 0)
  })

  return (
    <main className={styles.main}>
      <h1>Number Task: {} </h1>
      <section className={styles.main__sectionTasks}>
        {NewList.map((task) => (<Task key={task?.id} task={task} />))}
      </section>
    </main>
  )
}

Main.propTypes = {
  tasks: array
}

Main.defaultProps = {
  tasks: []
}
