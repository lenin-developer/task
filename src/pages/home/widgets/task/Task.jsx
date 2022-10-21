import { number, shape, string } from 'prop-types'
import { useDispatch } from 'react-redux'
import { Button, TextArea } from '../../../../components'
import { removeTaskRequired, editTaskReqired } from '../../../../redux/task/slices/taks'
import styles from './task.module.css'
import { TaskEdit } from '../TaskEdit/TaskEdit'
import { useState } from 'react'

export const Task = ({ task }) => {
  const { attributes, id } = task

  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const ClickDelete = () => {
    dispatch(removeTaskRequired({ id }))
  }

  const ClickEdit = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__task}>
        <h3 className={styles.task__title}>{attributes.title}</h3>
        <TextArea
          value={attributes.description}
          disabled
          width='406px'
        />
      </div>

      <div className={styles.card__opctionsTask}>
        <Button type='button' text='Edit' onClick={ClickEdit} />
        <Button type='button' text='Remove' onClick={ClickDelete} />
      </div>

      <TaskEdit title='EditTask' task={task} show={showModal} setShow={setShowModal} />

    </div>
  )
}

Task.propTypes = {
  task: shape({
    id: number,
    title: string,
    description: string
  }).isRequired
}
