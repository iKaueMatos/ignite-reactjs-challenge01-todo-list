
import { Trash } from 'phosphor-react';
import styles from './TaskItem.module.scss';

interface TaskItemProps{
    id: string;
    title: string;
    isChecked: boolean;
    deleteTask : (taskId: string) => void;
    checkedTask : (taskId: string) => void;
}

const TaskItem = ({id, title , isChecked, deleteTask, checkedTask}: TaskItemProps) => {

  function removeTaskItem(taskId : string){
    deleteTask(taskId)
  }

  function handleCheckedTask(taskId: string){
    checkedTask(taskId);
  }

    return(
        <div key={id} className={styles.taskItemContainer}>
            <input 
                type="checkbox" 
                checked={isChecked}
                className={styles.checkbox}
                onChange={() => {handleCheckedTask(id)}}
            />
            <p className={isChecked ? styles.taskTitleCompleted : styles.taskTitle}>
                {title}
            </p>
            <Trash 
                size={24}
                className={styles.iconDelete}
                onClick={() =>{removeTaskItem(id)}}
            />
        </div>
    )
}

export default TaskItem;