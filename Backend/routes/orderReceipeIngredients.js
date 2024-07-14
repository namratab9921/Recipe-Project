let express = require("express");

let orderReceipeIngredient = require("../model/orderReceipeIngredient")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new orderReceipeIngredient();
    let body = req.body;
    object.id = 0;
    object.orderReceipeId = body.orderReceipeId;
    object.ingredientId = body.ingredientId;
    object.quantity = body.quantity;
    object.rate = body.rate;
    object.amount = body.amount; 

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res)=>{
    
    let object = new orderReceipeIngredient();
    object.list().then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});



router.get("/:id", (req, res)=>{
    
    let object = new orderReceipeIngredient();
    object.get(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});

router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new orderReceipeIngredient();
    object.id = req.params.id;
    object.orderReceipeId = body.orderReceipeId;
    object.ingredientId = body.ingredientId;
    object.quantity = body.quantity;
    object.rate = body.rate;
    object.amount = body.amount;


    object.update(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});

router.delete("/:id", (req, res)=>{

    let object = new orderReceipeIngredient();
   object.delete(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});


module.exports = router;