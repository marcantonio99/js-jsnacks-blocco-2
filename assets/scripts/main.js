
//Chiedi all'utente di inserire un numero, se pari stampa, se dispari stampa il numero successivo:

const number = parseInt(prompt('inserisci un numero'));
if((number % 2) != 1){
    console.log('il numero stampato è: '+ number );
}else((number % 2) != 0);{
    console.log('il numero stampato è: '+ (number + 1) );
}


//Generatore di nomi e cognomi casuale. Crea falsa lista di invitati:

const names = ['Mario', 'Emanuela', 'Fabio'];
const surnames = ['Bros', 'Marangia', 'Esposito'];
console.log(names);

const fullNames = [];

let nameRandom = Math.floor(Math.random() * names.leght);
let surnameRandom = Math.floor(Math.random() * surnames.leght);

console.log(`il tuo random: ${names[nameRandom]} ${surnames[surnameRandom]}`);

for ( let i = 0; i < surnames.length; i++ ){

}