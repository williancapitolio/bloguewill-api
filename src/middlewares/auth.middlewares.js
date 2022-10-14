import jwt from "jsonwebtoken";
import { findByIdService } from "../services/user.service.js";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).send({ message: "Unauthorized1" });
        }
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return res.status(401).send({ message: "Unauthorized2" });
        }
        const [schema, token] = parts;
        if (schema !== "Bearer") {
            return res.status(401).send({ message: "Unauthorized3" });
        }
        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Invalid Token!" });
            }
            const user = await findByIdService(decoded.id);
            if (!user || !user.id) {
                return res.status(401).send({ message: "Invalid Token!" });
            }
            req.userId = user._id;
            return next();
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { authMiddleware };