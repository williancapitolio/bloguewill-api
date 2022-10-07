import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(401).json({ message: "Unauthorized" });
        }
        const parts = authorization.split(" ");
        if (parts.lenght != 2) {
            res.status(401).json({ message: "Unauthorized" });
        }
        const [schema, token] = parts;
        if (schema != "Bearer") {
            res.status(401).json({ message: "Unauthorized" });
        }
        return next();
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { authMiddleware };