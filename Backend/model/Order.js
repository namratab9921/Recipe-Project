let mysql = require("mysql");

class Order {

    constructor() {
        this.id = 0;
        this.name = "";
        this.mobileNo = "";
        this.ODate = "";
        this.EDate = "";
        this.ETime = "";
        this.quantity = "";



        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "cook_receipe_project"
        });
    }


    save(){

        return new Promise((resolve, reject)=>{

            let query = "INSERT INTO orders(name, mobileNo, ODate,EDate,ETime,quantity) ";
            query += "VALUES('" + this.name + "', '" + this.mobileNo + "', '" + this.ODate + "', '" + this.EDate + "', '" + this.ETime + "', '" + this.quantity + "')";
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

            let query = "SELECT * FROM orders ORDER BY name";

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
            let query = "SELECT * FROM orders WHERE id = " + id;
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
            let query = "UPDATE orders SET name = '" + this.name + "', mobileNo = '" + this.mobileNo + "', ODate = '" + this.ODate + "' , EDate = '" + this.EDate + "' , ETime = '" + this.ETime + "', quantity = '" + this.quantity + "' WHERE id = " + this.id;
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
            let query = "DELETE FROM orders WHERE id = " + id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                resolve(JSON.stringify({status:"success", data:result}));
            })
        })    
    }

}


module.exports = Order