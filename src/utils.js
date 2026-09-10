export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;
export const validateTask = ({ title, dueDate } = {}) => title && dueDate ? true : false;
export const mergeTaskUpdate = (original, ...updates) => Object.assign({}, original, ...updates);
export class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskValidationError";
    }
}
export const createTask = (taskData) => {
    if (!validateTask(taskData)) {
        throw new TaskValidationError("Invalid task data");
    } else{
    return {id: Date.now(), completed:  false, ...taskData };
    }
}

export const taskData = [
    { id: 1, title: "Task 1", dueDate: "2026-07-22", completed: false },
    { id: 2, title: "Task 2", dueDate: "2026-07-23", completed: true },
    { id: 3, title: "Task 3", dueDate: "2026-07-24", completed: false },
];

// this is a new code