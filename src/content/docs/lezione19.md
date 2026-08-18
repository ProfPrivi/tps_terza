---
title: "Lo Standard IEEE 754 per la Virgola Mobile"
---

### Introduzione
Nella lezione precedente abbiamo scoperto come normalizzare un numero in base 2, spostando la virgola in modo che la parte intera sia sempre pari a 1. Tuttavia, sorge un problema di comunicazione universale: se ogni produttore di computer (Apple, IBM, Intel) usasse un metodo diverso per immagazzinare il segno, l'esponente e la mantissa, i programmi non potrebbero funzionare su macchine diverse. Per risolvere questo problema e garantire la portabilità del software, è stata creata una rappresentazione normalizzata standard universale: lo Standard IEEE 754. In questa lezione smonteremo questo standard pezzo per pezzo, scoprendo i geniali "trucchi" ingegneristici che permettono di risparmiare memoria e velocizzare i calcoli.

### Sviluppo dell'argomento core

**1. I formati dello Standard IEEE 754**
Lo standard di riferimento per l'aritmetica in virgola mobile si chiama IEEE 754 (aggiornato nel 2008). Per i numeri binari, lo standard definisce tre formati principali che si differenziano per lo spazio occupato in memoria:
*   **Singola precisione (binary32):** Codifica i numeri in sequenze di 32 bit.
*   **Doppia precisione (binary64):** Codifica i numeri in sequenze di 64 bit.
*   **Quadrupla precisione (binary128):** Codifica i numeri in sequenze di 128 bit.

Indipendentemente dalla precisione, la struttura di un numero in virgola mobile è sempre divisa in tre campi ben precisi: Segno, Esponente e Mantissa.

**2. L'anatomia della Singola Precisione (32 bit)**
Analizziamo il formato a 32 bit. I bit a disposizione vengono così ripartiti:
*   **1 bit per il Segno (S):** Assume valore 0 se il numero è positivo, oppure 1 se il numero è negativo.
*   **8 bit per l'Esponente:** Specifica la potenza di 2 per cui moltiplicare la mantissa.
*   **23 bit per la Mantissa:** Contiene la parte frazionaria del numero.

**3. I "trucchi" dell'architettura: Bit Nascosto e Bias (Polarizzazione)**
Gli ingegneri che hanno progettato lo standard hanno inserito due ottimizzazioni fondamentali:
*   **Il bit nascosto:** Sappiamo che, in un numero binario normalizzato, la parte intera vale sempre 1. Proprio per questo motivo, il numero 1 iniziale non viene memorizzato fisicamente nella mantissa!. Questo consente di avere a disposizione un bit aggiuntivo "gratis" per aumentare la precisione del calcolo. (Quindi, nei 32 bit, la precisione reale è di 24 bit: 23 fisici + 1 nascosto).
*   **Il valore di polarizzazione (Bias):** Come facciamo a memorizzare un esponente negativo (es. 2<sup>-5</sup>) senza sprecare un bit per il suo segno? La soluzione è il *Bias*. Nel campo esponente viene memorizzato il valore che si ottiene aggiungendo all'esponente reale una costante fissa, che per la singola precisione vale 127 (per la doppia è 1023, per la quadrupla 16383).
    *Esempio didattico:* Per memorizzare l'esponente -1 in singola precisione, il computer calcola -1 + 127 = 126. In memoria verrà salvato il numero binario corrispondente a 126 (cioè 01111110<sub>2</sub>). Questo trucco fa sì che l'esponente salvato in memoria sia sempre un valore positivo. Questa rappresentazione polarizzata (o *biased*) semplifica immensamente i circuiti della CPU per le operazioni di moltiplicazione e divisione.

**4. Esempio pratico di conversione da Binario a Decimale**
Proviamo a decodificare una stringa a 32 bit per capire quale numero nasconde.
Stringa: `1 01111110 10000000000000000000000`
*   **Segno:** Il primo bit è 1, quindi il numero è negativo.
*   **Esponente:** I successivi 8 bit sono `01111110`, che in decimale valgono 126. Sottraendo il bias (126 - 127), scopriamo che l'esponente reale è **-1**.
*   **Mantissa:** I restanti 23 bit iniziano con `100...`. Aggiungendo il bit nascosto ("1,"), la mantissa completa è 1,1<sub>2</sub>.

Assemblando i pezzi nella formula: (-1)<sup>1</sup> x 1,1<sub>2</sub> x 2<sup>-1</sup> = -0,11<sub>2</sub>.
Trasformando la parte frazionaria in decimale: -(1 x 2<sup>-1</sup> + 1 x 2<sup>-2</sup>) = -(0,50 + 0,25) = **-0,75<sub>10</sub>**.

**5. I casi speciali**
Per evitare blocchi del sistema, lo standard ha previsto combinazioni di bit riservate a casi eccezionali:
*   **Zero (+0 e -0):** Esponente tutto a 0, Mantissa tutta a 0.
*   **Infinito ($\infty$):** Esponente tutto a 1, Mantissa tutta a 0 (utile in caso di divisioni per zero).
*   **NaN (Not a Number):** Esponente tutto a 1, Mantissa non a 0. Indica un errore matematico o un numero non valido (es. radice quadrata di un numero negativo).

### Sintesi
*   Lo Standard IEEE 754 garantisce che tutti i computer codifichino i numeri in virgola mobile nello stesso modo, assicurando la portabilità del software.
*   I formati principali sono la singola (32 bit), la doppia (64 bit) e la quadrupla precisione (128 bit).
*   Ogni numero è diviso in tre campi: Segno (1 bit), Esponente e Mantissa.
*   Per ottimizzare la memoria, l'esponente viene falsato aggiungendo una costante (Bias), e la parte intera della mantissa (sempre uguale a 1) non viene scritta (Bit nascosto).
*   Lo standard prevede configurazioni speciali per gestire lo zero, l'infinito e le operazioni non valide (NaN).

### Glossario Finale
*   **Standard IEEE 754:** Standard internazionale del 2008 che regola l'aritmetica e la rappresentazione dei numeri in virgola mobile nei sistemi informatici.
*   **Bit nascosto:** Tecnica che omette la memorizzazione della cifra intera (sempre 1) in un numero binario normalizzato, guadagnando un bit di precisione.
*   **Bias (Polarizzazione):** Costante (es. 127 nella singola precisione) aggiunta all'esponente reale per far sì che il campo esponente in memoria contenga sempre valori positivi.
*   **NaN (Not a Number):** Configurazione speciale di bit usata per rappresentare il risultato di un'operazione matematica indefinita o non valida.
*   **Singola/Doppia Precisione:** Formati di codifica che utilizzano rispettivamente 32 e 64 bit complessivi, offrendo range e dettagli decimali via via superiori.