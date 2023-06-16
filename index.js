const express = require("express");
const app = express();
const models = require("./models");

const PORT= 5050;
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
 
require("./controllers")(app);

models.sequelize.authenticate().then(()=>{
console.log('connected');
app.listen(PORT, ()=>{
    console.log("SERVER RUNNING AT"+PORT)
});
}).catch(err => {
    console.log(err)
})