const express = require('express')
const router = express.Router()

const TodoController = require('../Controller/TodoController')

router.get('/', TodoController.getAllTodo)
router.post('/', TodoController.storeTodo)
router.put('/:id', TodoController.updateTodo)
router.delete('/:id', TodoController.deleteTodo)
router.get('/:id', TodoController.ShowTodo)


module.exports = router;