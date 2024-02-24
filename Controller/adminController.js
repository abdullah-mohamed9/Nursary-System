const userModel = require("./../Model/usersModel");
exports.addAdmin = (req, res, next) => {
    //res.status(200).json({ data: {} });
    try {
        const { name, email, role, password } = req.body;
        const user = new userModel({
            name,
            email,
            role,
            password
        });
        user.save().then((data) => {
            res.status(201).json({ data })
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.getAdmin = (req, res, next) => {
    res.status(201).json({ data: {} });
}
exports.deleteAdmin = (req, res, next) => {
    res.status(200).json({ data: {} });
}
exports.updateAdmin = (req, res, next) => {
    res.status(200).json({ data: {} });
}
exports.getAllAdmins = (req, res, next) => {
    res.status(200).json({ data: [{}, {}, {}] });
}
