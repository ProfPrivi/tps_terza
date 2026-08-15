---
title: "La teoria della comunicazione e le interfacce utente"
---

### Introduzione
Nei capitoli precedenti abbiamo definito l'informazione e compreso come i computer elaborino i dati attraverso linguaggi formali rigorosi. Tuttavia, l'informatica non si limita all'elaborazione isolata dei dati: il suo scopo finale è comunicare il risultato agli utenti o ad altri sistemi. La teoria della comunicazione si occupa proprio di questo: studia la trasmissione di segnali tra sistemi aventi la stessa natura (tra esseri umani o tra computer) o natura differente (tra un sistema informatico e un essere umano). In questa lezione analizzeremo gli elementi necessari affinché questa comunicazione non fallisca e scopriremo come il software si interfaccia con noi.

### Sviluppo dell'argomento core

**1. Gli elementi fondamentali della comunicazione**
Nella teoria della comunicazione, non basta semplicemente inviare un dato affinché la trasmissione vada a buon fine. Gli elementi base sono sempre tre:
*   Il **mittente**, ovvero colui che invia il messaggio.
*   Il **destinatario** (o ricevente), ovvero colui che riceve il messaggio.
*   Il **messaggio** stesso che viene inviato.

Tuttavia, la sola presenza di questi tre elementi non garantisce il successo. Per una comunicazione corretta, devono essere ben definiti anche:
*   Un **contesto**: Tutto ciò che fa da contorno alla comunicazione, come il luogo, le circostanze o gli eventi condivisi.
*   Un **codice**: Un sistema di regole o una lingua comune sia al mittente che al destinatario.
*   Un **contatto (o mezzo trasmissivo)**: La connessione fisica, verbale o psicologica che permette di stabilire la comunicazione.

*Esempio didattico:* Immaginiamo che Alice domandi a Bob: "Allora, ti è piaciuto il film?".
In questo scenario, Alice è il mittente, Bob è il destinatario, la frase pronunciata è il messaggio, e il contatto avviene utilizzando la voce. Il codice è la lingua italiana. Il contesto è il film di cui stanno parlando. Se mancasse uno solo di questi elementi (Bob è sordo, Bob non parla italiano, oppure Bob non sa di quale film si stia discutendo), la comunicazione fallirebbe irreparabilmente.

**2. La comunicazione Uomo-Macchina e le Interfacce**
Quando utilizziamo un programma, stiamo di fatto partecipando a una comunicazione tra un essere umano e un sistema informatico. Un programma può comunicare i propri messaggi in molti modi, ad esempio visualizzando un testo, emettendo un suono o tramite immagini. 
Il "luogo" virtuale in cui avviene questo scambio di messaggi si chiama *interfaccia*. I software si dividono storicamente in due grandi categorie di interfacce:

*   **Interfaccia testuale:** È la forma più essenziale. La comunicazione avviene esclusivamente tramite testo, e l'utente comunica con la macchina digitando comandi unicamente attraverso una tastiera.
*   **Interfaccia grafica (GUI - Graphical User Interface):** È la modalità oggi più diffusa. I programmi utilizzano elementi visivi come finestre, icone, mouse e puntatori per interagire con l'utente. Le interfacce grafiche possono coinvolgere più sensi: un videogioco unisce immagini e suoni, mentre i dispositivi moderni sono sensibili persino al tocco delle dita (touch).

**3. L'importanza del Testing delle interfacce**
Quando i programmatori creano un software dotato di interfaccia grafica, non devono solo assicurarsi che faccia i calcoli giusti (l'elaborazione), ma devono anche garantire che la comunicazione con l'utente sia semplice e immediata. 
Per questo motivo, le interfacce vengono sottoposte a rigorosi collaudi tramite sistemi automatici chiamati **GUI testing tools**. Questi strumenti verificano il corretto funzionamento dell'interfaccia studiando i possibili comportamenti dell'utente e le relative risposte del programma, per assicurarsi che la comunicazione uomo-macchina sia sempre fluida.

### Sintesi
*   La comunicazione avviene non solo tra macchine o esseri umani, ma anche tra uomo e macchina, studiata dalla teoria della comunicazione.
*   Affinché una trasmissione abbia successo, oltre a mittente, destinatario e messaggio, servono un contesto, un codice comune e un canale di contatto.
*   L'interazione uomo-macchina è mediata dal software tramite interfacce che possono essere testuali (solo tastiera e testo) o grafiche (finestre, icone, mouse).
*   Le interfacce grafiche (GUI) devono essere testate (GUI testing tools) per assicurare che la comunicazione sia chiara e semplice per l'utente finale.

### Glossario Finale
*   **Mittente:** L'entità (persona o sistema) che invia il messaggio.
*   **Destinatario:** L'entità che riceve il messaggio inviato dal mittente.
*   **Contesto:** L'insieme delle circostanze, degli eventi o degli argomenti che fanno da sfondo e danno senso alla comunicazione.
*   **Codice:** La lingua o l'insieme di regole comuni che permettono a mittente e destinatario di capirsi.
*   **Contatto:** Il mezzo trasmissivo o la connessione che permette alla comunicazione di avvenire fisicamente o verbalmente.
*   **Interfaccia testuale:** Modalità di comunicazione software basata esclusivamente su input e output di tipo testuale.
*   **GUI (Graphical User Interface):** Interfaccia grafica che facilita la comunicazione tra utente e software mediante l'uso di finestre, icone e puntatori.
*   **GUI testing tools:** Strumenti automatici utilizzati dai programmatori per collaudare e verificare il comportamento e la semplicità delle interfacce grafiche.