const create = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export default {
    create
};