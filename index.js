const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";

let pets = [{
        nome: 'Adelaide',
        tipo: 'cachorro',
        idade: 2,
        raca: "Yorkshire",
        peso: 3.4,
        tutor: 'Brena',
        contato: '(81) 98529-5890',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Aristides',
        tipo: 'cachorro',
        idade: 4,
        raca: "Pincher",
        peso: 5,
        tutor: 'Suzana',
        contato: '(81) 98529-5890',
        vacinado: false,
        servicos: ['banho']
    },
    {
        nome: 'Abel',
        tipo: 'coelho',
        idade: 1,
        raca: "sla",
        peso: 3,
        tutor: 'Brena',
        contato: '(81) 98529-5890',
        vacinado: false,
        servicos: ['corte de unha']
    }
]
  // for (let i = 0; i < pets.length; i++) {
  // console.log(pets[i].nome);
  // console.log(`O nome do pet é ${pets[i].nome}`);
  // }
//criamos uma arrow function para listar os pets
const listarPets = () => {
    for (let pet of pets){ 
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPets = pet => {

    if (!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} já foi vacinado com sucesso!`)
    } else {
        console.log(`Ops, ${pet.nome} já foi vacinado!`)
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
            'serviço':'banho',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está de banho tomado!`);
};   

const tosaPet = pet => {

    pet.servicos.push({
        'serviço': 'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinha na régua!`);        
}

//versão abaixo feita em aula. ps: a versão acima é mais clean ;)
const apararUnhasPet= (animal) => {
    for(let pet of pets){
        if (pet.nome === animal){
        pet.servicos.push('corte de unhas')
        pet.servicos.push({
            'serviço':'corte de unhas',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está de unhas cortadas!`);
        }
    }  
}

darBanhoPet(pets[0]);
//console.log(pets[0]);
tosaPet(pets[0]);
apararUnhasPet('Abel')
//listarPets()
//campanhaVacina();
//vacinarPets(pets[0]);