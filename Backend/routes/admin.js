let express = require("express");

let Admin = require("../model/Admin")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new Admin();
    let body = req.body;
    object.id = 0;
    object.name = body.name;
    object.email = body.email;
    object.password = body.password;

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res) => {

    let object = new Admin();
    object.list().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});


module.exports = router;