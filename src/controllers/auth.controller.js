import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = loginService(email);
        const passwordIsValid = bcrypt.compare(password, user.password);

        res.status(200).send(email);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { login };