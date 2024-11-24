import axios from 'axios'

const api = axios.create({
    baseURL: process.env.TODO_LIST_API_URL,
    headers: {
        'Content-Type':'application/json',
        },
})

export const getTarefas = api.get("/tarefas")
export const createTarefas = api.post("/tarefas", data)
export const updateTarefas = api.put(`/tarefas/${id}`, data)
export const deleteTarefas = api.delete(`/tarefas/${id}`)

export default api

