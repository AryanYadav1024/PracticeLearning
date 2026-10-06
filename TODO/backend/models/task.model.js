import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        heading: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }
) 

export const Task = mongoose.model('Task',taskSchema)