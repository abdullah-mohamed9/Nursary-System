const JWT = require('jsonwebtoken');
const userModel = require("./../Model/usersModel");
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = new userModel({
            name,
            email,
            password,
            role
        });
        const token = JWT.sign({ id: newUser._id, role: newUser.role }, "SECRET_KEY", { expiresIn: "1d" });
        newUser.save().then((data) => {
            res.status(201).json({ data, token })
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                const token = JWT.sign({ id: user._id, role: user.role }, "SECRET_KEY", { expiresIn: "1d" });
                res.status(200).json({ user, token });
            }
            else {
                res.status(401).json({ message: "Invalid password" });
            }
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}