let mysql = require("mysql");

class Receipe {

    constructor() {
        this.id = 0;
        this.name = "";
        this.quantity = "";
        this.description = "";

        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "cook_receipe_project"
        });
    }


    save(){

        return new Promise((resolve, reject)=>{

            let query = "INSERT INTO receipes(name, quantity, description) ";
            query += "VALUES('" + this.name + "', '" + this.quantity + "', '" + this.description + "')";
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

            let query = "SELECT * FROM receipes ORDER BY name";

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
            let query = "SELECT * FROM receipes WHERE id = " + id;
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
            let query = "UPDATE receipes SET name = '" + this.name + "', quantity = '" + this.quantity + "', description = '" + this.description + "'  WHERE id = " + this.id;
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
            let query = "DELETE FROM receipes WHERE id = " + id;
            this.con.query(query, (err, result)=>{
                if(err){
                    reject(JSON.stringify({status:"failed", data:err}));
                }
                resolve(JSON.stringify({status:"success", data:result}));
            })
        })    
    }

}


module.exports = Receipe