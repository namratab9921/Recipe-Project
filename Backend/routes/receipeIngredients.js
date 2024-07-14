let express = require("express");

let ReceipeIngredient = require("../model/ReceipeIngredient")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new ReceipeIngredient();
    let body = req.body;
    object.id = 0;
    object.receipeId = body.receipeId;
    object.ingredientId = body.ingredientId;
    object.quantity = body.quantity;

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res)=>{
    
    let object = new ReceipeIngredient();
    object.list().then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});



router.get("/:id", (req, res)=>{
    
    let object = new ReceipeIngredient();
    object.get(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});

router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new ReceipeIngredient();
    object.id = req.params.id;
    object.receipeId = body.receipeId;
    object.ingredientId = body.ingredientId;
    object.quantity = body.quantity;

    object.update(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});

router.delete("/:id", (req, res)=>{

    let object = new ReceipeIngredient();
   object.delete(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});


module.exports = router;