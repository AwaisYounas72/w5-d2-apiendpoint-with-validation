import express from "express"
const app = express()
const port = 3000
import ConnectToDB from "./ConnectToDB.js"
import bodyParser from "body-parser"
import cors from "cors"
import Todo from "./Routes/Todo.js"

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        Create_Todo:"https://w5-todo-end-points.vercel.app/api/add-todo",
        Get_ALl_Todo:"https://w5-todo-end-points.vercel.app/api/get-all-todo",
        Update_Todo:"https://w5-todo-end-points.vercel.app/api/update-todo/:id",
        delete_Todo:"https://w5-todo-end-points.vercel.app/api/delete-todo/:id",
    })
})

app.use("/api",Todo)
ConnectToDB();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})