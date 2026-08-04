// app.js - Main application entry point
console.log("Server is starting...");
import { formatDate, validateTask, mergeTaskUpdate, createTask } from './utils.js';
import {fetchSampleUsers, fetchSampleUsersPromise} from './api.js';
console.log(formatDate(new Date("2026-07-22")));
console.log(validateTask({ title: "Task 1", dueDate:"" }));
console.log(mergeTaskUpdate({ title: "Old Title" }, { title: "New Title" }));
try {
    const fetchedUsers = await fetchSampleUsers();
    console.log(fetchedSampleUsers)
} catch (error) {
    console.error(error.message);
}
try {
    const fetchedUsers = await fetchSampleUsersPromise();
    console.log(fetchedSampleUsersPromise)
} catch (error) {
    console.error(error.message);
}

try {
    const newTask = createTask({ title: "New Task", dueDate: new Date("2026-07-22") });
    console.log("New task created:", newTask);
} catch (error) {
    console.error(error.message);
}

try {
    const invalidTask = createTask({ title: "", dueDate: ""});
} catch (error) {
    console.error(error.message);
}