import express from "express";
import bodyParser from "body-parser";
import { users } from '../model/index.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})

userRouter.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
})

userRouter.post('/user/register', (req, res) => {
    users.registerUser(req, res)
})

userRouter.patch('/user/update/:id', (req, res) => {
    users.updateUser(req, res)
})

userRouter.delete('/user/delete/:id', (req, res) => {
    users.deleteUser(req, res)
})

userRouter.post('/user/login', (req, res) => {
    users.login(req, res)
})

export {
    express,
    userRouter
}