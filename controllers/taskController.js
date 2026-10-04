import db from "../models/index.cjs";
const { User, Task } = db;

export const getTasks = async (req, res) => {
  try {
    const where = req.user.role === 'admin' ? {} : { userId: req.user.id };
    const tasks = await Task.findAll({ where });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTask = async (req, res) => { 
      try {
        let newTaskId = await Task.max('id');
        if (!newTaskId) {
            newTaskId = 0;
        }
        const newTask = await Task.create({ ...req.body, id: newTaskId + 1 });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
 };
export const getTaskById = async (req, res) => {       
  try {
        const taskId = Number(req.params.id);
        const task = await Task.findByPk(taskId, {include: User});
        if (!task) {
            return res.status(404).json({ error: `Task ID: ${taskId} not found` });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } };
export const updateTask = async (req, res) => { 
      try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: `Task ID: ${req.params.id} not found` });
        }
        await task.update(req.body);
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
 };
export const deleteTask = async (req, res) => {     
  try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: `Task ID: ${req.params.id} not found` });
        }
        await task.destroy();
        res.status(200).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
  };