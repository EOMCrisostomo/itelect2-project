// app.js - Main application entry point
console.log("Server is starting...");
import { formatDate, validateTask, mergeTaskUpdate, createTask } from './utils.js';
import {fetchSampleUsers} from './api.js';
console.log(formatDate(new Date("2026-07-22")));
console.log(validateTask({ title: "Task 1", dueDate:"" }));
console.log(mergeTaskUpdate({ title: "Old Title" }, { title: "New Title" }));
console.log(createTask({ title: "Task 1", dueDate: new Date("2026-07-22") }));
console.log(fetchSampleUsers());
