import { useState } from 'react';
import { Header, NewTask, Tasks} from './Components';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.scss';

type Task ={
  id: string;
  title: string;
  isCompleted: boolean;
}

const App = () => {
  
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(newTaskTitle: string){
    const id = uuidv4();
    const newTask : Task ={id, title:newTaskTitle, isCompleted:false}
    setTasks([...tasks, newTask])
  }

  function handleRemoveTask(taskId:string){
    setTasks((state) => {
      return state.filter((taskItem) => taskItem.id !== taskId);
    });

  }

  function handleToggleTaskComplete(taskId:string){
    setTasks((state) =>{
      return state.map((taskItem) =>{
        if (taskItem.id === taskId){
          return{
            ...taskItem,
            isCompleted: !taskItem.isCompleted
          };
        }
        return taskItem
      })
    })

  }


  return (
    <div className={styles.wrapper}>
      <Header />
      <NewTask  onCreateNewTask={addNewTask}/>
      <Tasks
        tasks={tasks}
        onRemoveTask ={handleRemoveTask}
        onToggleTaskComplete= {handleToggleTaskComplete}
      />
    </div>
  )
}

export default App
