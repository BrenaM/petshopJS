const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Adelaide',
        tipo: 'cachorro',
        idade: 2,
        raca: "Yorkshire",
        peso: 3.4,
        tutor: 'Brena',
        contato: '(81) 98529-5890',
        vacinado: true,
        servicos: ['banho', 'hidratação', 'tosa']
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
        servicos: ['banho', 'tosa']
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
        servicos: ['banho', 'corte de unha']
    }
];


//criando uma arrow function para listar os pets
const listarPets = () => {
    for (let pet of pets){ 
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPets = (animal) => {

    for(let pet of pets){
        if (animal === pet.nome) {
            if (pet.vacinado == false) {
                pet.vacinado = true;
                console.log(`O pet chamado ${animal} foi vacinado!`)
                break;
            }else {
                console.log(`O Pet ${animal} já foi vacinado!`)
            }
        }
    }
}

const campanhaVacina = () =>{
    let petVacinados = 0
    for(let pet of pets){
        
        if (pet.vacinado == false) {
            pet.vacinado = true;
            petVacinados++
            console.log(`O pet ${pet.nome} foi vacinado!`)

        }else {
            console.log(`O pet ${pet.nome} já foi vacinado anteriormente!`)
        }  
    }
    console.log(`${petVacinados} pets vacinados nesta campanha!`)
}

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

addCliente('Luke', 'cachorro', 3, 'Husk', 35, "victor", '(81) 9 5748-4059', true, [] );
//campanhaVacina();
//vacinarPets("Aristides");
//listarPets();


