import React from 'react'
import { FormContainer } from './style'

function TaskForm() {
    return (
        <>
            <div>
                <FormContainer>
                    <h1>Gerencie suas Tarefas</h1>
                    <div>
                        <span>Nome:</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Custo:</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Data Limite:</span>
                        <input type="text" />
                    </div>
                    <button>Adicionar tarefa</button>

                </FormContainer>
            </div>
        </>
    )
}

export default TaskForm
