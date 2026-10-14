import db from "../models/index.cjs";
const { User, Task } = db;

export const getUsers = async (req, res) => {
    try {
        await User.findAll({ include: Task }).then(users => {
            res.json(users);
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}