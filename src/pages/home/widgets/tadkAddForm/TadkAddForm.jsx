import { Button, InputText, TextArea, Title } from '../../../../components';
import styles from './tadkAddForm.module.css'


export const TadkAddForm = () => {
    return (
        <aside className={styles.aside}>
            <Title>App Task React</Title>
            <InputText placeholder={'Title'} />
            <TextArea />
            <Button text={'ADD'}/>
        </aside>
    );
}