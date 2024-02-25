const Teacher = require("../models/teacherModel");

exports.getAllTeachers = (req, res, next) => {
    try {
        Teacher.find()
            .then((data) => {
                res.status(200).json({ data, message: "get all teachers" });
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
};

exports.getTeacherById = (req, res, next) => {
    try {
        Teacher.findOne({ _id: req.params.id })
            .then((data) => {
                res.status(200).json({ data, message: "get one teacher" });
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }
    catch (err) {
        console.log(err);
        next(err);
    }

};

exports.createTeacher = (req, res, next) => {
    try {
        Teacher.create(req.body)
            .then((data) => {
                res.status(201).json({ data, message: "create teacher" });
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }

    catch (err) {
        console.log(err);
        next(err);
    }
};

exports.updateTeacher = (req, res, next) => {
    try {
        Teacher.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, })
            .then((data) => {
                res.status(200).json({ data, message: "update teacher" });
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
};

exports.deleteTeacher = (req, res, next) => {
    try {
        Teacher.findOneAndDelete({ _id: req.params.id })
            .then((data) => {
                res.status(200).json({ data, message: "delete teacher" });
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
};

exports.getSupervisors = (req, res, next) => {
    try {
        Teacher.find({ role: "supervisor" })
            .then((data) => {
                res.status(200).json({ data, message: "get all supervisors" });
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
};