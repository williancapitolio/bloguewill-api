import News from "../models/News.js";

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countService = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const searchByTitleService = (title) => News.find

const findByIdService = (id) => News.findById(id).populate("user");;

export {
    createService,
    findAllService,
    countService,
    topNewsService,
    searchByTitleService,
    findByIdService
};