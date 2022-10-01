import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {},
    likes: {},
    comments: {}
}, { collection: "news" });