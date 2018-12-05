const express = require('express'); //fazendo o "import" do express
const app /*variavel para manter o "servidor" */ = express(); //chamando a funcao do express

/*
Server baseado no padrão CRUD:
C- Create
R- Read
U - Update
D - Deleate
*/


app.get('/', (req, res) => {  //R
    res.status(200).send("Olá Mundo");
    console.log('get');
});

app.post('/', (res, res) => { //C
    res.status(201).send("Criado");
    console.log('post');

});

app.put('/', (res, res) => { //U
    res.status(202).send("Atualizado");
    console.log('put');
});

app.delete('/', (res, res) => { //D
    res.status(204).send("Excluido");
    console.log('put');
});


//400 - bad request
//500 - internal server erro
//401 - nao autorizado

app.listen(3000, () => //porta 3000
{
    console.log('Servidor API PROJETOIFOOD iniciado na porta 3000'); //callback para saber quando o servidor foi startado
});