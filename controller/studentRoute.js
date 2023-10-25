const express = require("express");
const studentSchema = require("../model/studentSchema")
const studentRoute = new express.Router();

studentRoute.post("/create-student", (req, res) => {
    studentSchema.create(req.body, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});
studentRoute.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}); //get data from a file
studentRoute.route("/update-student/:id")
.get((req, res) => {
    studentSchema.findById(req.params.id,(err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })

})
.put((req, res) => {
    studentSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

studentRoute.delete("/delete-student/:id", (req,res) => {
    studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
});

// _id: 652d2258bc188176068cd64c
// if path is localhost:4000/studentRoute/
// and if it is a GET request -> find()

// if path is localhost:4000/studentRoute/create-student
// and is if it is a POST request -> create()

// if path is localhost:4000/studentRoute/update-student/652d2258bc188176068cd64c
// and if it is a GET request -> findById()
// and if it is a PUT request -> findByIdandUpdate()

// if path is localhost:4000/studentRoute/delete-student/652d2258bc188176068cd64c
// and if it is DELETE request -> findByIdAndRemove()

// NOTE: By default every request will be GET request

module.exports = studentRoute;