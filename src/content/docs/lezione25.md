---
title: "Sistemi time sharing e sistemi basati sulle priorità"
---

### Introduzione
Nella lezione precedente abbiamo visto come la multiprogrammazione consenta ai programmi di alternarsi nell'uso della CPU, sfruttando i momenti in cui un processo si ferma per compiere operazioni di lettura o scrittura dei dati. Tuttavia, sorge un problema critico: cosa succederebbe se un programma dovesse eseguire calcoli matematici complessi per minuti interi, senza mai fermarsi per un'operazione di Input/Output? Gli altri programmi rimarrebbero drammaticamente bloccati in attesa. In questa lezione scopriremo come i Sistemi Operativi hanno risolto questo ostacolo, introducendo la capacità di interrompere forzatamente i processi in esecuzione per garantire equità e tempi di risposta rapidi tramite le priorità e il "Time Sharing".

### Sviluppo dell'argomento core

**1. Il problema: Programmi CPU bound e I/O bound**
Per capire perché il sistema operativo debba talvolta forzare le interruzioni, dobbiamo dividere i programmi in due categorie comportamentali:
*   **Programmi CPU bound:** Sono software che eseguono operazioni di I/O per pochissimi millisecondi, per poi utilizzare la CPU in modo intensivo per molti minuti (ad esempio per eseguire calcoli scientifici o elaborazioni complesse).
*   **Programmi I/O bound:** Sono software che, al contrario, occupano pochissimo la CPU e si interrompono molto spesso per eseguire operazioni di I/O a terminale, dialogando in continuazione con video e tastiera.

Nella multiprogrammazione di base, un programma prende possesso della CPU e continua l'esecuzione finché non necessita di un'operazione di lettura o scrittura. Questo approccio, però, privilegia eccessivamente i programmi *CPU bound*, i quali rischiano di monopolizzare il processore lasciando inattivi per lunghissimi minuti i programmi *I/O bound*. Poiché questi ultimi sono spesso programmi interattivi (che richiedono all'utente di inserire comandi e aspettare un risultato visivo), un'attesa di svariati minuti tra l'esecuzione di un comando e il successivo è una situazione inaccettabile. 
Per evitare questo monopolio, il sistema operativo deve poter interrompere forzatamente l'esecuzione in corso per mandare in esecuzione un altro programma.

**2. Multiprogrammazione con priorità**
Una prima strategia per gestire le interruzioni si basa sull'assegnazione di una specifica **priorità** a ciascun programma. Questa priorità è un valore che misura l'importanza o l'urgenza dell'esecuzione di quel compito. 
In questo scenario, i programmi vengono inviati alla CPU rigorosamente in ordine di priorità. Il sistema operativo fa in modo che in esecuzione ci sia sempre il programma con la priorità più elevata disponibile.
*Esempio didattico:* Immaginiamo che il computer stia elaborando un programma a bassa priorità. Se un utente manda improvvisamente in esecuzione un nuovo programma con una priorità superiore, il sistema operativo interviene: controlla le priorità, interrompe il programma corrente e fa partire la nuova richiesta più urgente. Quando il programma ad alta priorità si fermerà per effettuare un'operazione di I/O, il sistema sceglierà il prossimo programma da eseguire sempre in base alla priorità.

**3. Multiprogrammazione in Time Sharing (Suddivisione di tempo)**
Per soddisfare appieno le esigenze degli utenti interattivi (come un programmatore che digita comandi sulla tastiera e desidera tempi di risposta brevissimi), è stata introdotta la multiprogrammazione in **time sharing**.
In questa modalità "democratica", i programmi sono considerati tutti ugualmente importanti. Invece di farli competere in base all'urgenza, essi vengono eseguiti in maniera ciclica, concedendo a ciascuno un periodo di tempo limitato e predefinito per operare.
*   **Il Time slice (o Quantum temporale):** È l'intervallo di tempo massimo concesso dal sistema operativo a un programma per procedere nella sua esecuzione ininterrotta.
*   **Esecuzione Round Robin:** Se un programma non termina il proprio lavoro o non si ferma per un'operazione di I/O prima che il suo *time slice* scada, il sistema operativo lo interrompe brutalmente. Il programma interrotto viene spostato alla fine della coda di attesa, e il sistema manda in esecuzione il primo programma in cima alla coda. Questa tecnica di intervallare ciclicamente l'esecuzione prende il nome di esecuzione *Round Robin*.

I sistemi operativi più recenti fondono questi due approcci: i programmi vengono eseguiti in base alla loro priorità, ma i programmi che possiedono la stessa priorità si alternano tra loro in *time sharing*. Inoltre, il sistema operativo tiene conto dei comportamenti dei programmi e ne modifica dinamicamente la priorità in corso d'esecuzione per ottimizzare le prestazioni complessive.

**4. Oltre il singolo processore: l'architettura SMP**
Nei sistemi attuali, ai sistemi operativi è richiesta la capacità di sovrintendere il funzionamento di computer nei quali sono presenti fisicamente più processori.
Oggi si è affermata l'architettura **SMP** (*Symmetric Multi Processor*, multi processore simmetrico). In un sistema SMP ci sono molte CPU che accedono alla medesima memoria centrale. Nessun processore è "superiore" agli altri (abbandonando la vecchia architettura *master-slave*, in cui un solo processore gestiva l'OS distribuendo i compiti). In questa architettura simmetrica, i programmi in esecuzione, compresi i processi del sistema operativo stesso, possono essere eseguiti indifferentemente su uno qualsiasi dei processori disponibili. In questi sistemi, il parallelismo nell'esecuzione dei programmi diventa reale e fisico, non più solo simulato dall'alternanza temporale.

