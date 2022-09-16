const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Trying connect to database...");
    mongoose.connect(
        process.env.MONGODBATLAS_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB Atlas connected!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;