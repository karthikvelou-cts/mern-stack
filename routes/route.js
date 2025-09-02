import express from "express"
import { login } from "../controllers/userController.js"

const route = express.Router()

route.get('/', (_, res) => {
    res.json({ message: "I am running locally" })
})

route.post('/login', login)

export default route