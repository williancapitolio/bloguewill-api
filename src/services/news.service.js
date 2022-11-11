import News from "../models/News.js";

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countService = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const searchByTitleService = (title) => News.find({ title: { $regex: `${title || ""}`, $options: "i" }, }).sort({ _id: -1 }).populate("user");

const byUserService = (id) => News.find({ user: id }).sort({ _id: -1 }).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

const updateService = (id, title, text, banner) => News.findOneAndUpdate({ _id: id }, { title, text, banner }, { rawResult: true });

const eraseService = (id) => News.findOneAndDelete({ _id: id });

const likeService = (newsId, userId) => News.findOneAndUpdate({ _id: newsId, "likes.userId": { $nin: [userId] } }, { $push: { likes: { userId, created: new Date() } } });

const dislikeService = (newsId, userId) => News.findOneAndUpdate({ _id: newsId }, { $pull: { likes: { userId } } });

const commentService = (idNews, comment, userId) => {
    const idComment = Math.floor(Date.now() * Math.random()).toString(36);
    return News.findOneAndUpdate({ _id: idNews }, { $push: { comments: { idComment, userId, comment, created: new Date() } } });
};

export {
    createService,
    findAllService,
    countService,
    topNewsService,
    searchByTitleService,
    byUserService,
    findByIdService,
    updateService,
    eraseService,
    likeService,
    dislikeService,
    commentService
};