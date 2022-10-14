import { createService, findAllService, updateService } from "../services/user.service.js";

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;
        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).json({ message: "Submit all fields for registration" });
        }
        const user = await createService(req.body);
        if (!user) {
            return res.status(400).json({ message: "Error registering user" });
        }
        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                //password,
                avatar,
                background
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const users = await findAllService();
        if (users.lenght === 0) {
            return res.status(400).send({ message: "There are no registered users" });
        }
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findById = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;
        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).json({ message: "Submit at least one field for update" });
        }
        const { id, user } = req;
        await updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        );
        res.status(200).send({ message: "User updated successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export {
    create,
    findAll,
    findById,
    update,
};