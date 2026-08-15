---
title: "Dai linguaggi naturali all'elaborazione dei dati"
---

### Introduzione
Nella lezione precedente abbiamo visto come l'informazione necessiti di un canale e di segnali per viaggiare tra un emittente e un ricevente. Tuttavia, per far sì che la comunicazione sia davvero efficace, soprattutto quando a comunicare sono un uomo e una macchina (o due macchine tra loro), è fondamentale che il linguaggio utilizzato non dia adito a doppie o dubbie interpretazioni. In questa lezione esploreremo il passaggio dai linguaggi che usiamo tutti i giorni a quelli rigorosi usati nell'informatica, per poi capire come le macchine utilizzino questi linguaggi per trasformare semplici dati in informazioni utili.

### Sviluppo dell'argomento core

**1. Linguaggi Naturali e l'ostacolo dell'Ambiguità**
I linguaggi usati per la trasmissione delle informazioni si distinguono in naturali e formali. I linguaggi naturali sono quelli che gli esseri umani usano comunemente per comunicare (come l'italiano o l'inglese). Se da un lato questi linguaggi possiedono una notevole ricchezza espressiva, dall'altro danno spesso origine ad ambiguità. 
*Esempio didattico:* Consideriamo la frase "La giovane mente". Questa stringa di testo può essere interpretata in due modi completamente diversi:
*   C'è una persona giovane di sesso femminile che non racconta la verità (verbo mentire).
*   C'è una persona la cui mente (sostantivo) è giovane.
Quando comunicano due persone, l'ambiguità si risolve facilmente chiedendo delucidazioni. Ma se il ricevente è un computer, un'ambiguità del genere bloccherebbe il sistema o porterebbe a errori critici.

**2. I Linguaggi Formali e le loro Regole**
Per risolvere il problema della comunicazione con le macchine, l'uomo ha costruito i linguaggi formali. Si tratta di linguaggi basati su simboli e regole ben precise, privi di eccezioni e di ambiguità, solitamente dedicati a scopi precisi e circoscritti (come la matematica, l'algebra o la logica). 
Pur essendo diversi tra loro, tutti i linguaggi formali condividono alcune caratteristiche fondamentali:
*   **Alfabeto:** È l'insieme dei simboli convenzionali (caratteri) su cui è costruito il linguaggio. Ad esempio, l'alfabeto dell'aritmetica usa le cifre da 0 a 9 e i segni delle operazioni (+, -, x, :, =).
*   **Stringa (o Parola):** È una qualsiasi successione di caratteri dell'alfabeto. Il numero "724" o l'espressione "3 x 4" sono stringhe valide dell'aritmetica.
*   **Sintassi:** È l'insieme delle regole necessarie per costruire una frase che abbia significato. In aritmetica, una regola sintattica stabilisce che il simbolo dell'operazione deve stare *tra* i due numeri: la stringa "3 x 4" è corretta, mentre "x 3 4" non ha significato.
*   **Semantica:** Rappresenta l'insieme dei significati che devono essere attribuiti alle stringhe. Una frase può essere sintatticamente corretta ma non avere senso semantico, come "3 - 10 =" se ci limitiamo all'aritmetica dei soli numeri naturali positivi.

**3. Dati ed Elaborazione: Il cuore dell'Informatica**
Una volta definito un linguaggio formale senza ambiguità, i computer possono usarlo per compiere il loro lavoro principale: elaborare.
*Esempio didattico (Il Bancomat):* Immaginiamo un cliente allo sportello Bancomat. Inserisce la carta, digita il codice segreto, richiede il saldo, preleva una somma e chiede di nuovo il saldo. Il computer della banca confronta il codice, controlla la disponibilità, eroga le banconote e aggiorna il saldo sottraendo la somma pagata.

In questa operazione emergono due concetti essenziali:
*   **Dati:** Sono le conoscenze elementari che caratterizzano una situazione reale (il codice segreto digitato, la somma richiesta). Sono gli elementi costitutivi dell'informazione.
*   **Informazione:** È un insieme di dati elaborati e presentati sulla base dell'esigenza di utilizzo pratico (il saldo finale letto sul monitor).

Il trattamento dei dati per ottenere le informazioni si chiama **elaborazione**. Ogni elaborazione segue un ciclo logico inflessibile:
1.  **Input:** I dati di ingresso (es. la carta e il codice segreto).
2.  **Elaborazione:** Le operazioni compiute sui dati (confronti, calcoli matematici).
3.  **Output:** I dati in uscita o risultati (es. l'erogazione del contante e lo scontrino).

### Sintesi
*   I linguaggi naturali sono ricchi ma ambigui e inadatti a comunicare con le macchine.
*   I linguaggi formali garantiscono comunicazioni inequivocabili basandosi su regole ferree: Alfabeto, Sintassi e Semantica.
*   I dati sono gli elementi crudi, mentre l'informazione è il risultato utile finale.
*   Il processo informatico di base consiste nel ricevere dati in ingresso (Input), trattarli tramite calcoli o logica (Elaborazione) e restituire un risultato (Output).

### Glossario Finale
*   **Linguaggio naturale:** Linguaggio comunemente usato dagli esseri umani per comunicare, ricco di sfumature ma potenzialmente ambiguo.
*   **Linguaggio formale:** Linguaggio costruito artificialmente su simboli e regole rigorose, privo di eccezioni e ambiguità.
*   **Alfabeto:** L'insieme di simboli convenzionali (caratteri) di un linguaggio.
*   **Sintassi:** Le regole che determinano come i caratteri devono essere combinati per formare stringhe corrette.
*   **Semantica:** L'insieme dei significati attribuiti alle parole e alle frasi di un linguaggio.
*   **Dato:** Conoscenza elementare che descrive un aspetto di una situazione reale, utile per elaborazioni future.
*   **Elaborazione:** Il trattamento sistematico dei dati per ottenere informazioni strutturate.
*   **Input / Output:** Rispettivamente, i dati immessi nel sistema per essere elaborati e i risultati prodotti dall'elaborazione.