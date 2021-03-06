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
    bancoDados.pets.forEach((pet) => {
        let {nome, idade, tipo, raca, vacinado, servicos} = pet;

        console.log( `
        --- Dados Pet --- 
        Nome: ${nome}
        Idade: ${idade}
        Tipo: ${tipo}
        Raça: ${raca}
        Vacinado: ${vacinado ? 'Pet Vacinado' : 'Pet não vacinado'}`
    )
    servicos.forEach((servico) => {
        console.log(`
        Serviços: ${servico.data} - ${servico.nome}`);
    })
    })
}    

    // for (let i = 0; i < pets.length; i++) {}     
    // for (let pet of bancoDados.pets){ 
    //     console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${pet.vacinado ? 'Pet Vacinado' : 'Pet não vacinado'}`);
    //     for (const servico of pet.servicos){
    //         console.log(`${servico.data} - ${servico.nome}`)
    //     }
    // }


const vacinarPets = pet => {
    
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
    //---- usando o método manipulaçao de array, map
    bancoDados.pets = bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPets(pet);
            petVacinados++;
        }
        return pet;      
    });

    atualizarBanco();
    console.log(`${petVacinados} pets foram vacinados nessa campanha!`)
    
    //---- usando a estrutura de laço for
    // for(let pet of bancoDados.pets){
    //     if (pet.vacinado == false) {
    //         pet.vacinado = true;
    //         petVacinados++;
    //     }else {
    //         console.log(`O pet ${pet.nome} já foi vacinado anteriormente!`);
    //     }  
    // }
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

// const adicionarPet = (novoPet) => {
//     bancoDados.pets.push(...novoPet);
//     atualizarBanco();
//     novoPet.forEach((pet) => {
//         console.log(`${novoPet.nome} foi adicionado com sucesso!`);
//     })
    
// }

const adicionarPet = (...novosPets) => {
    novosPets.forEach((novoPet) => {
        bancoDados.pets.push(novoPet);
    })

    atualizarBanco();
    novosPets.forEach((pet) => {
        console.log(`${pet.nome} foi adicionado com sucesso!`);
    })  
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
    servico(pet);
    //(servico) ? servico(pet) : console.log ('Só vim dar uma olhadinha!');
    console.log('Tchau, até mais!');
}

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {
    
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet && !pet.vacinado;
    });

    return petsEncontrados;
}

const clientePermium = (pet) => {
    //let nome = pet.nome;
    let {nome} = pet;

    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(`Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`);
    }else {
            console.log(`Olá, ${nome}! Você ainda não tem descontos disponíveis!`);
    }
}

const contatoTutor = pet => {
    let {nome, tutor, contato} = pet;

    return `Tutor: ${tutor}
            Contato: ${contato}
            Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    })

    console.log(`Pets do tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`)
    })
}

// console.log(contatoTutor(bancoDados.pets[0]));

// console.log(buscarPet('Abel'));
// campanhaVacina();

// atenderCliente(bancoDados.pets[2], darBanhoPet);
// console.log('--------------------------');

//listarPets()
// console.log('--------------------------');

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
},
{
    "nome": "Fred", 
    "tipo": "porco", 
    "idade": 5, 
    "raca": "mulato",
    "peso": 25, 
    "tutor": "Elsa", 
    "contato": "(81) 98529-5890", 
    "vacinado": false, 
    "servicos": [] 
},
{
    "nome": "Sansão", 
    "tipo": "coelho", 
    "idade": 10, 
    "raca": "slt",
    "peso": 15, 
    "tutor": "Monica", 
    "contato": "(81) 98529-5890", 
    "vacinado": false, 
    "servicos": [] 
}
)
