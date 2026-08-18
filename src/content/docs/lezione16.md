---
title: "Sistemi Ottale, Esadecimale e Raggruppamento dei Dati"
---

### Introduzione
Per far dialogare il nostro modo di contare con quello dei calcolatori, dobbiamo padroneggiare la traduzione tra basi numeriche differenti. Mentre gli esseri umani ragionano in base 10, l'hardware lavora in base 2. Tuttavia, poiché le sequenze di bit sono lunghe e difficili da leggere, gli informatici utilizzano sistemi intermedi come il sistema esadecimale (base 16) e ottale (base 8), che fungono da veri e propri "riassunti" del codice binario. In questa lezione esploreremo nel dettaglio tutti i procedimenti matematici per convertire i valori tra la base dieci, la base due, la base sedici e la base otto.

### Sviluppo dell'argomento core

**1. Il Sistema Esadecimale (Base 16) e Ottale (Base 8)**
Il **sistema esadecimale** utilizza 16 cifre per rappresentare i numeri. Poiché i nostri numeri arabi si fermano a 9, per rappresentare i valori dal 10 al 15 si usano le prime lettere dell'alfabeto: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. La lettera A vale 10, B vale 11, C vale 12, D vale 13, E vale 14 e F vale 15.
Il **sistema ottale**, invece, utilizza esattamente 8 cifre: 0, 1, 2, 3, 4, 5, 6, 7. 

**2. Conversioni tra Base 10 e Base 2**
*   **Da Base 2 a Base 10:** Si moltiplica ciascuna cifra binaria per la potenza di 2 corrispondente alla sua posizione (partendo da destra verso sinistra, da 2<sup>0</sup> in poi) e si sommano i risultati.
    *Esempio didattico:* Convertiamo 1001<sub>2</sub> in decimale.
    1 x 2<sup>3</sup> + 0 x 2<sup>2</sup> + 0 x 2<sup>1</sup> + 1 x 2<sup>0</sup> = 8 + 0 + 0 + 1 = 9<sub>10</sub>.
*   **Da Base 10 a Base 2:** Si utilizza il metodo delle divisioni successive. Si divide il numero decimale per 2, si annota il resto (0 o 1) e si prosegue dividendo il quoziente fino ad arrivare a 0. I resti, letti dall'ultimo al primo, formano il numero binario.
    *Esempio didattico:* Convertiamo 35<sub>10</sub> in binario.
    35 / 2 = 17 (Resto 1).
    17 / 2 = 8 (Resto 1).
    8 / 2 = 4 (Resto 0).
    4 / 2 = 2 (Resto 0).
    2 / 2 = 1 (Resto 0).
    1 / 2 = 0 (Resto 1).
    Leggendo i resti al contrario: 100011<sub>2</sub>.

**3. Conversioni tra Base 10 e Base 16**
*   **Da Base 16 a Base 10:** Il procedimento è identico a quello binario, ma si utilizzano le potenze di 16.
    *Esempio didattico:* Convertiamo 3AF2<sub>16</sub> in decimale.
    Ricordiamo che A=10 e F=15.
    3 x 16<sup>3</sup> + 10 x 16<sup>2</sup> + 15 x 16<sup>1</sup> + 2 x 16<sup>0</sup> = 3 x 4096 + 10 x 256 + 15 x 16 + 2 x 1.
    12288 + 2560 + 240 + 2 = 15090<sub>10</sub>.
*   **Da Base 10 a Base 16:** Si applicano le divisioni successive per 16, convertendo i resti da 10 a 15 nelle corrispondenti lettere da A a F.
    *Esempio didattico:* Convertiamo 16034<sub>10</sub> in esadecimale.
    16034 / 16 = 1002 (Resto 2).
    1002 / 16 = 62 (Resto 10, ovvero A).
    62 / 16 = 3 (Resto 14, ovvero E).
    3 / 16 = 0 (Resto 3).
    Leggendo i resti al contrario otteniamo: 3EA2<sub>16</sub>.
*(Nota: la medesima logica si applica per le conversioni con la base 8, dividendo o moltiplicando per 8)*.

**4. Conversioni dirette tra Base 2 e Base 16 (Metodo dei raggruppamenti)**
La vera potenza del sistema esadecimale sta nel fatto che ogni singola cifra in base 16 corrisponde esattamente a una quaterna (gruppo di 4 bit) in base 2. Questo permette conversioni dirette e istantanee senza passare dalla base 10.
*   **Da Base 2 a Base 16:** Si raggruppano le cifre del numero binario a gruppi di 4, partendo da destra. Si traduce poi ogni singolo gruppo nella sua corrispondente cifra esadecimale. (Se l'ultimo gruppo a sinistra non ha 4 bit, si aggiungono zeri immaginari).
    *Esempio didattico:* Convertiamo 1011110111<sub>2</sub>.
    Raggruppiamo da destra: 10 - 1111 - 0111.
    Aggiungiamo zeri a sinistra per chiarezza: 0010 - 1111 - 0111.
    Traduciamo ogni gruppo: 0010 = 2, 1111 = F, 0111 = 7.
    Il risultato è 2F7<sub>16</sub>.
*   **Da Base 16 a Base 2:** Si esegue l'operazione contraria, "esplodendo" ogni cifra esadecimale nel suo equivalente gruppo di 4 bit.
    *Esempio didattico:* Convertiamo C3B<sub>16</sub>.
    C = 1100, 3 = 0011, B = 1011.
    Unendo i gruppi otteniamo: 110000111011<sub>2</sub>.

*(Nota: Anche la base 8 consente conversioni dirette con la base 2, ma in questo caso si utilizzano gruppi di 3 bit, detti triplette)*.

### Sintesi
*   La conversione verso la **Base 10** si effettua sempre moltiplicando le cifre per le potenze crescenti della base di partenza (2, 8 o 16).
*   La conversione dalla **Base 10** si effettua sempre con le divisioni successive per la base di destinazione (2, 8 o 16), leggendo i resti in ordine inverso.
*   La base esadecimale (16 simboli) impiega le lettere A-F per rappresentare i valori da 10 a 15.
*   La conversione diretta tra **Binario ed Esadecimale** è velocissima: si raggruppano o si "esplodono" i bit in gruppi da 4, senza bisogno di eseguire divisioni o moltiplicazioni complesse.

### Glossario Finale
*   **Sistema Esadecimale:** Sistema posizionale a base 16, che utilizza le cifre 0-9 e le lettere A-F.
*   **Sistema Ottale:** Sistema posizionale a base 8, che impiega esclusivamente i simboli da 0 a 7.
*   **Divisioni successive:** Algoritmo matematico utilizzato per convertire un numero dalla base 10 a un'altra base, calcolando quozienti interi e annotando i resti.
*   **Quaterna (Nibble):** Gruppo composto da 4 bit, utilizzato per la conversione diretta tra il sistema binario e quello esadecimale.
*   **Tripletta:** Gruppo composto da 3 bit, utilizzato per la conversione diretta tra il sistema binario e quello ottale.