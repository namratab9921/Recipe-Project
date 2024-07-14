let mysql = require("mysql");

class OrderReceipe {

    constructor() {
        this.id = 0;
        this.orderId = "";
        this.receipeId = "";
        this.amount = "";
        this.billAmount = "";


        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "cook_receipe_project"
        });
    }


    save(){

        return new Promise((resolve, reject)=>{

            let query = "INSERT INTO orderreceipes(orderId, receipeId, amount, billAmount) ";
            query += "VALUES('" + this.orderId + "', '" + this.receipeId + "', '" + this.amount + "', '" + this.billAmount + "')";
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

            let query = "SELECT * FROM orderreceipes ORDER BY orderId";

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
            let query = "SELECT * FROM orderreceipes WHERE id = " + id;
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
            let query = "UPDATE orderreceipes SET orderId = '" + this.orderId + "', receipeId = '" + this.receipeId + "', amount = '" + this.amount + "', billAmount = '" + this.billAmount + "'  WHERE id = " + this.id;
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
            let query = "DELETE FROM orderreceipes WHERE id = " + id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                resolve(JSON.stringify({status:"success", data:result}));
            })
        })    
    }

}


module.exports = OrderReceipe