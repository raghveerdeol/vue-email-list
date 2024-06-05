<!-- Descrizione:
Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. -->
-Aggiungo cdn di axios nel html;
-aggiungo vue;
-creo un array vuoto;
-creo un metodo getEmail nel quale al interno di un ciclo for da 0 a 10 inserisci axios.get(API);
-chiamo il metodo in created();
-pusho l'email generate nel array;
-richiamo l'array con vue per visualizzare l'email in paggina;