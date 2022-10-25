//Chiedi all'utente di inserire un numero, se pari stampa, se dispari stampa il numero successivo:

const number = parseInt(prompt('inserisci un numero'));
if((number % 2) != 1){
    console.log('il numero stampato è: '+ number );
}else((number % 2) != 0);{
    console.log('il numero stampato è: '+ (number + 1) );
}
