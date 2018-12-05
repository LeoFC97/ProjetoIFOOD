const express = require('express'); //fazendo o import do express
const app /*variavel para manter o "servidor" */ = express(); //chamando a funcao do express
const bodyParser = require('body-parser');//fazendo o import do bodyParser

/*
Server baseado no padrão CRUD:
C- Create
R- Read
U - Update
D - Deleate
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exetended: false}));


let pessoas = [];

app.get('/', (req, res) => {  //R
    res.status(200).send(pessoas);
    console.log('get');
});

app.post('/', (req, res) => { //C
    pessoas.push(req.body);
    res.status(201).send(req.body);
    console.log('post');

});

app.put('/:id', (req, res) => { //U
    
    let pessoaEncontrada = pessoas.filter(pes=>{return pes.id== req.params.id});
    pessoaEncontrada = req.body;
    res.status(202).send(req.body);
    console.log('put');
});

app.delete('/:id', (req, res) => { //D
    for (let index = 0; index < pessoas.length; index++) {
        const pessoa= pessoa[index];
        if(pessoa.id==req.param.id)
        {
            pessoas.slice(index,1);
        }
    }
    res.status(204).send("Pessoa Deletada com sucesso");
    console.log('put');
});


//400 - bad request
//500 - internal server erro
//401 - nao autorizado

app.listen(3000, () => //porta 3000
{
    console.log('Servidor API PROJETOIFOOD iniciado na porta 3000'); //callback para saber quando o servidor foi startado
});