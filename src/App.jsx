
import { useEffect, useState } from 'react'
import HeaderComponent from './components/Header'
import TaskForm from './components/TaskForm'
import GlobalStyles from './styles/Global'
import api from './api/api';


function App() {
  const [tarefas,setTarefas] = useState([]);


  useEffect(() =>{
    fetchTasks();
  },[])

  const fetchTasks = async () => {
    try{
      const response = await api.get("/tarefas");

      setTarefas(response.data)
      
    } catch(error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  }

  const addTask = async (newTask) => {
    try {
      const response = await api.post("/tarefas",newTask)

      setTarefas((prevTask) => [...prevTask,response.data])
    } catch(error){
      console.error('erro ao adicionar tarefa',error)
    }
  }

  const editTask = async (taskId) => {
    try{

      await api.delete(`/tarefas/${taskId}`);
      setTarefas((prevTask) => prevTask.filter((task) => task.id !== taskId ));

    } catch(error){
      console.error('Erro ao deletar tarefa:', error);
    }
  }

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tarefas/${taskId}`)
      setTarefas((prevTask) => prevTask.filter((task) => task.id !== taskId))

    } catch(error) {
      console.error('Erro ao excluir tarefa:', error);

    }
  }

  

  return (
    <>
     <GlobalStyles/>
     <HeaderComponent/>
     <TaskForm/>
    </>
  )
}

export default App
