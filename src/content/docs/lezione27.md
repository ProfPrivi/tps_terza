---
title: "L'Architettura del Computer e il Modello di Von Neumann"
---

### Introduzione
Fino ad ora abbiamo studiato come l'informazione viene codificata (i bit) e come il Sistema Operativo gestisce le risorse del computer. Ma come è fatto, fisicamente e logicamente, questo computer? Nel 1945, il geniale matematico John Von Neumann teorizzò un'architettura hardware così perfetta ed efficiente che, ancora oggi, quasi tutti i computer, gli smartphone e i tablet del mondo sono costruiti seguendo il suo schema. In questa lezione scopriremo l'Architettura di Von Neumann, esploreremo le parti intime del processore (CPU) e della Memoria Centrale, e capiremo come comunicano tra loro attraverso i "Bus" per eseguire il ciclo vitale di ogni calcolatore.

### Sviluppo dell'argomento core

**1. Il Modello di Von Neumann: L'idea rivoluzionaria**
Prima di Von Neumann, per far fare un calcolo diverso a un computer, gli ingegneri dovevano letteralmente staccare e riattaccare cavi elettrici. L'intuizione rivoluzionaria di Von Neumann fu il concetto di **"programma memorizzato"**: i dati da elaborare e le istruzioni del programma che li deve elaborare devono risiedere *nella stessa memoria centrale*, codificati nello stesso modo (in binario). 

L'architettura classica si basa su quattro blocchi fondamentali interconnessi:
1.  **CPU (Central Processing Unit):** Il cervello che esegue le elaborazioni.
2.  **Memoria Centrale:** Il magazzino di lavoro che contiene dati e istruzioni.
3.  **Periferiche (Input/Output):** I dispositivi per comunicare con l'esterno (tastiera, monitor, dischi).
4.  **Bus di Sistema:** I canali di comunicazione che collegano tutti questi componenti.

**2. Anatomia della CPU (Il Processore)**
La CPU è il motore elaborativo del sistema. Al suo interno è divisa in tre sotto-componenti cruciali:
*   **ALU (Arithmetic Logic Unit):** L'unità aritmetico-logica. È la vera e propria "calcolatrice" del sistema, esegue le operazioni matematiche (somme, sottrazioni) e i confronti logici (AND, OR).
*   **CU (Control Unit):** L'unità di controllo. È il "direttore d'orchestra": non fa calcoli, ma legge le istruzioni dalla memoria, le decodifica e comanda all'ALU e alle altre parti cosa fare. Genera i segnali di temporizzazione dettati dal **Clock**.
*   **Registri:** Sono microscopiche celle di memoria interne alla CPU, velocissime, usate per immagazzinare i dati su cui si sta lavorando in quell'esatto millisecondo.
    *   *PC (Program Counter):* Contiene l'indirizzo di memoria della *prossima* istruzione da eseguire.
    *   *IR (Instruction Register):* Contiene l'istruzione che la CPU sta eseguendo *in questo momento*.
    *   *Accumulatore:* Registro speciale dell'ALU dove vengono salvati i risultati temporanei dei calcoli.

*Esempio didattico - La metafora del cuoco:* 
Possiamo immaginare la CPU come un cuoco in una cucina. Il cuoco (la **CU**) legge una ricetta. Gli ingredienti freschi sul bancone sono i dati nella **Memoria Centrale**. Quando il cuoco deve tagliare le verdure, usa le sue mani e i coltelli (l'**ALU**). Il piattino dove appoggia temporaneamente le verdure tagliate è l'**Accumulatore**. Il segnalibro che gli ricorda a che punto è della ricetta è il **Program Counter (PC)**.

**3. La Memoria Centrale e i Bus**
La memoria centrale (RAM, *Random Access Memory*) è un'enorme griglia di celle, ognuna capace di contenere una stringa di bit (solitamente 1 Byte, ovvero 8 bit). Ogni cella è identificata da un numero univoco detto **indirizzo**. La RAM è *volatile*: perde tutti i dati se manca la corrente. (Per l'avvio del computer esiste anche una piccola memoria non volatile detta ROM, contenente il BIOS/UEFI).

