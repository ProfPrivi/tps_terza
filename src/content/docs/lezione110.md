---
title: "La codifica dei testi e dei caratteri"
---

### Introduzione
Nelle lezioni precedenti abbiamo compreso come un computer utilizzi i bit e il sistema binario per eseguire calcoli matematici e memorizzare numeri positivi, negativi e con la virgola. Tuttavia, quando usiamo uno smartphone o un PC, per la maggior parte del tempo scriviamo testi, inviamo e-mail o leggiamo pagine Web. Come fa il computer a capire che stiamo scrivendo la lettera "A" o il simbolo della chiocciola "@" se riconosce solo gli stati elettrici 0 e 1? In questa lezione scopriremo il concetto di "codifica", partendo dallo storico codice ASCII fino ad arrivare allo standard Unicode, che ha permesso di abbattere ogni barriera linguistica nel mondo digitale.

### Sviluppo dell'argomento core

**1. Il concetto di Codifica Alfanumerica**
Tutte le informazioni non numeriche (i testi) sono esprimibili mediante una combinazione di lettere, cifre o caratteri speciali (punteggiatura). Affinché un elaboratore riesca a riconoscere e a trattare queste informazioni, deve essere stabilita una convenzione rigorosa.
Questa convenzione associa a ogni singolo carattere (una lettera o un simbolo) una specifica configurazione di bit. Questa associazione si chiama **codifica**.
Sappiamo che con un singolo byte (8 bit) abbiamo a disposizione 256 combinazioni possibili (da 00000000 a 11111111, ovvero da 0 a 255 in formato decimale). Pertanto, utilizzando un solo byte, un computer può "imparare" a riconoscere fino a 256 caratteri diversi.

**2. Il Codice ASCII e l'ASCII Esteso**
La codifica di base storica per i caratteri di un testo si chiama **ASCII** (*American Standard Code for Information Interchange*). 
Nella sua versione originale (ASCII standard), questo codice utilizzava solo **7 bit** per codificare un carattere. Con 7 bit si possono ottenere 128 combinazioni (2<sup>7</sup>), sufficienti per l'alfabeto inglese e i simboli base.
*Esempio didattico:* Nella codifica ASCII, la sequenza di bit `0110000` corrisponde al carattere della cifra zero ("0"), mentre `1110001` corrisponde alla lettera minuscola "q".

La struttura del codice ASCII standard è divisa in fasce ben precise:
*   **Caratteri non stampabili (da 0 a 31, e il 127):** Hanno un significato di controllo per il sistema (es. spazio vuoto, fine del testo, segnale acustico, Invio, Cancella, Esc).
*   **Segni di punteggiatura (da 32 a 47 e altri intervalli):** Spazio, punto esclamativo, virgola, ecc.
*   **Cifre numeriche (da 48 a 57):** I caratteri testuali dei numeri da 0 a 9.
*   **Lettere maiuscole (da 65 a 90):** Dall'alfabeto "A" alla "Z".
*   **Lettere minuscole (da 97 a 122):** Dall'alfabeto "a" alla "z".

Poiché 128 caratteri non erano sufficienti per le lingue europee (che necessitano di lettere accentate come à, è, ì), il sistema è stato esteso a **8 bit**, raddoppiando il numero di caratteri disponibili a 256 (2<sup>8</sup>). Questa versione è nota come **ASCII esteso**.

**3. La rivoluzione di Unicode**
Con l'avvento del Web a livello globale, nemmeno i 256 caratteri dell'ASCII esteso bastavano più. Come potevamo visualizzare il cirillico, gli ideogrammi cinesi o i caratteri arabi?
Nel 1991 è stata sviluppata una nuova codifica globale chiamata **Unicode** (oggi lo standard di fatto per le pagine Web e i documenti elettronici). L'obiettivo di Unicode è includere tutti i caratteri, con tutte le variazioni possibili, di tutte le lingue del mondo, compresi i simboli matematici e scientifici.

Per mantenere la compatibilità con il passato, i primissimi caratteri di Unicode sono rimasti identici a quelli del codice ASCII. Tuttavia, per ospitare migliaia di nuovi alfabeti, Unicode ha iniziato a utilizzare **16 bit** (potendo codificare 65.536 caratteri), per poi espandersi a **32 bit**, superando il milione di caratteri disponibili.
Per ottimizzare lo spazio e non sprecare memoria, sono nate delle versioni ridotte di questo codice (come **UTF-8**, **UTF-16** e **UTF-32**) che gestiscono i caratteri frequenti in modo più compatto.

**4. L'impatto sulla Memoria e un Trucco di Tastiera**
Aumentare i bit per carattere permette di avere più alfabeti, ma ha un "costo" in termini di memoria occupata. 
*Esempio didattico:* Prendiamo la stringa di testo `"Ciao, mondo!"`. Questa stringa contiene 12 caratteri (incluse la virgola, lo spazio e il punto esclamativo).
*   Se usiamo il vecchio codice **ASCII a 7 bit**, occuperà: 12 x 7 = **84 bit** in memoria.
*   Se usiamo il formato globale **UTF-32**, occuperà: 12 x 32 = **384 bit** in memoria.

*Tip pratico:* I sistemi operativi permettono di digitare un carattere speciale conoscendo il suo codice numerico. Ad esempio, se si converte in decimale il codice Unicode Esadecimale `0683` (che corrisponde a un carattere arabo), si ottiene `1667`. Su Windows, tenendo premuto il tasto **Alt** e digitando **1667** sul tastierino numerico, il computer genererà quel preciso carattere. Un altro esempio è la digitazione di `20AC` seguito da **ALT+X** nei programmi Office, che genera istantaneamente il simbolo dell'Euro (€).

### Sintesi
*   La codifica alfanumerica è la convenzione che associa ogni lettera o simbolo a una specifica sequenza di bit.
*   Il codice ASCII standard utilizza 7 bit (128 caratteri) per rappresentare l'alfabeto base, la punteggiatura e i comandi di controllo non stampabili.
*   L'ASCII esteso utilizza 8 bit (256 caratteri) per includere le lettere accentate tipiche delle lingue europee.
*   Lo standard Unicode è nato per superare le barriere linguistiche. Utilizzando fino a 32 bit, permette di codificare oltre un milione di caratteri di tutte le lingue mondiali.
*   Maggiore è il numero di bit usati dalla codifica (es. UTF-32 rispetto ad ASCII), maggiore sarà lo spazio fisico (il "peso") occupato dal testo in memoria.

### Glossario Finale
*   **Codifica:** Associazione standardizzata tra una combinazione di bit e un determinato simbolo o carattere.
*   **ASCII (American Standard Code for Information Interchange):** Codifica di base a 7 bit che rappresenta i 128 caratteri fondamentali.
*   **Caratteri non stampabili:** Caratteri del codice ASCII (come lo Spazio, l'Invio o il Delete) che non producono un segno grafico ma forniscono un comando di gestione o formattazione del testo.
*   **Unicode:** Standard globale di codifica a 16 o 32 bit capace di rappresentare i caratteri di tutte le lingue del mondo e i simboli scientifici.
*   **UTF-8 / UTF-16 / UTF-32:** Formati di codifica della famiglia Unicode che permettono di scrivere i caratteri ottimizzando lo spazio in memoria a seconda della necessità.