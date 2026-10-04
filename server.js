import 'dotenv/config';
import express from 'express';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/task.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));