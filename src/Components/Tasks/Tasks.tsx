//import { useState } from 'react';
import ListEmpty from '../ListEmpty/ListEmpty';
import TaskItem from '../TaskItem/TaskItem';

import styles from './Tasks.module.scss';

type Task  = {
    id: string;
    title:string;
    isCompleted: boolean;
}

interface TasksProps{
   tasks :Task[]; 
   onRemoveTask : (taskId : string) => void;
   onToggleTaskComplete : (taskId : string) => void;
}

const Tasks = ({tasks ,onRemoveTask , onToggleTaskComplete}:TasksProps) => {

    const totalTasksCreated = tasks.length;
    const totalTasksCompleted = tasks.reduce((acc, cur) => acc + Number(cur.isCompleted),0);
    
    return(
        <div className={styles.tasksContainer}>
            <div className={styles.infoTasks}>
                <div className={styles.tasksCreated}>
                    <h3 className={styles.tasksCreatedText}>Tarefas criadas</h3>
                    <span className={styles.tasksCounter}>{totalTasksCreated}</span>
                </div>
                <div className={styles.tasksDone}>
                    <h3 className={styles.tasksDoneText}>Concluídas</h3>
                    <span className={styles.tasksCounter}>
                        {totalTasksCreated === 0 ? totalTasksCreated :`${totalTasksCompleted} de ${totalTasksCreated}`}
                    </span>
                </div>
            </div>
            <div className={styles.tasksList}>
                {
                    tasks.length != 0 ? tasks.map((task) =>{
                        return <TaskItem 
                                    key={task.id} 
                                    id={task.id}
                                    title={task.title}
                                    isChecked={task.isCompleted}
                                    deleteTask={onRemoveTask} 
                                    checkedTask={onToggleTaskComplete}
                                />
                    }) : <ListEmpty />
                }
            </div>
            
        </div>
    )
}

export default Tasks;