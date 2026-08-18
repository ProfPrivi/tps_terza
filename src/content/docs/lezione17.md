---
title: "L'organizzazione della memoria e i Numeri Interi"
---

### Introduzione
Nelle lezioni precedenti abbiamo imparato come contare e calcolare utilizzando il sistema binario. Tuttavia, nella realtà fisica dei circuiti di un computer, non possiamo scrivere una sequenza infinita di zeri e uni: la memoria ha dimensioni e strutture fisse. Inoltre, sorge una domanda fondamentale: come fa il computer a capire se un numero è positivo o negativo, dal momento che non esiste il simbolo "-" ma ci sono solo stati elettrici associati a 0 e 1? In questa lezione scopriremo come le singole cifre binarie vengono raggruppate per essere elaborate dalla CPU e come il geniale trucco del "complemento a 2" permetta di rappresentare e memorizzare i numeri negativi.

### Sviluppo dell'argomento core

**1. Raggruppare l'informazione: Byte e Parole (Word)**
Le cifre binarie (bit) sono gli elementi fondamentali per la rappresentazione delle informazioni all'interno dell'elaboratore. Tuttavia, per motivi di efficienza, all'interno di un calcolatore i bit non vengono quasi mai trattati singolarmente, ma elaborati "a pacchetti" contenenti un numero costante di elementi.
*   **Il Byte:** Quando le cifre binarie vengono raggruppate in sequenze o stringhe di 8 bit, otteniamo l'unità di misura base della memoria, chiamata **byte**.
*   **La Parola (Word):** Per il trattamento dei dati, i processori operano su sequenze composte da un numero fisso di byte, e tali stringhe prendono il nome di **parole**.
Gli elaboratori possono operare con parole di lunghezze diverse: 1 byte (8 bit), 2 byte (16 bit), 4 byte (32 bit) oppure 8 byte (64 bit). Poiché il tempo impiegato dalla CPU per elaborare un'intera "parola" è considerato costante, la lunghezza della parola costituisce un indice vitale per determinare la potenza e la velocità di calcolo di un elaboratore.

Per calcolare quante informazioni diverse possiamo inserire in uno spazio finito, usiamo la regola delle combinazioni: dati *N* simboli da disporre in *P* posti, si ottengono N<sup>P</sup> combinazioni possibili. Essendo nel sistema binario (N=2), in una parola da 16 bit avremo 2<sup>16</sup> combinazioni diverse (ben 65.536).

**2. La rappresentazione dei numeri interi e il "Bit di Segno"**
Supponiamo che il nostro computer utilizzi parole da 2 byte (cioè 16 bit) e che noi vogliamo memorizzare solo numeri interi (senza la virgola). Come indichiamo se il numero è positivo o negativo?
La soluzione adottata in informatica è quella di sacrificare un bit: dei 16 bit a disposizione, il **primo bit a sinistra** viene dedicato esclusivamente all'indicazione del segno.
*   Se il primo bit a sinistra è **0**, il numero è positivo (+).
*   Se il primo bit a sinistra è **1**, il numero è negativo (-).

*E i numeri positivi?* 
Poiché abbiamo "speso" 1 bit per il segno, per i numeri positivi ci rimangono a disposizione 15 bit. Quante combinazioni (e quindi quanti numeri) possiamo formare con 15 bit? Applicando la regola precedente: 2<sup>15</sup> numeri diversi. Poiché dobbiamo includere anche lo zero, il range dei numeri interi positivi andrà da 0 fino a 2<sup>15</sup> - 1 (cioè da 0 a +32.767).

**3. La rappresentazione dei numeri negativi: Il Complemento a 2**
E per i numeri negativi? Non basta mettere un 1 come bit di segno e lasciare il resto del numero invariato. Per i numeri negativi si ricorre al criterio del **complemento a 2** che abbiamo già incontrato per le sottrazioni.
Fissato il numero di bit su cui operare, il complemento a 2 di un numero dato risulta essere l'esatto opposto matematico di quel numero. 

*Esempio didattico:* Calcoliamo l'opposto di 5 usando parole da 8 bit.
1.  Il numero 5 in binario su 8 bit è: 00000101.
2.  Scambiamo le cifre (gli 0 diventano 1, e gli 1 diventano 0): 11111010.
3.  Sommiamo 1: 11111011.
Il valore 11111011 è la rappresentazione in memoria del numero -5. (Possiamo notare che il primo bit a sinistra è un 1, a conferma che si tratta di un numero negativo!).

Questa logica ci permette di capire i limiti di archiviazione della memoria. Lavorando sempre con parole da 16 bit:
*   Il limite massimo positivo è 0111111111111111, che equivale a +32.767 (ovvero 2<sup>15</sup> - 1).
*   Il limite minimo negativo è 1000000000000000, che equivale a -32.768 (ovvero -2<sup>15</sup>).

Qualora utilizzassimo computer a 32 bit (cioè parole da 4 byte), i bit a disposizione per la grandezza del numero sarebbero 31 (uno è sempre dedicato al segno). Di conseguenza il massimo valore rappresentabile diventerebbe 2<sup>31</sup> - 1 e il minimo -2<sup>31</sup>, espandendo enormemente la capacità di calcolo del sistema.

### Sintesi
*   I bit vengono raggruppati in **Byte** (8 bit) e in **Parole / Word** (16, 32, 64 bit). Maggiore è la lunghezza della parola, maggiore è la potenza dell'elaboratore.
*   Nei numeri interi con segno, il primo bit a sinistra stabilisce la polarità del valore: 0 indica un numero positivo, 1 indica un numero negativo.
*   I numeri positivi occupano lo spazio rimanente, per cui il valore massimo calcolabile in una parola di *n* bit è 2<sup>n-1</sup> - 1.
*   I numeri negativi non sono semplicemente la versione positiva con l'aggiunta dell'1 iniziale, ma vengono memorizzati sfruttando l'algoritmo del **complemento a 2**.

### Glossario Finale
*   **Byte:** Sequenza o stringa fissa composta da 8 cifre binarie (bit).
*   **Parola (Word):** Stringa di byte (es. 2, 4 o 8 byte) che costituisce l'unità base di elaborazione processata in un singolo ciclo dalla CPU.
*   **Bit di segno:** La cifra binaria posizionata più a sinistra in una parola, dedicata a definire se il numero intero è positivo (0) o negativo (1).
*   **Complemento a 2:** Metodo di codifica dei numeri negativi. Si ottiene invertendo ogni singolo bit del numero originario positivo e sommando 1 al risultato finale.