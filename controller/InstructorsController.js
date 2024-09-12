import express from "express";
import bodyParser from "body-parser";
import { instructors } from '../model/index.js'

const instructorRouter = express.Router()
instructorRouter.use(bodyParser.json())

instructorRouter.get('/instructors', (req, res) => {
    instructors.fetchInstructors(req, res)
})

instructorRouter.get('/instructor/:id', (req, res) => {
    instructors.fetchInstructor(req, res)
})

instructorRouter.get('/instructor/latest',(req , res) => {
    instructors.latestInstructors(req, res)
})

instructorRouter.post('/instructor/addInstructors',(req, res) => {
    instructors.addInstructor(req, res)
})

instructorRouter.patch('/instructor/update/:id',(req, res) => {
    instructors.updateInstructor(req, res)
})

instructorRouter.delete('/instructor/delete/:id',(req, res) => {
    instructors.deleteInstructor(req, res)
})

export {
    instructorRouter
}