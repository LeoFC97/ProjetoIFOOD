'use-strict'

const app = require('../ProjetoIFOOD.api/bin/express');
const variables = require('../ProjetoIFOOD.api/bin/configuration/variables');


app.listen(variables.Api.port,()=>{
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port} `); //recebendo a variavel da porta dinamicamente
});