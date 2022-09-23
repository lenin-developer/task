import { Button, InputText, TextArea, Title } from '../../../../components';
import styles from './formTaskAdd.module.css'


export const FormTaskAdd = () => {
    return (
        <aside className={styles.aside}>
            <form className={styles.aside__from}>
                <Title>App Task React</Title>
                <div className={styles.from__containerInputs}>
                    <InputText placeholder={'Title'} />
                    <TextArea />
                    <Button text={'ADD'} />
                </div>
            </form>
        </aside>
    );
}