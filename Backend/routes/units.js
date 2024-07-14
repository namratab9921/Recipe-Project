let express = require("express");

let Unit = require("../model/Unit")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new Unit();
    let body = req.body;
    object.id = 0;
    object.name = body.name;

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res) => {

    let object = new Unit();
    object.list().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});



router.get("/:id", (req, res) => {

    let object = new Unit();
    object.get(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.put("/:id", (req, res) => {
    let body = req.body;
    let object = new Unit();
    object.id = req.params.id;
    object.name = body.name;


    object.update(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.delete("/:id", (req, res) => {

    let object = new Unit();
    object.delete(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});


module.exports = router;