import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderComponent from './components/Header'
import TaskForm from './components/TaskForm'
import GlobalStyles from './styles/Global'
import api from './api/api';
import TaskList from './components/TaskList';


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

      toast.success('Tarefa criada com sucesso!');
    } catch(error){
      console.error('erro ao adicionar tarefa',error)
    }
  }

  const editTask = async (editedTask) => {
    try {

      await api.put(`/tarefas/${editedTask.id}`, editedTask);
  
      
      setTarefas((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editedTask.id ? { ...task, ...editedTask } : task
        )
      );
  
      toast.success('Tarefa atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tarefas/${taskId}`)
      setTarefas((prevTask) => prevTask.filter((task) => task.id !== taskId))

      toast.success('Tarefa excluída com sucesso!');
    } catch(error) {
      console.error('Erro ao excluir tarefa:', error);

    }
  }

  

  return (
    <>
     <GlobalStyles/>
     <HeaderComponent/>
     <TaskForm onAdd={addTask} tarefasExist={tarefas}/>
     <TaskList tarefas={tarefas} onEdit={editTask} onDelete={deleteTask}/>

     <ToastContainer />
    </>
  )
}

export default App
