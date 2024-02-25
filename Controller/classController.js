const teacherModel = require('../Model/teacherModel');
const ClassModel = require('../models/classModel');

exports.getAllClasses = (req, res, next) => {
    try {
        ClassModel.find().then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.getClassById = (req, res, next) => {
    try {
        const id = req.params.id;
        ClassModel.findById(id).then((data) => {
            if (data) {
                res.status(200).json({ data });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.createClass = (req, res, next) => {
    try {
        ClassModel.creat(req.body).then((data) => {
            res.status(201).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.updateClass = (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body
        ClassModel.findByIdAndUpdate
            (id, { name, email, password }).then((data) => {
                res.status(200).json({ data });
            }).catch((error) => {
                res.status(500).json({ message: error + '' });
            });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.deleteClass = (req, res, next) => {

    try {
        const id = req.params.id;
        ClassModel.findByIdAndDelete(id).then((data) => {
            res.status(200).json({ data });
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }

}
exports.getChild = (req, res, next) => {
    try {
        const id = req.params.id;
        ClassModel.findById(id).then((data) => {
            if (data) {
                res.status(200).json({ data });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}
exports.getSupervisor = (req, res, next) => {
    try {
        const id = req.params.id;
        ClassModel.findById(id).then((data) => {
            if (data) {
                const supervisor = data.supervisor;
                try{
                    teacherModel.findById(supervisor).then((data) => {
                        if (data) {
                            res.status(200).json({ data });
                        } else {
                            res.status(404).json({ message: "User not found" });
                        }
                    }).catch((error) => {
                        res.status(500).json({ message: error + '' });
                    });
                }
                catch (error) {
                    res.status(500).json({ message: error + '' });
                }
            } else {
                res.status(404).json({ message: "User not found" });
            }
        }).catch((error) => {
            res.status(500).json({ message: error + '' });
        });
    }
    catch (error) {
        res.status(500).json({ message: error + '' });
    }
}