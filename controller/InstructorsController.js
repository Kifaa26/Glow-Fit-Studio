import express from "express";
import bodyParser from "body-parser";
import { Instructors } from '../model/index.js'

const instructorRouter = express.Router()
instructorRouter.use(bodyParser.json())

instructorRouter.get('/', (req, res) => {
    Instructors.fetchInstructors(req, res)
})

instructorRouter.get('/latest', (req , res) => {
    Instructors.latestInstructors(req, res)
})

instructorRouter.get('/:id', (req, res) => {
    Instructors.fetchInstructor(req, res)
})

instructorRouter.post('/addinstructor', (req, res) => {
    Instructors.addInstructor(req, res)
})

instructorRouter.patch('/update/:id', (req, res) => {
    Instructors.updateInstructor(req, res)
})

instructorRouter.delete('/delete/:id', (req, res) => {
    Instructors.deleteInstructor(req, res)
})

export {
    instructorRouter
}