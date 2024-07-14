let express = require("express");

let Order = require("../model/Order")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new Order();
    let body = req.body;
    object.id = 0;
    object.name = body.name;
    object.mobileNo = body.mobileNo;
    object.ODate = body.ODate;
    object.EDate = body.EDate;
    object.ETime = body.ETime;
    object.quantity = body.quantity;

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res) => {

    let object = new Order();
    object.list().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});



router.get("/:id", (req, res) => {

    let object = new Order();
    object.get(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.put("/:id", (req, res) => {
    let body = req.body;
    let object = new Order();
    object.id = req.params.id;
    object.name = body.name;
    object.mobileNo = body.mobileNo;
    object.ODate = body.ODate;
    object.EDate = body.EDate;
    object.ETime = body.ETime;
    object.quantity = body.quantity;

    object.update(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.delete("/:id", (req, res) => {

    let object = new Order();
    object.delete(req.params.id).then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});


module.exports = router;