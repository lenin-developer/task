import { useState } from 'react';
import { Button, InputText, TextArea, Title } from '../../../../components';
import styles from './formTaskAdd.module.css'
import {addTaskRequired} from '../../../../redux/task'
import {useDispatch} from 'react-redux'


export const FormTaskAdd = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submit = (e)=>{
        e.preventDefault()
        const data = {
            title,
            description,
        }
        dispatch(addTaskRequired(data))
    }


    return (
        <form className={styles.aside__from}>
            <Title>App Task React</Title>
            <div className={styles.from__containerInputs}>
                <InputText placeholder={'Title'} onChange={({target})=>setTitle(target.value)} value={title} />
                <TextArea onChange={ ({target})=>setDescription(target.value) }  value={description} />
                <Button text={'ADD'} type='submit' onClick={(e)=>submit(e)}  />
            </div>
        </form>
    );
}