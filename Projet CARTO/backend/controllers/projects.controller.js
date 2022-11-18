const Project = require("../models/projects.models.js").Project;
const ObjectId = require('mongodb').ObjectId;

function findAll(req, res) {
    return Project.find()
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result);
                console.log(result[0]._id);
            }
            else {
                res.status(202).json({ message: 'no projects available here' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function findByTitle(req, res) {
    const titleParam = req.params.title;
    return Project.find({ title: titleParam })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.status(202).json({ message: 'no projects available' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function findByAcronym(req, res) {
    const acronymParam = req.params.acronym;
    return Project.find({ acronym: acronymParam })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.status(202).json({ message: 'no projects available' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function findByDonor(req, res) {
    const donorParam = req.params.donor;
    return Project.find({ donor: donorParam })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.status(202).json({ message: 'no projects available' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}


function findByKeyWord(req, res) {
    const keyWordParam = req.params.keyWord;
    return Project.find({ keyWord: keyWordParam })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.status(202).json({ message: 'no projects available' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function findById(req, res) {
    const id = req.params.id;
    const idObj = new ObjectId(id);
    console.log(id);
    return Project.find({ _id: idObj })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result);
            }
            else {
                res.status(202).json({ message: 'no projects available' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

module.exports = { findByKeyWord, findByTitle, findByAcronym, findByDonor, findAll, findById }