import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginService(email);
        if (!user) {
            return res.status(404).send({ message: "Invalid user or password" });
        }
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(404).send({ message: "Invalid user or password" });
        }
        res.status(200).send({ message: "Login ok" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { login };