Affinché la CPU possa prendere i dati dalla Memoria, ha bisogno di "strade" fisiche, chiamate **Bus**:
*   **Bus Dati:** Trasporta l'informazione vera e propria (le istruzioni o i numeri da calcolare). È bidirezionale.
*   **Bus Indirizzi:** Trasporta il numero della "cella" (l'indirizzo) in cui la CPU vuole andare a leggere o scrivere. È monodirezionale (dalla CPU alla Memoria).
*   **Bus di Controllo:** Trasporta i comandi (es. "Leggi!", "Scrivi!").

**4. Il Ciclo Macchina (Fetch - Decode - Execute)**
Il lavoro della CPU è ripetitivo e ciclico. Per ogni singola istruzione, il processore esegue sempre le stesse tre fasi vitali (il Ciclo di Von Neumann):
1.  **Fetch (Fase di Lettura/Prelievo):** L'Unità di Controllo (CU) guarda il *Program Counter* per sapere l'indirizzo della prossima istruzione, usa il Bus degli indirizzi per localizzarla in Memoria, la preleva tramite il Bus Dati e la inserisce nell'*Instruction Register* (IR). Il Program Counter viene subito incrementato di 1 per puntare all'istruzione successiva.
2.  **Decode (Fase di Decodifica):** La CU analizza il contenuto dell'IR per "capire" di quale operazione si tratta (è una somma? è uno spostamento di memoria?).
3.  **Execute (Fase di Esecuzione):** La CU invia i segnali necessari. Se serve fare un calcolo, attiva l'ALU. Il risultato viene immagazzinato nell'Accumulatore o rimandato in Memoria Centrale. Finito questo, il ciclo ricomincia all'infinito dal punto 1.

### Sintesi
*   Il **Modello di Von Neumann** è l'architettura base dei computer moderni, caratterizzata dal fatto che dati e programmi condividono la stessa Memoria Centrale.
*   La **CPU** (Processore) è composta da: **ALU** (che fa i calcoli), **CU** (che dirige e temporizza il lavoro) e i **Registri** (memorie interne super veloci, come il PC e l'IR).
*   La **Memoria Centrale (RAM)** è un archivio temporaneo diviso in celle numerate da indirizzi univoci.
*   Le diverse componenti comunicano attraverso tre percorsi chiamati **Bus**: Bus Dati, Bus Indirizzi e Bus di Controllo.
*   Tutto il computer funziona ripetendo un ritmo fondamentale detto **Ciclo Macchina**, diviso in tre fasi ininterrotte: **Fetch** (preleva), **Decode** (decodifica) ed **Execute** (esegui).

### Glossario Finale
*   **CPU (Central Processing Unit):** Il microprocessore centrale, "cervello" hardware del computer responsabile dell'esecuzione delle istruzioni e del controllo delle periferiche.
*   **ALU (Arithmetic Logic Unit):** Sotto-circuito della CPU incaricato di eseguire le operazioni matematiche e le comparazioni logiche.
*   **Program Counter (PC):** Registro della CPU che memorizza sempre e solo l'indirizzo di memoria della prossima istruzione che dovrà essere eseguita.
*   **RAM (Random Access Memory):** Memoria centrale di lavoro, volatile, a cui il processore accede direttamente per leggere dati e istruzioni.
*   **Bus:** Canale di comunicazione elettrico condiviso che permette il transito delle informazioni e dei comandi tra CPU, Memoria e dispositivi di I/O.
*   **Fetch:** La prima fase del ciclo macchina, in cui la CPU preleva l'istruzione dalla memoria per portarla nei propri registri interni.
*   **Clock:** Un oscillatore al quarzo che scandisce il "ritmo" di lavoro (frequenza) della CPU, misurato in Hertz (Hz).