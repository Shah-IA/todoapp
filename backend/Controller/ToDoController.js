const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const todos = await ToDoModel.find();
  res.send(todos);
};

module.exports.saveToDos = (req, res) => {
  const { toDo } = req.body;

  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("data saved");
      res.status(201).send(data);
    })
    .catch((err) => console.log("save error", err));
};

module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then((data) => res.send("Updated Successfully..."))
    .catch((err) => console.log("Error"));
};

// module.exports.deleteTodo = (req, res) => {
//   const { id } = req.params;

//   ToDoModel.findByIdAndDelete(id)
//     .then(() => console.log("Deleted ... "))
//     .catch((err) => res.send("Error occured.."));
// };

module.exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      console.log("Deleted ... ");
      res.send("Deleted Successfully...");
    })
    .catch((err) => {
      console.log("Error:", err);
      res.status(500).send("Error occurred..");
    });
};
