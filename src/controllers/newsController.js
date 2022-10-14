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
            user: req.userId
        });
        res.status(201).json({ message: "OK" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);
        if (!limit) {
            limit = 5;
        }
        if (!offset) {
            offset = 0;
        }
        const news = await newsService.findAllService(offset, limit);
        const totalNews = await newsService.countService();
        const currentUrl = req.baseUrl;
        const next = offset + limit;
        const nextUrl = next < totalNews ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;
        if (news.lenght === 0) {
            return res.status(400).send({ message: "There are no registered news" });
        }
        res.status(200).send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            totalNews,
            results: news.map(newsItem => ({
                id: newsItem._id,
                title: newsItem.title,
                text: newsItem.text,
                banner: newsItem.banner,
                likes: newsItem.likes,
                comments: newsItem.comments,
                name: newsItem.user.name,
                userName: newsItem.user.username,
                userAvatar: newsItem.user.avatar
            }))
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const topNews = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export default {
    create,
    findAll,
    topNews
};