### Sintesi
*   I software si dividono in programmi **CPU bound** (che eseguono calcoli intensivi) e programmi **I/O bound** (che interagiscono frequentemente con l'utente e le periferiche).
*   Per evitare che un programma CPU bound blocchi il computer monopolizzandolo, il sistema operativo deve forzare le interruzioni.
*   Nella **multiprogrammazione con priorità**, la CPU viene assegnata al programma ritenuto più urgente, interrompendo quelli con priorità minore.
*   Nella **multiprogrammazione in time sharing**, il tempo della CPU viene diviso in intervalli fissi detti *time slice* (o quantum di tempo). Scaduto l'intervallo, il programma si accoda in maniera circolare (tecnica del *Round Robin*), garantendo l'interattività all'utente.
*   L'architettura **SMP** (Symmetric Multi Processor) permette a più CPU con pari poteri di condividere la memoria ed eseguire i programmi in parallelo reale.

### Glossario Finale
*   **CPU bound:** Programma la cui attività principale consiste nello svolgere complessi calcoli matematici, utilizzando la CPU per molto tempo e le periferiche di I/O solo marginalmente.
*   **I/O bound:** Programma, tipicamente interattivo, che occupa poco la CPU ma si interrompe frequentemente per effettuare operazioni di Input/Output a terminale.
*   **Priorità:** Valore logico assegnato a un programma per misurarne l'importanza e determinarne l'urgenza di esecuzione rispetto agli altri processi.
*   **Time sharing (Suddivisione di tempo):** Architettura di gestione che alterna ciclicamente l'uso del processore fra i vari programmi per evitare lunghi tempi di attesa agli utenti interattivi.
*   **Time slice (Quantum di tempo):** Intervallo esatto di tempo limite concesso dal sistema operativo a un programma per l'uso esclusivo della CPU.
*   **Round Robin:** Algoritmo di esecuzione circolare in cui i processi si alternano; il programma il cui *time slice* scade viene rimesso in fondo alla coda di attesa.
*   **SMP (Symmetric Multi Processor):** Configurazione hardware in cui tutti i processori hanno lo stesso ruolo e condividono la stessa memoria centrale, potendo eseguire qualsiasi programma o componente dell'OS.