---
title: "I Numeri Reali: Virgola Fissa, Virgola Mobile e Normalizzazione"
---

### Introduzione
Nelle lezioni precedenti abbiamo analizzato in che modo un elaboratore gestisce e memorizza i numeri interi. Tuttavia, il mondo reale e i calcoli informatici richiedono la capacità di elaborare anche grandezze non intere (si pensi al calcolo di uno stipendio, alla misura di una temperatura o a calcoli fisici complessi). In questa lezione scopriremo come l'informatica affronta il problema di memorizzare i numeri reali (quelli "con la virgola") in modo efficiente, introducendo il concetto di "virgola mobile" e la tecnica della "normalizzazione", essenziali per comprimere numeri grandissimi o estremamente microscopici all'interno della memoria limitata di un computer.

### Sviluppo dell'argomento core

**1. Virgola Fissa vs. Virgola Mobile**
La rappresentazione dei numeri reali, ovvero non interi, all'interno di un sistema informatico o matematico può essere fatta usando due metodi principali:
*   **La virgola fissa (fixed point):** I numeri vengono scritti per esteso, mantenendo fissa la posizione del punto decimale. *(Attenzione: in informatica, per scrivere i numeri decimali si usa sempre il punto al posto della virgola, secondo la notazione anglosassone)*. Esempi di questa notazione sono: 1.5, 0.00123 oppure 12.564.
*   **La virgola mobile (floating point):** È un metodo molto più compatto, in cui il punto decimale "scivola" per adattarsi alla grandezza del numero. Esempi di questa notazione sono: 3E-4, 12E+18 oppure 1.47E-3.

**2. La Notazione Scientifica o Esponenziale**
Il metodo della virgola mobile viene chiamato anche "notazione scientifica" o "rappresentazione esponenziale". Questo tipo di rappresentazione viene utilizzato solitamente nei calcoli scientifici, quando si devono trattare numeri molto grandi o molto piccoli, permettendo di scriverli in una forma compatta e facilmente leggibile.
In questa notazione, il numero è composto da due parti separate dalla lettera **E**:
*   **Mantissa:** È il numero che precede la lettera E.
*   **Esponente:** È il numero che segue la lettera E, e indica la potenza a cui elevare la base 10.

In pratica, la lettera E sta al posto di "10 elevato a". La potenza di 10 va moltiplicata per la mantissa.
*Esempio didattico:* La scritta 7.2342 E-5 significa 7.2342 x 10<sup>-5</sup> = 0.000072342.
Questa sintesi è straordinaria. Se avessimo un numero lunghissimo come 0.000000000000003, potremmo scriverlo molto più semplicemente nella forma 3 E-15. Allo stesso modo, il numero 123000000000000 può essere scritto in modo compatto come 1.23 E+14.

**3. La Normalizzazione in Base 10**
Per evitare ambiguità (dato che un numero si potrebbe scrivere in tanti modi diversi, spostando la virgola e cambiando l'esponente), i matematici e gli informatici utilizzano la **notazione esponenziale normalizzata**.
In questa rappresentazione rigorosa, la mantissa deve sempre essere un numero che, in valore assoluto, sia maggiore o uguale a 1 e minore di 10.
*Esempio didattico:* Consideriamo il numero 125.74 E+14. Esso non è normalizzato perché 125.74 è maggiore di 10. Per normalizzarlo, spostiamo la virgola di due posti verso sinistra, aumentando di conseguenza l'esponente di 2: il risultato normalizzato sarà 1.2574 E+16.

**4. La Trasposizione nel Mondo Binario: Normalizzare in Base 2**
Tutte queste regole devono essere tradotte in binario, poiché occorre ricordare che i numeri all'interno del computer sono rappresentati con sequenze di bit. 
Così come nel sistema decimale (base 10) la mantissa deve essere compresa tra 1 e 10, nel caso di valori numerici in base 2 la rappresentazione in virgola mobile normalizzata prevede che il numero sia rappresentato con mantissa maggiore o uguale a 1 e minore di 2. 

Questo porta a una conseguenza formidabile e peculiare del mondo informatico: in base 2, se la parte intera deve essere maggiore o uguale a 1 ma strettamente minore di 2, **la parte intera varrà sempre e solo 1**!
*Esempio pratico:* Immaginiamo di avere il dato binario 1001.011<sub>2</sub> x 2<sup>-5</sup>.
Per normalizzarlo, dobbiamo spostare il punto di separazione tra la parte intera e la parte frazionaria di 3 posizioni verso sinistra, modificando in corrispondenza l'esponente di 2.
Diventerà: 1.001011<sub>2</sub> x 2<sup>-2</sup>.
La forma generale e universale di un numero binario normalizzato in virgola mobile sarà sempre: **1.bbbb<sub>2</sub> x 2<sup>n</sup>** (dove "b" rappresenta i restanti bit della parte frazionaria).

### Sintesi
*   I numeri reali possono essere espressi in virgola fissa (*fixed point*, con la virgola che resta ferma) o in virgola mobile (*floating point*, ideale per gestire numeri molto piccoli o giganteschi).
*   Nella virgola mobile o notazione scientifica, il numero è scisso in una **mantissa** (il valore) e un **esponente** (la potenza della base).
*   Normalizzare un numero decimale significa spostare la virgola in modo che la mantissa sia compresa tra 1 e 9,99... (cioè maggiore o uguale a 1 e minore di 10).
*   Nel sistema binario, normalizzare significa far scorrere il punto decimale in modo che la mantissa sia compresa tra 1 e 2. Pertanto, la parte intera del numero binario sarà sempre e soltanto 1.

### Glossario Finale
*   **Fixed point (Virgola fissa):** Notazione in cui la posizione del punto decimale è rigida, usata generalmente per esprimere numeri non esageratamente grandi o piccoli.
*   **Floating point (Virgola mobile):** Notazione compatta che adotta una mantissa e un esponente, consentendo al punto decimale di scorrere per rappresentare in modo agile ordini di grandezza estremi.
*   **Mantissa:** Nei numeri in virgola mobile, è la porzione di cifre che precede l'esponente e definisce le cifre significative del valore.
*   **Esponente:** Il valore che indica la potenza (di 10 in base decimale, di 2 in base binaria) a cui deve essere moltiplicata la mantissa per ottenere il numero reale.
*   **Normalizzazione:** Regola matematica per standardizzare la scrittura in virgola mobile, imponendo che la parte intera della mantissa sia costituita da un'unica cifra significativa diversa da zero.