---
title: "L'Aritmetica Binaria e i Calcoli della CPU"
---

### Introduzione
Abbiamo visto che i computer memorizzano le informazioni sotto forma di sequenze di bit (0 e 1). Ma come fanno a manipolare questi dati per eseguire i calcoli alla base di ogni software, dai videogiochi ai fogli di calcolo? La risposta risiede nell'aritmetica binaria. I calcolatori eseguono addizioni, sottrazioni, moltiplicazioni e divisioni utilizzando le stesse logiche che impariamo alle scuole elementari, ma adattate a un sistema con due sole cifre. In questa lezione scopriremo come le regole del sistema binario rendano in realtà le operazioni molto più semplici di quelle decimali, e introdurremo un metodo ingegnoso utilizzato dai processori per eseguire le sottrazioni.

### Sviluppo dell'argomento core

**1. L'Addizione Binaria**
Nel sistema decimale, per eseguire un'addizione, si mettono i numeri in colonna allineando la cifra delle unità e si sommano le cifre partendo da destra; se la somma supera 9, si tiene conto del riporto. Nel sistema binario si procede esattamente nello stesso modo, ma le regole di base sono molto più brevi perché i simboli sono solo due:
*   0 + 0 = 0
*   0 + 1 = 1
*   1 + 0 = 1
*   1 + 1 = 10, cioè si scrive 0 con il riporto di 1 nella colonna successiva

*Esempio didattico:* Sommiamo 10101 + 1011.
Allineiamo a destra e iniziamo a sommare colonna per colonna. Quando sommiamo 1+1, scriviamo 0 e portiamo 1 a sinistra. 
Il calcolo produce una cascata di riporti fino a ottenere il risultato: 100000.

**2. La Sottrazione e la magia del "Complemento a 2"**
Per eseguire la sottrazione si potrebbe utilizzare una procedura analoga a quella del sistema decimale, gestendo i "prestiti" dalle colonne adiacenti. Tuttavia, per i circuiti di un processore è molto più comodo utilizzare il metodo dei complementi. 
In informatica, il **complemento a 2** ha il significato di cambiamento di segno: trasforma cioè un numero positivo nel suo opposto negativo (e viceversa). 

*Come si calcola il complemento a 2 di un numero binario?*
La regola pratica è semplicissima in due passaggi:
1.  Si cambiano tutte le cifre: gli 0 diventano 1 e gli 1 diventano 0.
2.  Al risultato ottenuto, si aggiunge 1.

Una volta calcolato l'opposto del numero da sottrarre, basterà fare un'addizione normale e ignorare la prima cifra del risultato (l'ultimo riporto a sinistra).

*Esempio didattico:* Calcoliamo 10001 - 01011.
*   Calcolo il complemento di 01011: cambio tutte le cifre ottenendo 10100.
*   Aggiungo 1: 10100 + 1 = 10101.
*   Ora sommo il primo numero (10001) al complemento appena trovato (10101): 
    10001 + 10101 = 100110.
*   Ignoro la prima cifra a sinistra: il risultato finale è 00110 (cioè 110).

**3. La Moltiplicazione Binaria**
La moltiplicazione nel sistema decimale prevede di moltiplicare il primo numero per ogni cifra del secondo, spostandosi ogni volta di un posto a sinistra e infine sommando i prodotti parziali. 
Nel sistema binario questo procedimento risulta molto più semplice: i prodotti parziali possono essere solo per la cifra 0 (e quindi il risultato è una riga di zeri) o per la cifra 1 (e quindi si ricopia semplicemente il primo numero così com'è).

*Esempio didattico:* Calcoliamo 10001 x 1011.
*   Si scrive in colonna.
*   Si moltiplica per la prima cifra a destra (1), quindi si ricopia 10001.
*   Si passa alle cifre successive, spostandosi sempre di una posizione a sinistra. Quando la cifra del moltiplicatore è 0, si può evitare di scrivere la riga di zeri e spostarsi direttamente di un'ulteriore posizione a sinistra per la cifra successiva.
*   Infine, si esegue la somma in colonna dei risultati parziali, ottenendo 10111011.

**4. La Divisione Binaria**
La divisione segue la medesima logica della divisione in colonna tradizionale. 
*Esempio didattico:* Dividiamo 1111011 per 101.
*   Dapprima si separano le prime tre cifre del dividendo (111) e si dividono per il divisore (101), ottenendo come quoziente parziale 1.
*   Si moltiplica il quoziente per il divisore (1 x 101 = 101), si incolonno sotto il dividendo e si effettua la sottrazione (111 - 101 = 10).
*   Si abbassa la cifra successiva a destra (ottenendo 101) e si ripete la divisione (101 diviso 101 fa 1).
*   Si abbassano via via tutte le cifre fino ad ottenere alla fine il quoziente e il resto della divisione.

### Sintesi
*   **Addizione:** Le regole base sono 0+0=0, 0+1=1, 1+0=1 e l'importante 1+1=10 (dove 1 viene riportato alla colonna successiva).
*   **Sottrazione:** Per semplificare i circuiti, la CPU non "sottrae" direttamente, ma somma il primo numero all'opposto del secondo, utilizzando il metodo del complemento a 2.
*   **Moltiplicazione:** È una sequenza di somme. Si ricopia il moltiplicando se la cifra del moltiplicatore è 1, altrimenti ci si sposta a sinistra di uno zero.
*   **Divisione:** Riprende il metodo in colonna decimale (abbassando le cifre, calcolando il quoziente e sottraendo per trovare il resto).

### Glossario Finale
*   **Riporto:** Valore che eccede la capacità di una singola colonna durante un'addizione e viene perciò sommato alla colonna successiva a sinistra.
*   **Complemento a 2:** Metodo matematico usato nel sistema binario per rappresentare l'opposto di un numero e calcolare le sottrazioni mediante l'addizione. Si calcola invertendo i bit e sommando 1.
*   **Dividendo e Divisore:** I due termini dell'operazione di divisione. Il dividendo è il numero da dividere, il divisore è il numero per cui si divide.
*   **Quoziente e Resto:** I risultati della divisione intera. Il quoziente è il risultato esatto, il resto è ciò che "avanza" se la divisione non è esatta.