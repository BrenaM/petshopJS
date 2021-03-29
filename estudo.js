let nomes = ['Hendy', 'Bruno', 'Iago', 'Vinicius', 'Natália'];
const imprimirLista = () => {
    for (let index = 0; index <nomes.length; index++){
        console.log(`${index}: ${nomes[index]}`);
    }
}
//testando métodos com array

// nomes.push('camila')
//nomes.unshift('Marcus')

//let idBruno = 'ID:' + nomes.indexOf('Bruno');
//console.log('Bruno');

//imprimirLista();

if (!nomes.includes('Natalia')){
    console.log('Natália não esta no time')
}else {
    console.log('Natália está no time')
}