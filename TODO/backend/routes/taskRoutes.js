import { Router } from 'express'
import { getTasks, addTasks, deleteTask } from '../controllers/taskController.js'
const taskRouter = Router()

taskRouter.get('/', getTasks)
taskRouter.post('/', addTasks)
taskRouter.delete('/', deleteTask)

export { taskRouter }
