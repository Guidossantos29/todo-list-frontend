import { ListContainer, TaskActions, TaskItem, EditForm } from './style';
import { useState, useEffect } from 'react';

function TaskList({ tarefas, onEdit, onDelete }) {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState({});

    
    const formatDateForInput = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`; 
    };

    const handleEditClick = (tarefa) => {
        setEditingTaskId(tarefa.id);
        setEditedTask({
            ...tarefa,
            dataLimite: formatDateForInput(tarefa.dataLimite), 
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSaveClick = () => {
        onEdit(editedTask);
        setEditingTaskId(null);
    };

    return (
        <ListContainer>
            {tarefas.length > 0 ? (
                tarefas.map((tarefa) =>
                    editingTaskId === tarefa.id ? (
                        <EditForm key={tarefa.id}>
                            <input
                                type="text"
                                name="nome"
                                value={editedTask.nome}
                                onChange={handleInputChange}
                                placeholder="Nome da Tarefa"
                            />
                            <input
                                type="date"
                                name="dataLimite"
                                value={editedTask.dataLimite}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="custo"
                                value={editedTask.custo}
                                onChange={handleInputChange}
                                placeholder="Custo"
                            />
                            <button onClick={handleSaveClick}>Salvar</button>
                            <button onClick={() => setEditingTaskId(null)}>Cancelar</button>
                        </EditForm>
                    ) : (
                        <TaskItem style={{ backgroundColor: tarefa.custo >= 1000 ? 'yellow' : 'transparent' }} key={tarefa.id}>
                            <div>
                                <strong>{tarefa.nome}</strong>
                                <div>
                                    <span>R$ {tarefa.custo && !isNaN(tarefa.custo) ? tarefa.custo.toFixed(2) : '0.00'}</span>
                                </div>
                                <p>Data Limite: {new Date(tarefa.dataLimite).toLocaleDateString('pt-BR')}</p>
                            </div>

                            <TaskActions>
                                <button className="edit" onClick={() => handleEditClick(tarefa)}>
                                    Editar
                                </button>
                                <button className="delete" onClick={() => onDelete(tarefa.id)}>
                                    Excluir
                                </button>
                            </TaskActions>
                        </TaskItem>
                    )
                )
            ) : (
                <p>Nenhuma tarefa encontrada.</p>
            )}
        </ListContainer>
    );
}

export default TaskList;
