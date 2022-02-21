
const { Router } = require('express');
const {findTodo} = require("../models/todos.model");

const todosApi = Router();

todosApi.use('/:id', async (req, res, next) => {

})

todosApi.get('/', (req, res) => {

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

