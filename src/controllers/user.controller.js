const create = (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).json({ message: "Submit all fields for registration" });
    }
    res.status(201).json({
        message: "User created successfully",
        user: {
            name,
            username,
            email,
            //password,
            avatar,
            background
        }
    });
};

module.exports = {
    create,
};