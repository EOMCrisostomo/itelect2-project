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
    return {id: Date.now(), Completed:  false, ...taskData };
    }
}
