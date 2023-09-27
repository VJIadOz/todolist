import './App.scss';
import './reset.css';
import Sidebar from './Sidebar/Sidebar';
import Task from './Task/Task'
import { useState } from 'react';

function App() {
  const [listTasks, setListTasks] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)
  const [isEditedTask, setIsEditedTask] = useState([])
  const [idTask, setIdTask] = useState(1)

  
  function addNewTask(){
    setListTasks([...listTasks, {text: "", id:idTask, timeStart:"XX", timeEnd:"XX", isComplete: false}])
    setIdTask(idTask+1)
  }

  function setCompelete(idTask){
    setListTasks(listTasks.map((task)=>{
      if(task.id === idTask){
        return{
          ...task,
          isComplete: true
        }
      }else{
        return task
      }
    }))
  }

  function editTextTask(idTask, text, timeStart, timeEnd){
    setListTasks(listTasks.map((task)=>{
      if(task.id === idTask){
        return{
          ...task,
          text: text || "",
          timeStart: timeStart || "XX",
          timeEnd: timeEnd || "XX"
        }
      }else{
        return task
      }
    }))
  }

  function deleteTask(idTask){
    setListTasks(listTasks.filter((value)=>value.id !== idTask))
  }

  const workingFuncs = {setCompelete, editTextTask, deleteTask, editMobile: {isEditedTask, setIsEditedTask}}

  return (
    <div className={`App ${darkTheme?"App-dark":""}`}>
      <main className='list'>
        {listTasks.map(value=>
          <Task
            key={value.id}
            darkTheme={darkTheme}
            value={value}
            {...workingFuncs}/>
        )}
      </main>
      <Sidebar
        {...workingFuncs}
        themeInfo={{darkTheme, setDarkTheme}}
        addNewTask={addNewTask}
        listTasks={listTasks}
      />
    </div>
  );
}

export default App;
