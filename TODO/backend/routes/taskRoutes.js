import { Router } from 'express'
import { getTasks } from '../controllers/taskController.js'
const taskRouter = Router()

taskRouter.get('/', getTasks)

export { taskRouter }
