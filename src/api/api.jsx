import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VITE_TODO_LIST_API_URL,
    headers: {
        'Content-Type':'application/json',
        },
})

export const getTarefas = () => api.get("/tarefas")
export const createTarefas = (data) => api.post("/tarefas", data)
export const updateTarefas = (id,data) =>  api.put(`/tarefas/${id}`, data)
export const deleteTarefas = (id) =>  api.delete(`/tarefas/${id}`)
export const reorderTarefa = (id, novaOrdem) => api.put(`/tarefas/reorder/${id}`, { novaOrdem });



export default api

