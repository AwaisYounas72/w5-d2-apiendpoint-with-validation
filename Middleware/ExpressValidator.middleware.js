import { check } from "express-validator";

const CreateTodo=[
    check('title').notEmpty().withMessage('The Title Message is Required'),
    check('description').notEmpty().withMessage('The Description is required')
]

const UpdateTodo=[
    check('title').notEmpty().withMessage('The Title Message is required'),
    check('description').notEmpty().withMessage('The Description is Required'),
    check('hasCompleted').notEmpty().isBoolean().withMessage('Value must be a Boolean')
]

export
    {CreateTodo,
    UpdateTodo
 }