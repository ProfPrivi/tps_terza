---
title: "Funzioni e Struttura del Sistema Operativo"
---

### Introduzione
Nelle lezioni precedenti abbiamo visto come il Sistema Operativo (OS) gestisce i programmi in esecuzione, interrompendoli e alternandoli per massimizzare l'uso della CPU. Ma come fa questo enorme e complesso "direttore d'orchestra" a non fare confusione? Nell'eseguire i propri compiti, l'OS si prefigge tre grandi obiettivi: convenienza, efficienza e versatilità. In questa lezione esploreremo quali sono esattamente le risorse che il Sistema Operativo deve amministrare e come i progettisti informatici abbiano strutturato internamente questo software, dividendolo in "strati" indipendenti o riducendolo a un nucleo essenziale chiamato "microkernel".

### Sviluppo dell'argomento core

**1. Le Risorse da Gestire**
Il sistema operativo deve interfacciare il software applicativo con le risorse del computer, ottimizzandone l'uso. Le quattro risorse principali che deve gestire sono:
*   **Il processore (o i processori):** Deve assegnare la CPU ai programmi in attesa di esecuzione, operando le opportune scelte di schedulazione.
*   **La memoria centrale:** Deve allocare (assegnare) porzioni di memoria ai programmi, poiché un programma in esecuzione deve obbligatoriamente risiedere lì.
*   **I dispositivi di Input/Output:** Fornisce servizi di trasferimento dati, controllandone l'esecuzione e recuperando eventuali errori periferici.
*   **Le informazioni:** Fornisce servizi per gestire file e archivi, permettendo agli utenti di memorizzare, ritrovare ed elaborare i dati in modo sicuro.

Per fare tutto questo, l'OS utilizza specifiche strutture dati e programmi con tre compiti precisi:
1.  *Tenere conto dello stato:* Sapere in ogni istante se una risorsa (es. la memoria) è libera o occupata.
2.  *Avere una politica di scelta:* Decidere a chi dare una risorsa se ci sono più richieste (es. a quale programma sottrarre spazio se la memoria è piena).
3.  *Avere metodi operativi:* Saper fisicamente allocare (dare) e togliere le risorse, tenendo traccia degli spazi occupati.

**2. Il Modello a Strati (Layered Model)**
Essendo un software di enorme complessità, nel tempo si è affermato un modello concettuale che divide l'OS in livelli gerarchici. L'idea base è che ogni livello assolve compiti specifici usando *solo* i servizi del livello inferiore, per offrire servizi a quello superiore. Ogni livello restituisce una "macchina virtuale" sempre più potente e facile da usare. 
Sopra l'hardware (il livello base zero), troviamo cinque strati:
1.  **Gestione processi e processore:** Assegna la CPU. Fornisce al livello superiore l'illusione che ogni processo abbia un processore privato e dedicato.
2.  **Gestione della memoria:** Implementa una memoria virtuale privata per il programma in esecuzione.
3.  **Gestione dei dispositivi (I/O):** Fornisce periferiche virtuali dedicate.
4.  **Gestione delle informazioni:** Permette al processo di interagire con file e dati in modo riservato.
5.  **Shell (gestione utenti/applicazioni):** Lo strato più esterno, in cui le applicazioni girano su una macchina virtuale completamente dedicata all'utente.

**3. L'Architettura a Microkernel**
Nei moderni sistemi operativi si è affermato un approccio diverso: l'architettura a **microkernel**. L'idea è quella di avere un nucleo (kernel) piccolissimo che esegue *solo* le funzioni vitali: gestione del processore, interruzioni e comunicazione tra processi (IPC).
Tutte le altre funzioni storiche dell'OS (gestione memoria, I/O, file) vengono raggruppate in livelli esterni e trattate alla stregua di normali applicazioni utente. 

*I vantaggi del Microkernel:*
Mentre nei vecchi sistemi tutto il codice girava in *modalità riservata* (rischiando crolli totali al minimo errore), nel microkernel solo il nucleo essenziale ha i superpoteri, mentre le altre funzioni girano in *modalità utente*. Questo rende il sistema:
*   **Più flessibile e semplice da mantenere:** Aggiornare una componente dell'OS equivale ad aggiornare una semplice app.
*   **Perfetto per reti e sistemi distribuiti:** Poiché le varie parti dell'OS comunicano scambiandosi messaggi tra loro.

### Sintesi
*   Il Sistema Operativo amministra quattro macro-risorse: Processori, Memoria Centrale, Periferiche (I/O) e Informazioni (File).
*   Per gestire le risorse, l'OS deve tracciarne lo stato, applicare politiche di scelta e implementare metodi pratici per assegnarle o revocarle.
*   Il **modello a strati** divide il sistema in livelli crescenti di astrazione: partendo dall'hardware, ogni strato fornisce una macchina virtuale più comoda per lo strato superiore.
*   I sistemi moderni prediligono l'architettura a **Microkernel**: solo pochissime funzioni vitali operano in modalità privilegiata, mentre il resto del sistema operativo si comporta come un'applicazione standard, garantendo stabilità e facilità di aggiornamento.

### Glossario Finale
*   **Allocazione:** L'atto con cui il sistema operativo assegna formalmente e fisicamente una risorsa (es. uno spazio in RAM o il tempo di una CPU) a un programma.
*   **Macchina Virtuale:** Astrazione logica fornita dai vari strati del sistema operativo, che fa credere a ogni programma di avere l'intero computer (CPU, memoria, periferiche) tutto per sé.
*   **Modello a strati:** Architettura di progettazione in cui il software è diviso in livelli chiusi; ogni livello comunica solo con quello adiacente, facilitando lo sviluppo e la sicurezza.
*   **Microkernel:** Moderna architettura in cui il nucleo del sistema operativo è ridotto al minimo indispensabile, spostando gran parte dei servizi di gestione fuori dalla modalità riservata del processore.
*   **IPC (Inter-Process Communication):** I meccanismi offerti dall'OS che permettono a processi diversi (o alle varie componenti di un OS a microkernel) di comunicare tra loro scambiandosi messaggi.