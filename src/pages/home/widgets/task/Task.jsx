import { number, shape, string } from 'prop-types'
import { useDispatch } from 'react-redux'
import { Button, TextArea } from '../../../../components'
import { removeTaskRequired } from '../../../../redux/task/slices/taks'
import styles from './task.module.css'


export const Task = ({ task }) => {

    console.log("task",task)

    const dispatch = useDispatch()

    const ClickDelete = () => {
        dispatch(removeTaskRequired({id:task.id}))
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__task}>
                <h3 className={styles.task__title}>{task?.attributes?.title}</h3>
                <TextArea
                    value={task?.attributes?.description}
                    disabled={true}
                    width='406px'
                />
            </div>

            <div className={styles.card__opctionsTask}>
                <Button type='button' text='Edit' onClick={ClickDelete} />
                <Button type='button' text='Remove' />
            </div>
        </div>
    );


}

Task.propTypes = {
    task: shape({
        id: number,
        title: string,
        description: string,
    }).isRequired
}
