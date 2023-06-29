const express = require("express");
const router = express.Router();
const clt = require("../controller/Todo");

router.get("/todos", clt.getTodos);
router.post("/todo", clt.postTodo);
router.patch("/todo/:todoId", clt.patchTodo);
router.delete("/todo/:todoId", clt.deleteTodo);

module.exports = router;