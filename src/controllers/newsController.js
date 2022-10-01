import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
    try {
        const {title, text, user} = req.body;
        if (!title || !text || !user) {
            res.status(400).json({message: "Not found"});
        }
        await createService({
            title,
            text,
            banner,
            id: "testeid"
        });
        res.status(201).json({ message: "OK" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        res.status(200).json({ message: "OK" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export default {
    create,
    findAll
};