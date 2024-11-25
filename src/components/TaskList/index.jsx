import { ListContainer, TaskActions, TaskItem, EditForm } from './style';
import { useState } from 'react';

function TaskList({ tarefas, onEdit, onDelete }) {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState({});

    const handleEditClick = (tarefa) => {
        setEditingTaskId(tarefa.id);
        setEditedTask(tarefa);
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
                        <TaskItem key={tarefa.id}>
                            <div>
                                <strong>{tarefa.nome}</strong>
                                <div>
                                    <span>R$ {tarefa.custo.toFixed(2)}</span>
                                </div>
                                <p>Data Limite: {new Date(tarefa.dataLimite).toLocaleDateString()}</p>
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
