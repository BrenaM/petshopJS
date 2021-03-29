const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const fs = require('fs'); //importar a biblioteca fs
let bancoDados = fs.readFileSync("./dadospets.json"); //ler os arquivo e sincronizar

bancoDados = JSON.parse(bancoDados); //conversão do json para js- de string p/ obj

const atualizarBanco = () => {
    //conversão de objeto js para json
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualizar arquivo dadospets.json
    fs.writeFileSync('dadospets.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    // for (let i = 0; i < pets.length; i++) {}     
    for (let pet of bancoDados.pets){ 
        
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${pet.vacinado ? 'Pet Vacinado' : 'Pet não vacinado'}`);

        for (const servico of pet.servicos){
            console.log(`${servico.data} - ${servico.nome}`)
        }
    }
}

const vacinarPets = pet => {
    //pet.vacinado = pet.vacinado ? console.log('Vacinado!'): (console.log('Não vacinado'));
    for (let pet of bancoDados.pets){ 
        if (!pet.vacinado){
            pet.vacinado = true;
            console.log(`${pet.nome} já foi vacinado com sucesso!`)
        } else {
            console.log(`Ops, ${pet.nome} já foi vacinado!`)
        }
    }
}

const campanhaVacina = () =>{
    console.log('--- Campanha de Vacinação ---');

    let petVacinados = 0
    for(let pet of bancoDados.pets){
        if (pet.vacinado == false) {
            pet.vacinado = true;
            petVacinados++;
        }else {
            console.log(`O pet ${pet.nome} já foi vacinado anteriormente!`);
        }  
    }
    console.log(`${petVacinados} pets foram vacinados nesta campanha!`);
};

// const addCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
//     bancoDados.pets.push({
//             nome: nome,
//             tipo: tipo,
//             idade: idade,
//             raca: raca,
//             peso: peso,
//             tutor: tutor,
//             contato: contato,
//             vacinado: vacinado,
//             servicos: servicos
//         })
//     console.log(pets);
// }

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = pet => {
        pet.servicos.push({
            'nome':'banho',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está de banho tomado!`);
};   

const tosaPet = pet => {

    pet.servicos.push({
        'nome': 'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinha na régua!`);        
}

const apararUnhasPet= (animal) => {
        
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas cortadas!`);
} 

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}!`);
    (servico) ? servico(pet) : console.log ('Só vim dar uma olhadinha!');
    console.log('Tchau, até mais!');
}


atenderCliente(bancoDados.pets[0], darBanhoPet);
console.log('--------------------------');

//listarPets();
//console.log('--------------------------');
adicionarPet({
    "nome": "Alfredo", 
    "tipo": "cachorro", 
    "idade": 5, 
    "raca": "Husk",
    "peso": 25, 
    "tutor": "Brena", 
    "contato": "(81) 98529-5890", 
    "vacinado": false, 
    "servicos": []    
});
