let mysql = require("mysql");

class OrderReceipeIngredient {

    constructor() {
        this.id = 0;
        this.orderReceipeId = "",
        this.ingredientId = "",
        this.quantity = "",
        this.rate = "",
        this.amount = ""
    

        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "cook_receipe_project"
        });
    }


    save(){

        return new Promise((resolve, reject)=>{

            let query = "INSERT INTO orderreceipeingredients(orderReceipeId, ingredientId, quantity, rate, amount) ";
            query += "VALUES('" + this.orderReceipeId + "', '" + this.ingredientId + "', '" + this.quantity + "', '" + this.rate + "', '" + this.amount + "')";
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err }));
                }
                resolve(JSON.stringify({status:"success", data:result }));
            })
        })
    }

    list(){

        return new Promise((resolve, reject)=>{

            let query = "SELECT * FROM orderreceipeingredients ORDER BY orderReceipeId";

            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err }));
                }
                resolve(JSON.stringify({status:"success", data:result }));
            })
        })
    }

    get(id){
        return new Promise((resolve, reject)=>{
            let query = "SELECT * FROM orderreceipeingredients WHERE id = " + id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                if(result.length > 0)
                    resolve(JSON.stringify({status:"success", data:result[0]}));
                else
                    resolve(JSON.stringify({status:"faile", data:"Record not found"}));
            })
        })    
    }
    
    update(){
        return new Promise((resolve, reject)=>{
            let query = "UPDATE orderreceipeingredients SET orderReceipeId = '" + this.orderReceipeId + "', ingredientId = '" + this.ingredientId + "', quantity = '" + this.quantity + "', rate = '" + this.rate + "' , amount = '" + this.amount + "' WHERE id = " + this.id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                resolve(JSON.stringify({status:"success", data:result}));
            })
        })    
    }

    delete(id){
        return new Promise((resolve, reject)=>{
            let query = "DELETE FROM orderreceipeingredients WHERE id = " + id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                resolve(JSON.stringify({status:"success", data:result}));
            })
        })    
    }

}


module.exports = OrderReceipeIngredient