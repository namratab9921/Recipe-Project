let mysql = require("mysql");

class Ingredient {

    constructor() {
        this.id = 0;
        this.name = "";
        this.unitId = "";
        this.price = "";

        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "cook_receipe_project"
        });
    }


    save(){

        return new Promise((resolve, reject)=>{

            let query = "INSERT INTO ingredients(name, unitId, price) ";
            query += "VALUES('" + this.name + "', '" + this.unitId + "', '" + this.price + "')";
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

            let query = "SELECT * FROM ingredients ORDER BY name";

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
            let query = "SELECT * FROM ingredients WHERE id = " + id;
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
            let query = "UPDATE ingredients SET name = '" + this.name + "', unitId = '" + this.unitId + "', price = '" + this.price + "'  WHERE id = " + this.id;
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
            let query = "DELETE FROM ingredients WHERE id = " + id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                resolve(JSON.stringify({status:"success", data:result}));
            })
        })    
    }

}


module.exports = Ingredient