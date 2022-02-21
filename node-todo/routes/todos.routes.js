const {Router} = require('express');

const {
    loadTodos
} = require("../models/todos.model");

const todosApi = Router();

todosApi.use('/:id', async (req, res, next) => {

})

todosApi.get('/', async (req, res) => {
    const todos = await loadTodos();
    res.json(todos);
})

todosApi.get('/:id', (req, res) => {

})

todosApi.post('/', (req, res) => {

})

todosApi.put('/:id', (req, res) => {

})

todosApi.delete('/:id', (req, res) => {

})


module.exports = todosApi;

