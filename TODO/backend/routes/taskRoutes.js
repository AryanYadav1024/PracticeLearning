import { Router } from 'express'
import { getTasks } from '../controllers/taskController'
const taskRouter = Router()

taskRouter.get('/', getTasks)

export { taskRouter }
