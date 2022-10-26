
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

for ( let i = 0; i < surnames.length; i++ ){
    let nameRandom = Math.floor(Math.random() * names.leght);
    let surnameRandom = Math.floor(Math.random() * surnames.leght);
    console.log(`il tuo random: ${names[nameRandom]} ${surnames[surnameRandom]}`);

    fullNames.push( `${names[nameRandom]} ${surnames[surnameRandom]}`);
}
console.log(fullNames)


//Crea un array di numeri interi e fai la somma di tutti gli elementi in posizione dispari:

let numeri = [5,6,7,12,16,354];
let sum = 0;

for( let i = 0; i < numeri.leght; i++ ){
    if( i % 2 !== 0 ){
        sum = sum + numeri[i];
    }
}
console.log(sum)