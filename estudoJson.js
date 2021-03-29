let bancoDados = require("./dadospets.json")

let pets = bancoDados.pets;


const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    //servico();
    (servico) ? servico(): console.log('só vim dar uma olhadinha.')
    console.log('Tchau, até mais!');
}

const darBanho = ()=> {
    console.log('Dando banho no pet ...');
}

const apararUnhas = () => {
    console.log('Aparando unhas ...');
}

atenderCliente(pets[0], darBanho);
console.log('---------------------');
atenderCliente(pets[2], apararUnhas);
console.log('---------------------');
atenderCliente(pets[1]);

//let arquivoJson = require("./package.json")
//console.log(arquivoJson)
//aqui chamandos um arquivo Json externo e imprimimos como objeto
//console.log(JSON.stringify(arquivoJson));



//let dadospet = require('./dadospets.json')




// let petObj = {
//     nome: 'Doug',
//     idade: 4,
//     tipo: 'cachorro'
// };

// -- Tansformando JS to Jason --
// let pets = {
//     nome: "Adelaide",
//     tipo: "cachorro",
//     idade: 2,
//     raca: "Yorkshire",
//     peso: 3.4,
//     tutor: "Brena",
//     contato: "(81) 98529-5890",
//     vacinado: true,
//     servicos: ["banho", "tosa"]
// }

// console.log(JSON.stringify(pets));

// -- Transformando  Json to JS --
//let pets = `{ "nome": "Batman" }`
//se usar a crase pode quebrar a linha e o codigo roda normal
//se usar aspas simples não
//console.log(JSON.parse(pets))