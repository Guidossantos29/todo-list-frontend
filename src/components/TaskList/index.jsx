import { ListContainer, TaskActions, TaskItem } from './style';

function TaskList({ tarefas, onEdit, onDelete }) {
  return (
    <ListContainer>
      {tarefas.length > 0 ? (
        tarefas.map((tarefa) => (
          <TaskItem key={tarefa.id}>
            <div>
              <strong>{tarefa.nome}</strong>
              <p>Data Limite: {new Date(tarefa.dataLimite).toLocaleDateString()}</p>
            </div>
            <div>
              <span>R$ {tarefa.custo.toFixed(2)}</span>
            </div>
            <TaskActions>
              <button
                className="edit"
                onClick={() =>
                  onEdit({
                    ...tarefa,
                    nome: `${tarefa.nome} (Atualizado)`, 
                  })
                }
              >
                Editar
              </button>
              <button className="delete" onClick={() => onDelete(tarefa.id)}>
                Excluir
              </button>
            </TaskActions>
          </TaskItem>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </ListContainer>
  );
}

export default TaskList;
