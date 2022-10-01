import newsService from "../services/news.service.js";

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;
        if (!title || !text || !banner) {
            //res.status(400).json({ message: "Not found" });
            res.status(400).send({message: "Not found"});
        }
        await newsService.createService({
            title,
            text,
            banner,
            user: { _id: "632bb2cd76577f7dde8e5eae" }
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