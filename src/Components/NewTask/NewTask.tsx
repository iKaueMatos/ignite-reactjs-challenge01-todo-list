import { useState , FormEvent, ChangeEvent} from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.scss';

interface NewTaskProps{
    onCreateNewTask : (title:string) => void;
}

const NewTask = ({onCreateNewTask }: NewTaskProps) => {

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        onCreateNewTask(newTaskText);
        setNewTaskText('');
        console.log(newTaskText)
    }

    function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    const isNewTaskEmpty = newTaskText.length === 0 ;

    return(
        <form className={styles.addNewTaskContainer} onSubmit={handleCreateNewTask}>
            <input 
                type="text" 
                required 
                className={styles.inputNewTask} 
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskChange}
                value={newTaskText}
            />

            <button className={styles.btnNewTask} disabled={isNewTaskEmpty}>
                Criar <PlusCircle size={20} />
            </button>
        </form>
    )
}

export default NewTask;