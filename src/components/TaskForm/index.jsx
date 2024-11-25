import React, { useState } from 'react'
import { FormContainer } from './style'


function TaskForm({ onAdd,tarefasExist }) {
    const [task, setTask] = useState({
        nome: '',
        custo: '',
        dataLimite: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTask((prev) => ({ ...prev, [name]: value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const nomeExists = tarefasExist.some(
            (tarefa) => tarefa.nome.toLowerCase() === task.nome.toLowerCase()
        );

        if(nomeExists){
            alert("Já existe uma tarefa com este nome!")
            return
        }

        if (!task.nome || !task.custo || !task.dataLimite) {
            alert('preeencha os campos')
            return
        }

        onAdd({
            ...task,
            custo: parseFloat(task.custo),
            dataLimite: new Date(task.dataLimite).toDateString(),
        })

        setTask({ nome: "", custo: "", dataLimite: "" })

        
        console.log(task);
        

    }

    return (
        <>
            <div>
                <FormContainer onSubmit={handleSubmit}>
                    <h1>Gerencie suas Tarefas</h1>
                    <div>
                        <span>Nome:</span>
                        <input
                            type="text"
                            name='nome'
                            placeholder='nome da tarefa'
                            value={task.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span>Custo:</span>
                        <input
                            type="number"
                            name="custo"
                            placeholder="Custo da tarefa"
                            value={task.custo}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <span>Data Limite:</span>
                        <input
                            type="date"
                            name="dataLimite"
                            placeholder="Data limite"
                            value={task.dataLimite}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit'>Adicionar tarefa</button>

                </FormContainer>
            </div>
        </>
    )
}

export default TaskForm
