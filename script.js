// let palavra = prompt("digite uma palavra para ser invertida: ");

// let numero = palavra.length

// let palavraLetra = []

// for (let i = numero - 1; i >= 0; i--){
//     palavraLetra.push(palavra[i]);
// }

// alert(palavraLetra.join(""))


// let palavra = prompt("digite uma apalavra: ");

// let palavraLista = []

// for (let i = 0; i < palavra.length; i++){
//     if(i % 2 == 0){
//         palavraLista.push(palavra[i].toLowerCase())
//     } else {
//         palavraLista.push(palavra[i].toUpperCase())
//     }
// }

//  alert(palavraLista.join(""))

// let listaNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// let listaAtualizada = []

// for (let i = 0; i < listaNumeros.length; i++) {
//     if(listaNumeros[i] % 3 == 0){
//         if(listaNumeros[i] %  5 == 0){
//             listaAtualizada.push("boom")
//         } else {
//             listaAtualizada.push("plic")
//         }
//     } else if (listaNumeros[i] %  5 == 0) {
//         listaAtualizada.push("plac")
//     } else {
//         listaAtualizada.push(listaNumeros[i]);
//     }
// }

// console.log(listaAtualizada);
// const novaLista = listaNumeros.map((numero)=>{
//     let result = numero %3===0 && numero%5===0  ?
//     "boom": 
//     numero%5===0 ?
//     "Plac" :
//     numero %3===0?
//     "plic"
//     : numero
//     return result
// })
// console.log(novaLista)
// listaNumeros.reduce((prev,next)=>{
//     return prev += next
// },0)
// listaNumeros.forEach(()=>{
    
// })

//map, filter, find, forEach, reduce

let dia = "terca-feira";

let tempo = 13

function passaDias (diaDasemana, tempoPassado){
    let diasDaSemana = ["domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira" , "sabado"]
 
    let contador = diasDaSemana.findIndex((elemento) => elemento === diaDasemana)

    let resto = (contador + tempoPassado) % diasDaSemana.length

    return console.log(diasDaSemana[resto]);
};

passaDias(dia,tempo);