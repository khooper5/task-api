import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}

export async function getTaskById(req, res, next) {
  const { id } = req.params;
  const taskId = parseInt(id, 10);
  const task = await taskService.getTaskById(taskId);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
}
