//todo file kezelés

// functions load, add find, update

const fs = require('fs/promises');

let filePath = '';

const setFilePath = (path) => {
    filePath = path;
}

const checkFilePath = () => {
    if (!filePath) {
        throw 'Filepath is missing'
    }
}

const saveTodos = (todos) => {

}

const loadTodos = async () => {
    checkFilePath();
    const todos = await fs.readFile(filePath, {encoding: "utf-8"});
    return JSON.parse(todos);
}

const findTodo = async (id) => {

}

const deleteTodo = (id) => {
    //filter
    //save to json
}

const createTodo = (todo) => {
    //save to json
}

const updateTodo = async (id, todo) => {
    //map + ellenőrzés a colback elején
    //object spreading
    //save to json
}

module.exports = {
    setFilePath,
    saveTodos,
    loadTodos,
    findTodo,
    deleteTodo,
    createTodo,
    updateTodo
}


