const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const bancoDados = require("./dadospets.json")

let pets = bancoDados.pets;
console.log(pets);


//criamos uma arrow function para listar os pets
const listarPets = () => {
    // for (let i = 0; i < pets.length; i++) {}     
    for (let pet of pets){ 
        
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${pet.vacinado ? 'Pet Vacinado' : 'Pet não vacinado'}`);

        for (const servico of pet.servicos){
            console.log(`${servico.data} - ${servico.nome}`)
        }
    }
}

const vacinarPets = pet => {
    //pet.vacinado = pet.vacinado ? console.log('Vacinado!'): (console.log('Não vacinado'));
    for (let pet of pets){ 
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
    for(let pet of pets){
        if (pet.vacinado == false) {
            pet.vacinado = true;
            petVacinados++;
        }else {
            console.log(`O pet ${pet.nome} já foi vacinado anteriormente!`);
        }  
    }
    console.log(`${petVacinados} pets foram vacinados nesta campanha!`);
};

const addCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    pets.push({
            nome: nome,
            tipo: tipo,
            idade: idade,
            raca: raca,
            peso: peso,
            tutor: tutor,
            contato: contato,
            vacinado: vacinado,
            servicos: servicos
        })
    console.log(pets);
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
    servico ? servico(pet) : console.log ('Só vim dar uma olhadinha!');
    console.log('Tchau, até mais!');
}

atenderCliente(pets[1], darBanhoPet);

listarPets();
console.log('---------------------------------');
//apararUnhasPet(pets[2]);
//console.log('--------------');
//tosaPet(pets[0]);
//campanhaVacina();
//vacinarPets(pets[0]);