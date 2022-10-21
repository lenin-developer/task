import { useState } from 'react'
import { Modal, InputText, TextArea } from '../../../../components'
import { string, shape, number } from 'prop-types'

export const TaskEdit = ({ title, task, show, setShow }) => {
  const { attributes, id } = task

  const [taskData, setTaskData] = useState({
    title: attributes.title,
    description: attributes.description
  })

  const changeTitle = ({ target }) => {
    setTaskData({
      ...taskData,
      title: target.value
    })
  }

  const cahngeDrescription = ({ target }) => {
    setTaskData({
      ...taskData,
      description: target.value
    })
  }

  return (
    <>
      <Modal title={title} show={show} setShow={setShow}>
        <section>
          <InputText value={taskData?.title} onChange={(e) => changeTitle(e)} />
          <TextArea width='100%' value={taskData?.description} onChange={(e) => cahngeDrescription(e)} />
        </section>
        <footer>
          <button>Save</button>
          <button>Cancel</button>
        </footer>
      </Modal>
    </>
  )
}

TaskEdit.propTypes = {
  title: string,
  task: shape({
    id: number,
    attributes: shape({
      title: string,
      description: string
    })
  })
}
