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

}
exports.deleteAdmin = (req, res, next) => {

}
exports.updateAdmin = (req, res, next) => {

}

//================teacher================
exports.getAllTeachers = (req, res, next) => {
    try {
        userModel.find({ role: 'teacher' }).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.addTeacher = (req, res, next) => {
    try {
        const role = 'teacher';
        const { _id, name, email, password } = req.body;
        const user = new userModel({
            _id,
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
exports.updateTeacher = (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;
        userModel.findByIdAndUpdate(id, { name, email, password }).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.deleteTeacher = (req, res, next) => {
    try {
        const id = req.params.id;
        userModel.findByIdAndDelete(id).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.getTeacherById = (req, res, next) => {
    try {
        const id = req.params.id;
        userModel.findById(id).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}



//================child================
exports.getAllChildren = (req, res, next) => {
    try {
        userModel.find({ role: 'child' }).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.addChild = (req, res, next) => {
    try {
        const role = 'child';
        const { name, email, password } = req.body;
        const user = new userModel({
            name,
            email,
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
exports.deleteChild = (req, res, next) => {

}
exports.updateChild = (req, res, next) => {

}
exports.getChildById = (req, res, next) => {

}
