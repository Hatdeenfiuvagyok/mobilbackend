const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(express.static('kepek'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/Mell', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'zarodolgozat'
    })
    
    connection.connect()
    
    connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=1', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  
  })

  
app.get('/Bicepsz', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=2', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})


  
app.get('/Tricepsz', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=3', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})

  
app.get('/Vall', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=4', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})


app.get('/Hat', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=5', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})




app.get('/HasTorzs', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=6', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})





app.get('/Vadli', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=7', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})






app.get('/CombFar', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=8', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})






app.get('/Alkar', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from izomcsoport_kepek WHERE izomcsoportok_id=9', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()

})



app.get('/tema', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from uzenetek ORDER BY uzenet_id DESC ', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})


/*
app.get('/temalekerdez', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from uzenetek', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})
*/




app.post('/kommentfelvitel', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  let dt=new Date();
  let teljesdat=dt.getFullYear()+"-"+  (dt.getMonth()+1)   +"-"+dt.getDate();
  connection.query("INSERT INTO uzenetek VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"') ", function (err, rows, fields) {
    if (err) throw err
  
    console.log("Sikeres felvitel!")

    res.send("Sikeres felvitel!")
  })
  
  connection.end()    

})  


app.get('/etrend_tipus', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zarodolgozat'
  })
  
  connection.connect()
  
  connection.query('SELECT * from etrend_tipus', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)

    res.send(rows)
  })
  
  connection.end()    

})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})