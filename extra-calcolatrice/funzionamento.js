//cliccando su C andiamo a cancellare tutto scrivendo 0 al posto di tutto ciò che avevamo scritto prima 
function cancella(){
    document.getElementById("ris").innerHTML="0";
}

//funzione che elimina i zeri iniziali, in modo che se passiamo come valore 095 ci restituisce 95 e non 095 
function toglizero(){
    var value = document.getElementById("ris").innerHTML; //prendiamo il valore scritto nel display 
    if(value=="0"){  //Se quel valore è 0 
    value=" "; //allora togliamo lo zero e ci mettiamo lo spazio vuoto 
    document.getElementById("ris").innerHTML=value; 
    }
}

//funzione che dato un valore lo inserisce all'interno del display 
function display(value){
    toglizero();
    document.getElementById("ris").innerHTML+=value;  //mettere += è come dire = value + value; cioè somma il vecchio valore cliccato con quello nuovo, questo permette di poter inserire numeri come 456
}

//semplice funzione che calcola la percentuale di un numero 
function perc(){
    var value= document.getElementById("ris").innerHTML;
    value= value/100; 
    document.getElementById("ris").innerHTML=value;
}

//la virgola funziona già, è solo da fare il calcolo delle espressioni

function solve(){
    toglizero();
    var value=document.getElementById("ris").innerHTML; //prendiamo ciò che c'è dentro il display e calcoliamo il risultato di quell'espressione 
    var risolvi= eval(value); //la funziona eval() prende tutto ciò che le viene dato in input (stringa) e la trasforma in script cioè in una funzione praticamente, questo ci salva da tutto il processo di trasformazione dei singoli valori in numeri 
    document.getElementById("ris").innerHTML=risolvi;  //una volta calcolato il risultato lo scriviamo dentro all'output 
}


