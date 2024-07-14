let express = require("express");

let Receipe = require("../model/Receipe")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new Receipe();
    let body = req.body;
    object.id = 0;
    object.name = body.name;
    object.quantity = body.quantity;
    object.description = body.description;

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res) => {

    let object = new Receipe();
    object.list().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});



router.get("/:id", (req, res) => {

    let object = new Receipe();
    object.get(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.put("/:id", (req, res) => {
    let body = req.body;
    let object = new Receipe();
    object.id = req.params.id;
    object.name = body.name;
    object.quantity = body.quantity;
    object.description = body.description;

    object.update(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.delete("/:id", (req, res) => {

    let object = new Receipe();
    object.delete(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});


module.exports = router;