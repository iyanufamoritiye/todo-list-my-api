import { todos } from "../../../lib/todos";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(todos);
      break;
    case "POST":
      const newTodo = { id: Date.now().toString(), ...req.body };
      todos.push(newTodo);
      res.status(201).json(newTodo);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
