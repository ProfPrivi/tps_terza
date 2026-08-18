---
title: "Le origini e le caratteristiche dei primi Sistemi Operativi"
---
 
### Introduzione
Oggi diamo per scontato che accendendo un computer compaia un'interfaccia grafica pronta a rispondere ai nostri comandi. Ma come funzionavano i primissimi calcolatori? Negli anni '40 e all'inizio degli anni '50, i sistemi operativi semplicemente non esistevano. Questa lezione è un tuffo nel passato dell'informatica, indispensabile per comprendere quale sia stato il "problema" che ha spinto gli ingegneri a inventare il software di base. Scopriremo l'era delle schede perforate, i lunghissimi tempi di caricamento manuale e l'introduzione dei primissimi e rudimentali "Monitor" che hanno dato vita all'elaborazione a lotti (Batch).

### Sviluppo dell'argomento core

**1. L'era pre-Sistema Operativo e la tecnica dell'"Open Shop"**
Nei primissimi calcolatori, nella memoria centrale era presente solo il codice macchina e i dati dell'unico programma in esecuzione. I programmatori dovevano interagire direttamente con l'hardware e scrivevano i programmi in linguaggio macchina, inserendoli nella memoria specificando gli indirizzi tramite interruttori fisici. 
L'assegnazione del computer avveniva con una tecnica chiamata **open shop** (negozio aperto). 
*Esempio didattico:* Funzionava in modo paragonabile alla prenotazione dei computer in un'aula didattica: un utente prenotava la macchina dalle 15:00 alle 16:00, e in quel periodo il computer era a sua completa e singola disposizione per caricare i programmi, eseguirli e, in caso di errore, modificare tutto a mano.
Il problema di questo approccio era il tempo: le macchine erano costosissime, ma venivano altamente sotto utilizzate a causa della grande quantità di tempo necessaria per la preparazione manuale (il *setup*) da parte degli operatori umani.

**2. L'Assembler e le Schede Perforate**
Per aumentare la produttività vennero introdotti i linguaggi macchina simbolici (linguaggi assembler). Questo migliorò la scrittura del codice, ma il caricamento rimase un processo lungo e meccanico. Per eseguire un programma, il programmatore doveva:
*   Caricare in memoria il programma traduttore (l'assemblatore) tramite un pacco di schede perforate.
*   Inserire le schede del proprio codice sorgente affinché la macchina lo traducesse in codice binario, producendo in uscita un nuovo pacco di schede perforate con il programma oggetto.
*   Caricare questo nuovo pacco di schede, unito alle schede contenenti i dati, e finalmente lanciare l'esecuzione.
La maggior parte del tempo era sprecata in operazioni manuali durante le quali la CPU rimaneva inattiva.

**3. La nascita dei Sistemi Batch (a lotti) e il JCL**
Nella seconda metà degli anni '50, per ridurre drasticamente i tempi morti di setup, nacquero i primi rudimentali sistemi operativi. Si affermarono i **sistemi batch** (a lotti), accompagnati dai primi linguaggi ad alto livello come il Fortran (nato nel 1958).
L'idea geniale fu quella di raggruppare i lavori di più utenti. La sequenza di azioni richieste dall'utente venne battezzata **Job** (lavoro). Per far capire alla macchina cosa fare senza l'intervento umano, fu inventato il **JCL** (*Job Control Language*), un linguaggio fatto di schede di controllo.

*Esempio pratico di JCL:* Un pacco di schede iniziava tipicamente con `$JOB` (per identificare l'utente e addebitargli i costi), seguito da `$FORTRAN` (per dire al sistema di avviare il compilatore), poi il codice sorgente, la scheda `$LOAD` (per collegare il programma), `$RUN` (per l'esecuzione vera e propria), seguita dai dati di input, e infine la scheda `$END`.

La procedura divenne questa:
1.  Gli utenti preparavano i job su schede perforate.
2.  Una macchina economica copiava tutte queste schede, in sequenza, su un singolo nastro magnetico (creando un "lotto" o "batch").
3.  Il nastro veniva montato sul computer principale e costosissimo, che elaborava tutti i job in sequenza rapida.
4.  L'output veniva scritto su un altro nastro, poi stampato su carta da macchine secondarie.

Questi primi sistemi operativi erano chiamati **Monitor**. Il Monitor risiedeva stabilmente nella parte superiore della memoria centrale, mentre il resto della memoria era riservato all'unico programma utente in esecuzione in quel momento (operando quindi in rigida **monoprogrammazione**).

**4. Il collo di bottiglia dell'Input/Output**
Sebbene l'elaborazione a lotti avesse eliminato i tempi morti umani, la CPU rimaneva comunque sotto utilizzata. Il problema divenne di natura tecnologica: la differenza abissale di velocità tra il processore (elettronico) e i dispositivi di Input/Output, come i lettori di schede o i dischi (meccanici).
*Esempio didattico:* All'inizio degli anni '60, le istruzioni venivano eseguite in microsecondi, ma per leggere un dato da un disco servivano centesimi di secondo. Questo significava che, nel tempo impiegato per leggere un solo blocco di dati, la CPU avrebbe potuto eseguire ben 10.000 istruzioni!
Durante tutte le operazioni di lettura o scrittura, la CPU non poteva fare altro che bloccarsi in inattiva attesa della fine del trasferimento dei dati. Questa inefficienza estrema spingerà gli informatici, negli anni successivi, a inventare la *multiprogrammazione*.

### Sintesi
*   I primi computer operavano in logica "Open Shop": nessun sistema operativo, programmazione diretta via hardware e tempi lunghissimi per il caricamento manuale.
*   Per ottimizzare il tempo macchina, sono stati inventati i sistemi **Batch** (a lotti): i lavori (Job) di più utenti venivano trascritti su nastro magnetico e processati in sequenza senza interruzioni umane.
*   Gli utenti comunicavano al primo sistema operativo (detto **Monitor**) cosa fare tramite schede speciali scritte in linguaggio **JCL** (Job Control Language).
*   I sistemi Batch operavano in **monoprogrammazione**: un solo programma per volta risiedeva in memoria insieme al Monitor.
*   Nonostante l'automazione, la CPU restava pesantemente inattiva a causa della lentezza dei dispositivi periferici (Input/Output) rispetto alla velocità elettronica del processore.

### Glossario Finale
*   **Open Shop (Negozio aperto):** Tecnica di gestione primordiale in cui il computer veniva assegnato per intervalli di tempo a un singolo programmatore, che lo operava manualmente.
*   **Batch (Lotto):** Raggruppamento sequenziale di lavori o programmi da far elaborare al computer in un'unica sessione, per ottimizzare i tempi di configurazione della macchina.
*   **Job (Lavoro):** L'intera sequenza di azioni, istruzioni e dati sottomessa al sistema operativo da un utente affinché venga processata.
*   **JCL (Job Control Language):** Un primitivo linguaggio a riga di comando utilizzato sulle schede perforate per impartire direttive operative al sistema di base (es. caricare un compilatore o eseguire un programma).
*   **Monitor:** Il nome storico dato ai primissimi rudimentali sistemi operativi, che risiedevano permanentemente in memoria per gestire il transito dei Job in modo sequenziale.
*   **Monoprogrammazione:** Architettura logica in cui il sistema può caricare in memoria e processare un solo programma applicativo alla volta.