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
        vacinado: true,
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
    for (let i = 0; i < pets.length; i++ ){

        console.log(pets[i].nome);
    }
}

listarPets();


