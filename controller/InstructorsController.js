import express from "express";
import bodyParser from "body-parser";
import { instructors } from '../model/index.js'

const instructorRouter = express.Router()
instructorRouter.use(bodyParser.json())

instructorRouter.get('/', (req, res) => {
    instructors.fetchInstructors(req, res)
})

instructorRouter.get('/:id', (req, res) => {
    console.log(`Fetching instructor with ID: ${req.params.id}`);
    instructors.fetchInstructor(req, res);
})

instructorRouter.get('/latest',(req , res) => {
    instructors.latestInstructors(req, res)
})

instructorRouter.post('/addinstructor',(req, res) => {
    instructors.addInstructor(req, res)
})

instructorRouter.patch('/update/:id',(req, res) => {
    instructors.updateInstructor(req, res)
})

instructorRouter.delete('/delete/:id',(req, res) => {
    instructors.deleteInstructor(req, res)
})

export {
    instructorRouter
}