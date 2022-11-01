import News from "../models/News.js";

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countService = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const searchByTitleService = (title) => News.find({ title: { $regex: `${title || ""}`, $options: "i" }, }).sort({ _id: -1 }).populate("user");

const byUserService = (id) => News.find({ user: id }).sort({ _id: -1 }).populate("user");

const findByIdService = (id) => News.findById(id).populate("user");

const updateService = () =>;

export {
    createService,
    findAllService,
    countService,
    topNewsService,
    searchByTitleService,
    byUserService,
    findByIdService,
    updateService
};