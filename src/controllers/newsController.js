import newsService from "../services/news.service.js";

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;
        if (!title || !text || !banner) {
            res.status(400).json({ message: "Submit all fields for registration" });
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
        const news = await newsService.findAllService();
        if (news.lenght === 0) {
            return res.status(400).send({ message: "There are no registered news" });
        }
        res.status(200).send(news);        
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export default {
    create,
    findAll
};