let express = require("express");
var cors = require('cors')
let bodyparser = require("body-parser");

let app = express();
app.use(express.static("public"));

app.use(bodyparser.json({ limit: '500mb' }));
app.use(bodyparser.urlencoded({ limit: '500mb', extended: true }));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.end("Welcome To Back End");
});


app.use("/admin", require("./routes/admin"))
app.use("/ingredients", require("./routes/ingredients"))
app.use("/units", require("./routes/units"))
app.use("/receipes", require("./routes/receipes"))
app.use("/orders", require("./routes/orders"))
app.use("/receipeingredients", require("./routes/receipeIngredients"))
app.use("/orderreceipes", require("./routes/orderReceipes"))
app.use("/orderreceipeingredients", require("./routes/orderReceipeIngredients"))




app.listen(8081, () => {
    console.log("APIs running on http://localhost:8081");
})