let fs = require('fs'); //filesystem - modulo nativo

//pega conteudo do arquivo e converte para utf-8
let bancoDados = fs.readFilesSync('dadospets.json', 'utf-8');

//