import mongoose from "mongoose";


// Define Schema
const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    hasCompleted:{
        type:Boolean,
        default:false
    }
});

// Model Creation

const Todo = mongoose.model("todo",TodoSchema);
export default Todo;