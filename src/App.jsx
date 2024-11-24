
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

  

  return (
    <>
     <GlobalStyles/>
     <HeaderComponent/>
     <TaskForm/>
    </>
  )
}

export default App
