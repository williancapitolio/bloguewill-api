const userService = require("../services/user.service");

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json({ message: "Submit all fields for registration" });
    }
    const user = await userService.createService(req.body);
    if (!user){
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
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();
    if (users.lenght === 0) {
        return res.status(400).send({message: "There are no registered users"});
    }
    res.status(200).send(users);
};

const findById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.findByIdService(id);
};

module.exports = {
    create,
    findAll,
    findById,
};