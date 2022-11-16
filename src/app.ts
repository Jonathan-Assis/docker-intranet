const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

import { User } from "./models/user"
import {Service} from "./models/services";

app.set('view engine', 'ejs');
app.set('views', './src/views'); 

app.use(bodyParser.urlencoded({extended: false}));

var service = new Service();
service.start();

app.use(express.static('src/public'));

app.get('/', addUser);
app.get('/list', listUser);
app.post('/added', addedUser);

app.listen(port, listenHandler);

function addUser(req,res){
    res.render('addUser.ejs'); 
}


function addedUser(req,res){
    let newUser = new User();  
    newUser.nome = req.body.nome;
    newUser.departamento = req.body.departamento;
    newUser.cargo = req.body.cargo;
    newUser.endereco = req.body.endereco;
    service.insert(newUser);
    res.render('addedUser.ejs', {usuario: newUser}); 
} 

async function listUser(req, res){
    let users = await service.listAll();
    res.render('listUser.ejs',{list_User: users});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}