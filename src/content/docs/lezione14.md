---
title: "Introduzione ai sistemi posizionali e al Sistema Binario"
---

### Introduzione
Nella nostra vita quotidiana siamo abituati a contare e a calcolare utilizzando dieci cifre. Questo ci sembra naturale, ma in informatica la rappresentazione delle quantità numeriche segue regole diverse, dettate dalla natura fisica delle macchine. I computer, infatti, non comprendono il nostro linguaggio, ma ragionano esclusivamente attraverso stati elettrici (acceso/spento). Questa lezione ci porterà a scoprire il concetto matematico di "sistema posizionale" e ci introdurrà al linguaggio matematico nativo dei calcolatori: il sistema binario. Impareremo inoltre a tradurre i numeri dal nostro sistema a quello della macchina, e viceversa.

### Sviluppo dell'argomento core

**1. Il Sistema Decimale e il concetto di Valore Posizionale**
Le quantità numeriche vengono espresse generalmente utilizzando il sistema di numerazione decimale, che si chiama in questo modo perché utilizza 10 cifre (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) per rappresentare i numeri. Si dice anche che i numeri sono rappresentati in "base 10".
In informatica, l'uso del termine *sistema* indica un insieme di oggetti e di regole organizzati per svolgere una funzione (in questo caso, rappresentare grandezze numeriche). Il sistema risulta quindi definito dalle sue parti (le cifre), dalle sue relazioni (le regole di calcolo) e dalle sue finalità.

La caratteristica fondamentale del nostro sistema è che le cifre possiedono un **valore posizionale**: assumono cioè un "peso" o un valore diverso a seconda della posizione che occupano all'interno della scrittura del numero. 
*Esempio didattico:* Consideriamo il numero 724.
*   La cifra 7 vale 700, ovvero 7 centinaia (che corrisponde alla potenza di 10 con esponente 2, cioè 10<sup>2</sup>).
*   La cifra 2 vale 20, ovvero 2 decine (potenza di 10 con esponente 1, cioè 10<sup>1</sup>).
*   La cifra 4 vale 4 unità (potenza di 10 con esponente 0, cioè 10<sup>0</sup>).

**2. Il Sistema Binario e il Bit**
In informatica vengono usati altri sistemi di numerazione, tra cui il sistema ottale (base 8), il sistema esadecimale (base 16) e, soprattutto, il **sistema binario** (numeri in base 2).
Il sistema binario si lega strettamente alla tecnologia e al funzionamento dei computer, poiché l'elaboratore utilizza dispositivi elementari che possono assumere soltanto due stati. A questi due stati vengono convenzionalmente associate le cifre 0 e 1, che sono le uniche due cifre del sistema binario.
Nel linguaggio informatico, queste singole cifre binarie vengono indicate con il termine **bit**, che nasce dalla contrazione delle due parole inglesi *Binary digiT* (cifra binaria). Poiché tutti i dati all'interno del computer sono rappresentati utilizzando queste cifre, il bit diventa l'unità elementare per la misura dell'informazione, ovvero la più piccola unità di informazione possibile.

Esattamente come nel sistema decimale, anche le cifre 0 e 1 del sistema binario assumono un valore posizionale, ma con riferimento alle potenze di 2 anziché alle potenze di 10.
*Esempio di potenze di 2:*
*   2<sup>0</sup> = 1
*   2<sup>1</sup> = 2
*   2<sup>2</sup> = 4
*   2<sup>3</sup> = 8
*   2<sup>4</sup> = 16
*   2<sup>10</sup> = 1024

**3. Conversione: Da Binario a Decimale**
Per tradurre un numero scritto in binario nel nostro sistema decimale, la regola è semplice: si moltiplica ciascuna cifra binaria per la corrispondente potenza di 2 (data dalla sua posizione, partendo da destra verso sinistra con l'esponente 0) e si sommano i prodotti ottenuti.
*Esempio A:* Convertiamo il numero binario 1001<sub>2</sub>.
*   1 x 2<sup>3</sup> + 0 x 2<sup>2</sup> + 0 x 2<sup>1</sup> + 1 x 2<sup>0</sup>
*   8 + 0 + 0 + 1 = 9
Quindi il numero binario 1001 corrisponde al numero decimale 9.

*Esempio B:* Convertiamo il numero binario 11010<sub>2</sub>.
*   0 x 2<sup>0</sup> + 1 x 2<sup>1</sup> + 0 x 2<sup>2</sup> + 1 x 2<sup>3</sup> + 1 x 2<sup>4</sup>
*   0 + 2 + 0 + 8 + 16 = 26
Il risultato è il numero decimale 26.

**4. Conversione: Da Decimale a Binario**
La trasformazione inversa, da un numero decimale a un numero binario, si effettua utilizzando il metodo delle divisioni successive, secondo questa regola: si divide il numero dato per 2 e si annota il resto (che in una divisione per 2 può essere solo 0 o 1). Il quoziente ottenuto viene a sua volta diviso ancora per 2, ottenendo un nuovo resto; si prosegue in questo modo fino a quando si ottiene come quoziente il numero 0.
Infine, la sequenza dei resti, letta rigorosamente **dall'ultimo al primo**, fornisce il numero binario corretto, a partire dalla cifra più significativa.

*Esempio pratico:* Trasformazione del numero decimale 35.
*   35 diviso 2 fa 17 con **Resto 1**
*   17 diviso 2 fa 8 con **Resto 1**
*   8 diviso 2 fa 4 con **Resto 0**
*   4 diviso 2 fa 2 con **Resto 0**
*   2 diviso 2 fa 1 con **Resto 0**
*   1 diviso 2 fa 0 con **Resto 1**

Leggendo la colonna dei resti dall'ultimo risultato (in basso) al primo (in alto), otteniamo che 35<sub>10</sub> = 100011<sub>2</sub>.

### Sintesi
*   I sistemi di numerazione, sia decimale che binario, sono **posizionali**: il valore di ogni cifra dipende dalla posizione che occupa all'interno del numero.
*   Il computer utilizza il sistema binario (base 2, cifre 0 e 1) perché i suoi circuiti interni riconoscono solo due stati elettrici.
*   Il **bit** (Binary digiT) è la più piccola unità di misura dell'informazione all'interno di un elaboratore.
*   Per convertire da binario a decimale si sommano i prodotti delle cifre per le potenze di 2 crescenti da destra a sinistra.
*   Per convertire da decimale a binario si divide ripetutamente il numero per 2 e si leggono i resti al contrario (dall'ultimo al primo).

### Glossario Finale
*   **Sistema di numerazione:** Un insieme di oggetti (cifre) e di regole organizzati per svolgere la funzione di rappresentare grandezze numeriche.
*   **Valore posizionale:** La proprietà di un sistema di numerazione in cui il peso di una cifra varia a seconda della sua posizione (basata sulle potenze della base).
*   **Base:** Il numero di cifre usate da un sistema di numerazione (es. Base 10 per il decimale, Base 2 per il binario).
*   **Bit (Binary digiT):** La cifra binaria (0 o 1). Costituisce l'unità elementare per la misura dell'informazione.
*   **Cifra più significativa:** In una sequenza di conversione tramite divisioni, è l'ultimo resto ottenuto (che diventerà la cifra più a sinistra del numero binario).