import styles from './home.module.css'
import { Aside, Main } from './sections'
import { Hr } from './widgets'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initTasks } from '../../redux/task'

// let init = true;

export const Home = () => {
  const dispatch = useDispatch()
  const { tasks } = useSelector(state => state)
  const { list } = tasks

  useEffect(() => {
    // if(init){
    // init = false
    dispatch(initTasks())
    // }
  }, [])

  return (
    <div className={styles.homeLayout}>
      <Aside />
      <Hr />
      <Main tasks={list} />
    </div>
  )
}
