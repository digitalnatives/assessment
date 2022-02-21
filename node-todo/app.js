const path = require('path');

const express = require('express');
const todosApi = require('./routes/todos.routes')

const {setFilePath} = require("./models/todos.model");

setFilePath(path.join(__dirname, 'todos.json'))

const app = express();
const port = 3000;

app.use(express.json());//req.body contains the http body
app.use('/todos',todosApi);

app.listen(port);


