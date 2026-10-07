import Task from '../models/task.model.js'

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({
            message: "Couldn't find tasks",
            error: error.message
        })
    }
}

const addTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)

        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({
            message: "Couldn't create task",
            error: error.message
        })
    }
}

const deleteTask = async (req,res) => {
    try {
        await Task.deleteOne({
            completed: false
        })
    } catch (error) {
        res.send("done deleting")
    }
}

export { getTasks, addTasks,deleteTask  }