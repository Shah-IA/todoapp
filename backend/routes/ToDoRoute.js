const { Router } = require("express");
const {
  getToDos,
  saveToDos,
  updateToDo,
  deleteTodo,
} = require("../Controller/ToDoController");
const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDos);
router.patch("/update/:id", updateToDo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
