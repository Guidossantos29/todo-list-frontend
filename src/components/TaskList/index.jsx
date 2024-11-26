import { ListContainer, TaskActions, TaskItem, EditForm } from './style';
import { useState } from 'react';
import api from '../../api/api';

function TaskList({ tarefas, onEdit, onDelete, onReorder }) {
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

    const handleCompleteClick = (id) => {
        const updatedTasks = tarefas.map((tarefa) =>
            tarefa.id === id
                ? { ...tarefa, concluida: !tarefa.concluida } 
                : tarefa
        );

        onReorder(updatedTasks); 
    };

    const moveTask = async (id, direction) => {
        const index = tarefas.findIndex((tarefa) => tarefa.id === id);
        if (index === -1) return;

        const newIndex = index + direction;

        if (newIndex < 0 || newIndex >= tarefas.length) return;

        const updatedTasks = [...tarefas];

        const order = updatedTasks[newIndex].ordemApresentacao;
        updatedTasks[newIndex].ordemApresentacao = updatedTasks[index].ordemApresentacao;
        updatedTasks[index].ordemApresentacao = order;

        updatedTasks.sort((a, b) => a.ordemApresentacao - b.ordemApresentacao);

        onReorder(updatedTasks);

        try {
            await api.put(`/tarefas/reorder/${updatedTasks[index].id}`, {
                novaOrdem: updatedTasks[index].ordemApresentacao,
            });
            await api.put(`/tarefas/reorder/${updatedTasks[newIndex].id}`, {
                novaOrdem: updatedTasks[newIndex].ordemApresentacao,
            });
        } catch (error) {
            console.error('Erro ao atualizar a ordem no backend:', error);
        }
    };

    return (
        <ListContainer>
            {tarefas.length > 0 ? (
                tarefas.map((tarefa, index) =>
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
                        <TaskItem
                            style={{
                                backgroundColor: tarefa.custo >= 1000 ? 'yellow' : 'transparent',
                                textDecoration: tarefa.concluida ? 'line-through' : 'none', // Risco para tarefa concluída
                                opacity: tarefa.concluida ? 0.6 : 1, // Visual para concluído
                            }}
                            key={tarefa.id}
                        >
                            <div>
                                <strong>{tarefa.nome}</strong>
                                <div>
                                    <span>
                                        R${' '}
                                        {tarefa.custo && !isNaN(tarefa.custo)
                                            ? tarefa.custo.toFixed(2)
                                            : '0.00'}
                                    </span>
                                </div>
                                <p>
                                    Data Limite:{' '}
                                    {new Date(tarefa.dataLimite).toLocaleDateString('pt-BR')}
                                </p>
                            </div>

                            <TaskActions>
                                <button
                                    className="edit"
                                    onClick={() => handleEditClick(tarefa)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => onDelete(tarefa.id)}
                                >
                                    Excluir
                                </button>
                                <button
                                style={{backgroundColor: "green"}}
                                    onClick={() => moveTask(tarefa.id, -1)}
                                    disabled={index === 0}
                                >
                                    Mover para Cima
                                </button>
                                <button
                                style={{backgroundColor: "red"}}
                                    onClick={() => moveTask(tarefa.id, 1)}
                                    disabled={index === tarefas.length - 1}
                                >
                                    Mover para Baixo
                                </button>
                                <button
                                    className="complete"
                                    onClick={() => handleCompleteClick(tarefa.id)}
                                >
                                    {tarefa.concluida ? 'Desfazer' : 'Concluir'}
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
