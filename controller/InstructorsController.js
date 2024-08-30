import express from "express";
import bodyParser from "body-parser";
import { Instructors } from '../model/Instructors.js'

const instructorRouter = express.Router()
instructorRouter.use(bodyParser.json())

instructorRouter.get('/', (req, res) => {
    instructor.fetchInstructors(req, res)
})

instructorRouter.get('/latest', (req , res) => {
    instructor.latestInstructors(req, res)
})

instructorRouter.get('/:id', (req, res) => {
    instructor.fetchInstructor(req, res)
})

instructorRouter.post('/addinstructor', (req, res) => {
    instructor.addInstructor(req, res)
})

instructorRouter.patch('/update/:id', (req, res) => {
    instructor.updateInstructor(req, res)
})

instructorRouter.delete('/delete/:id', (req, res) => {
    instructor.deleteInstructor(req, res)
})

export {
    instructorRouter
}