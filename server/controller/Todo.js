const { Todo } = require("../models");

//get todos
exports.getTodos = async (_, res) => {
    try {
        const todos = await Todo.findAll();
        res.send({ result: true, data: todos });
    } catch (error) {
        res.send({ result: false, data: error });
    }
};

//post todo
exports.postTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const data = await Todo.create({
            title,
        });
        console.log(data.dataValues);
        res.send({ result: true, data: data.dataValues });
    } catch (error) {
        res.send({ result: false });
    }
};

//patch todo
exports.patchTodo = (req, res) => {
    try {
        //req.body.title , req.body.done
        const { title, done } = req.body;
        Todo.update(
            {
                title: title,
                done: done,
            },
            {
                where: {
                    id: Number(req.params.todoId),
                },
            }
        );
        res.send({ result: true });
    } catch (error) {
        res.send({ result: false });
    }
};

//delete todo
exports.deleteTodo = (req, res) => {
    try {
        Todo.destroy({
            where: {
                id: Number(req.params.todoId),
            },
        });
        res.send({ result: true });
    } catch (error) {
        res.send({ result: false });
    }
};