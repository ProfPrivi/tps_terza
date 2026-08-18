---
title: "Risorse hardware e software del computer"
---

### Introduzione
Nella lezione precedente abbiamo definito il Sistema Operativo come un "direttore d'orchestra". Ma chi sono i musicisti e come comunicano tra loro? Un computer (o *computer system*) non è un blocco unico, ma un'entità complessa costituita da diverse componenti fortemente interconnesse. In questa lezione analizzeremo i "livelli" che compongono un sistema informatico, scoprendo le differenze tra software applicativo e software di sistema. Vedremo inoltre come utenti e programmatori dialogano con il Sistema Operativo e scopriremo che all'interno del processore esiste una rigida "gerarchia dei privilegi" per garantire la sicurezza dell'intera macchina.

### Sviluppo dell'argomento core

**1. L'architettura del software: a strati e a servizi**
Un computer è formato dall'hardware (i dispositivi fisici che forniscono le risorse elaborative), dal sistema operativo e dal software applicativo. L'interazione tra questi strati si basa su una logica di "servizi":
*   Il **sistema operativo** interagisce direttamente con l'hardware, dal quale ottiene le risorse elaborative.
*   Il **sistema operativo** fornisce a sua volta servizi al software applicativo.
*   Il **software applicativo** riceve i servizi dal sistema operativo e li rende disponibili all'utente finale.

Il software che "gira" sopra il sistema operativo si divide in due grandi categorie:
*   **Software applicativo (in senso stretto):** I programmi usati dagli utenti per lavorare o divertirsi, come fogli elettronici, browser, videogiochi o programmi CAD.
*   **Software di sistema:** Gli applicativi utilizzati dai programmatori per sviluppare altro software, come i compilatori, gli editor e i debugger.
*Eccezione didattica:* Le regole in informatica hanno quasi sempre delle eccezioni. Alcuni software potentissimi, come i DBMS (Sistemi per la gestione di basi di dati), spesso "scavalcano" il sistema operativo e interagiscono direttamente con l'hardware dei dischi per ottimizzare la velocità di lettura e scrittura dei dati.

**2. Il dialogo dei Programmatori: Le Chiamate a Sistema (System Call)**
Come fa un programma scritto da noi a dire al disco rigido di salvare un file? I programmatori non parlano direttamente con l'hardware, ma usano le **chiamate a sistema (system call)**.
Le chiamate a sistema sono richieste di esecuzione di sottoprogrammi del sistema operativo, strutturate in forme come `Call Exec (OperazioneRichiesta, Parametri)`. Vengono anche indicate con il termine **API** (*Application Programming Interface*).
*Esempio didattico:* Quando un programmatore usa un linguaggio ad alto livello (come il C, Java o Python) e scrive istruzioni come `Read(Dato)` o `Write(Dato)`, non sta azionando fisicamente il disco. È il *compilatore* che traduce quelle parole in chiamate di sistema; il sistema operativo riceve la richiesta e provvede al trasferimento effettivo dei dati tra memoria e periferica.

**3. Il dialogo degli Utenti: La Shell e la GUI**
Se i programmatori usano le System Call, come fa l'utente finale a farsi ubbidire? Per l'utente, il computer è semplicemente un "esecutore di applicazioni". Il dialogo avviene tramite un programma specifico chiamato **Shell** (guscio).
La shell è un programma che interagisce con l'utente, riceve i comandi e li trasmette al sistema operativo per l'esecuzione. 
Il funzionamento logico di una shell a riga di comando è ciclico:
1.  Visualizza il **prompt** di sistema (es. `C:\>` in Windows/DOS), che indica che il sistema è pronto a ricevere ordini.
2.  Legge la stringa digitata dall'utente (es. il comando `del file.txt` per cancellare un file).
3.  Analizza il comando: se è scritto male o non esiste, genera un messaggio d'errore.
4.  Se è corretto, lo esegue passando la richiesta al sistema operativo.
5.  Ritorna al punto 1.
Nei moderni personal computer, questo meccanismo è affiancato o sostituito dalle interfacce grafiche (**GUI**), in cui l'inserimento manuale dei comandi è rimpiazzato da icone, mouse e finestre di dialogo (ad esempio, quando si cerca di cancellare un file e appare la finestra "Spostare questo file nel Cestino?").

**4. Il Nucleo (Kernel) e i poteri della CPU**
Mentre noi usiamo Word o giochiamo a un videogioco, dove si trova il sistema operativo? 
Il sistema operativo è un software "sempre in esecuzione": una sua parte fondamentale deve essere costantemente presente nella memoria centrale (RAM) per gestire la macchina. Questa parte sempre residente e attiva prende il nome di **Nucleo** o **Kernel**.

Ma cosa impedisce a un virus o a un programma scritto male di distruggere l'hardware o cancellare il sistema operativo stesso? La risposta risiede in una geniale divisione dei poteri all'interno del processore (CPU). La CPU può funzionare in due modalità distinte:
*   **Modalità Utente:** È la modalità limitata in cui vengono eseguiti i normali programmi applicativi (e persino i compilatori). Per ragioni di sicurezza, molte istruzioni macchina pericolose sono disabilitate.
*   **Modalità Riservata (o Modalità Supervisore / Kernel Mode):** È la modalità con "poteri assoluti". In questo stato, il processore può eseguire tutto il set di istruzioni macchina, comprese quelle in grado di bloccare il computer o sovrascrivere l'intera memoria. Solo il Sistema Operativo ha il diritto di essere eseguito in questa modalità.

### Sintesi
*   Il software di un computer si divide in **Software Applicativo** (per gli utenti) e **Software di Sistema** (per lo sviluppo), entrambi eseguiti sopra il Sistema Operativo.
*   I programmatori interagiscono con le risorse del computer tramite le **System Call** (o API), demandando al sistema operativo il lavoro fisico sull'hardware.
*   Gli utenti interagiscono con il sistema tramite un programma traduttore detto **Shell** (che può essere testuale, tramite il *Prompt*, o grafica, detta *GUI*).
*   La parte del sistema operativo che risiede perennemente in memoria RAM si chiama **Kernel** (Nucleo).
*   Per sicurezza, l'hardware impone due livelli di esecuzione: i programmi girano in **Modalità Utente** (limitata), mentre il Sistema Operativo gode dei privilegi totali della **Modalità Riservata** (o Supervisore).

### Glossario Finale
*   **Computer System:** L'entità complessa formata dalla stretta collaborazione di hardware, sistema operativo e software applicativo.
*   **API (Application Programming Interface) / System Call:** Le interfacce e i comandi standardizzati che i programmatori utilizzano all'interno del codice per richiedere servizi (es. lettura/scrittura su disco) al Sistema Operativo.
*   **Shell:** Programma che si interpone tra l'utente e il sistema operativo, con lo scopo di interpretare i comandi impartiti dall'utente e tradurli in azioni del sistema.
*   **Prompt:** Segnale visivo (es. un cursore lampeggiante accanto a un percorso, come `C:\>`) mostrato dalla shell testuale per indicare che il sistema è in attesa di un comando.
*   **Kernel (Nucleo):** La porzione fondamentale e vitale del sistema operativo che viene caricata in memoria all'avvio e vi risiede permanentemente per controllare l'hardware e i processi.
*   **Modalità Riservata (Supervisore):** Stato di funzionamento della CPU che permette l'esecuzione illimitata di tutte le istruzioni macchina. È un privilegio concesso esclusivamente al sistema operativo per prevenire danni accidentali o dolosi da parte di altri programmi.