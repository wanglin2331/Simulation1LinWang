const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const massive = require('massive');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3001 ;
const Shelf_controller= require('./shelf_controller');


massive(process.env.CONNECTION_STRING).then(db => {         
    app.set('db',db);
}).catch(err => console.error(err));

app.get('/api/shelf',Shelf_controller.getShelf);
app.get('/api/bins/:shelfid',Shelf_controller.getBin);
app.get('/api/items/',Shelf_controller.getItems);
app.get('/api/item/:binid',Shelf_controller.getItem);
app.post('/api/item/:binid',Shelf_controller.createItem);
app.put('/api/item/:binid',Shelf_controller.updateItem);
app.delete('/api/item/:binid',Shelf_controller.deleteItem);


app.listen(port, ()=>{console.log('server is listening on port ', port)});