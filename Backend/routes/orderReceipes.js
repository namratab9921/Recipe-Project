let express = require("express");

let OrderReceipe = require("../model/OrderReceipe")

let router = express.Router();

router.post("/", (req, res) => {

    let object = new OrderReceipe();
    let body = req.body;
    object.id = 0;
    object.orderId = body.orderId;
    object.receipeId = body.receipeId;
    object.amount = body.amount;
    object.billAmount = body.billAmount;
    

    object.save().then((result) => {
        res.end(result);
    }, (err) => {
        res.end(err);
    });
});

router.get("/", (req, res)=>{
    
    let object = new OrderReceipe();
    object.list().then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});



router.get("/:id", (req, res)=>{
    
    let object = new OrderReceipe();
    object.get(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});

router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new OrderReceipe();
    object.id = req.params.id;
    object.orderId = body.orderId;
    object.receipeId = body.receipeId;
    object.amount = body.amount;
    object.billAmount = body.billAmount;

    object.update(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});

router.delete("/:id", (req, res)=>{

    let object = new OrderReceipe();
   object.delete(req.params.id).then((result)=>{
        res.end(result);
    }, (err)=>{
        res.end(err);
    });
});


module.exports = router;