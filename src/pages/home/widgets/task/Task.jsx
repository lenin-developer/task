import { string } from 'prop-types'
import { Button, TextArea } from '../../../../components'
import styles from './task.module.css'

export const Task = ({ title, description }) => {

    return (
        <div className={styles.card}>
            <div className={styles.card__task}>
                <h3 className={styles.task__title}>{title}</h3>
                <TextArea
                    value={description}
                    disabled={true}
                    width='406px'
                />
            </div>

            <div className={styles.card__opctionsTask}>
                <Button type='button' text='Edit' />
                <Button type='button' text='Remove' />
            </div>
        </div>
    );


}

Task.propTypes = {
    title: string,
    description: string,
}

Task.defaultProps = {
    title: '',
    description: '',
}