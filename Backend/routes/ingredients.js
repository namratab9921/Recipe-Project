let express = require("express");

let Ingredient = require("../model/Ingredient")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new Ingredient();
    let body = req.body;
    object.id = 0;
    object.name = body.name;
    object.unitId = body.unitId;
    object.price = body.price;

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res) => {

    let object = new Ingredient();
    object.list().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});



router.get("/:id", (req, res) => {

    let object = new Ingredient();
    object.get(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.put("/:id", (req, res) => {
    let body = req.body;
    let object = new Ingredient();
    object.id = req.params.id;
    object.name = body.name;
    object.unitId = body.unitId;
    object.price = body.price;

    object.update(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.delete("/:id", (req, res) => {

    let object = new Ingredient();
    object.delete(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});


module.exports = router;