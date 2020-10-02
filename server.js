var express = require('express');
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors({
	origin:'http://localhost:3000'
}));
require('./app/router/router.js')(app);
const db = require('./app/config/db.config.js');
const Role = db.role;
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin, X-requested-with, Content-type, Accept");
	res.header("Access-Control-Allow-Methods",'PUT, POST, GET, DELETE, OPTIONS');
	next();
 });

 //force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
 //console.log('Drop and Resync with { force: true }');
 //initial();
//});
//require('./app/route/project.route.js')(app);
// Create a Server 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App listening at http://%s:%s", host, port )
})
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EndaAuthentification application."});
});
function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
	Role.create({
		id: 2,
		name: "ADMIN"
	});
	Role.create({
		id: 3,
		name: "GP"
	});
}