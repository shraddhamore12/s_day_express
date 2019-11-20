const mysql = require('mysql')
const exprees = require('express')

function connect(){
    const connection = mysql.createConnection({
        
        host: '192.168.43.88',
        user:'root',
        password:'root',
        database: 'app_db',
        port: 9099
    })
    connection.connect()
    return connection

}

const app = exprees()

app.get("/",(req,res) => {
    res.send('welcome')

});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("/product",(req,res) => {
    const connection = connect()
    const statement = `select * from product`
    connection.query(statement,(error,data) => {
        connection.end()
        res.send(data)


    })
  
});

app.listen(6600,'0.0.0.0',() =>{

    console.log('server started on port 6600')

})
