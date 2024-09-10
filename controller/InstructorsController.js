import express from "express";
import bodyParser from "body-parser";
import { Instructors } from '../model/index.js'
import { verifyAToken } from '../middleware/UserAuthentication.js'

const instructorRouter = express.Router()
instructorRouter.use(bodyParser.json())

instructorRouter.get('/', verifyAToken, (req, res) => {
    Instructors.fetchInstructors(req, res)
})

instructorRouter.get('/latest', verifyAToken,(req , res) => {
    Instructors.latestInstructors(req, res)
})

instructorRouter.get('/:id', verifyAToken,(req, res) => {
    Instructors.fetchInstructor(req, res)
})

instructorRouter.post('/addinstructor', verifyAToken,(req, res) => {
    Instructors.addInstructor(req, res)
})

instructorRouter.patch('/update/:id', verifyAToken,(req, res) => {
    Instructors.updateInstructor(req, res)
})

instructorRouter.delete('/delete/:id', verifyAToken,(req, res) => {
    Instructors.deleteInstructor(req, res)
})

export {
    instructorRouter
}