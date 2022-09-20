const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = () => ;

module.exports = {
    createService,
    findAllService,
    findByIdService,
};