---
title: "I Sistemi Operativi Multiprogrammati"
---

### Introduzione
Nella lezione precedente abbiamo visto come i primissimi sistemi operativi (i Monitor) eseguissero i lavori a lotti (Batch) operando in rigorosa monoprogrammazione. Il problema principale di questo approccio era l'immensa quantità di tempo in cui il processore (la CPU) rimaneva inattivo, in attesa che i lentissimi dispositivi periferici completassero le operazioni di lettura o scrittura dei dati. L'esigenza di aumentare il tempo di utilizzazione della CPU trovò una brillante risposta negli anni '60 con l'introduzione dei **sistemi multiprogrammati**. In questa lezione scopriremo come un computer riesce a ingannare il tempo, eseguendo (apparentemente) più programmi contemporaneamente, e quali innovazioni hardware e software sono state necessarie per rendere possibile questa magia.

### Sviluppo dell'argomento core

**1. Il concetto di Multiprogrammazione e il Cambio di Contesto**
Nei sistemi multiprogrammati, la CPU esegue contemporaneamente più programmi, sfruttando i "tempi morti" di attesa del completamento delle operazioni di Input/Output (I/O) di un programma per mandare avanti l'esecuzione di un altro programma. Questi sistemi presero il nome di *sistemi batch multiprogrammati*.
Questa rivoluzione fu resa possibile dalla presenza dei dischi magnetici, che permettevano di caricare non uno, ma più lavori contemporaneamente nella memoria centrale. 

*Esempio didattico:* Immaginiamo che in memoria siano contemporaneamente presenti il sistema operativo e due programmi, che chiameremo $P_1$ e $P_2$.
1. Il sistema operativo manda in esecuzione il programma $P_1$.
2. $P_1$ prosegue fino a quando deve leggere o scrivere un dato, ovvero iniziare un'operazione di I/O. 
3. Per effettuare questo trasferimento, $P_1$ deve fermarsi e cedere il controllo al sistema operativo. 
4. Il sistema operativo avvia l'operazione di I/O per $P_1$ ma, invece di restare bloccato ad aspettare, passa immediatamente a eseguire le istruzioni di $P_2$, cedendogli il controllo della CPU.
5. Anche $P_2$ prosegue fino alla propria richiesta di I/O, restituendo il controllo all'OS. 
6. A questo punto il sistema operativo controlla se l'operazione di $P_1$ è terminata e, in caso affermativo, ne riprende l'esecuzione.

Il numero di programmi contemporaneamente presenti in memoria si chiama **grado di multiprogrammazione**. All'aumentare di questo grado, diminuisce la probabilità che tutti i programmi stiano facendo I/O contemporaneamente; di conseguenza, aumenta la percentuale di utilizzazione della CPU e il numero di lavori che il sistema esegue nell'unità di tempo.

**2. Le nuove esigenze Hardware: Sicurezza e Controllo**
Avere tanti "inquilini" nella stessa memoria centrale portò alla nascita di nuovi problemi, che richiesero l'introduzione di specifiche protezioni hardware:
*   **La protezione della memoria:** Si doveva impedire che un programma andasse a scrivere nello spazio di memoria assegnato a un altro. Furono introdotti i **registri limite**, che delimitano lo spazio di memoria occupato da un programma (es. $P_1$). Il sistema operativo carica questi registri prima di avviare il programma; durante l'esecuzione, l'hardware controlla che ogni indirizzo generato da $P_1$ rientri in quei limiti. In caso di violazione, il programma viene interrotto e il controllo torna al sistema operativo.
*   **Il controllo del monopolio:** Come impedire che un programma esegua un calcolo matematico infinito bloccando il sistema? Si introdusse un **timer** (temporizzatore) che avverte il sistema operativo quando scade una quantità prefissata di tempo assegnata a un programma, permettendogli di riprendere il controllo ed eseguire le opportune azioni.
*   **La gestione delle Interruzioni:** Per alternare i programmi, il sistema operativo deve essere in grado di interromperli, salvare il loro stato di esecuzione, e ripristinarlo successivamente affinché il programma possa riprendere esattamente dal punto in cui era stato interrotto.

**3. Il DMA (Direct Memory Access): Il vero Parallelismo**
Nei sistemi monoprogrammati, la CPU doveva gestire fisicamente e continuamente il trasferimento di ogni singolo dato dalla periferica alla memoria. Nella multiprogrammazione, questo tempo prezioso doveva essere usato per far girare altri programmi.
Venne così inventato il **DMA** (*Direct Memory Access*, accesso diretto alla memoria): un dispositivo hardware autonomo capace di operare il trasferimento dei dati tra memoria e unità periferica senza coinvolgere il processore. 
*Come funziona?* Il processore invia al DMA l'indirizzo di origine, quello di destinazione e la quantità di dati da trasferire, poi lo lascia lavorare in autonomia. Mentre il DMA trasferisce i dati, il processore svolge altre attività, eseguendo quindi un **vero parallelismo**. Al termine del trasferimento, il DMA invia un segnale di completamento (interruzione) al processore.

**4. La Tecnica dello SPOOLING**
Eseguendo più programmi contemporaneamente (parallelismo simulato), nacque un problema pratico: se due programmi ordinavano di stampare un documento nello stesso istante, le righe di stampa dell'uno si sarebbero mescolate con quelle dell'altro sul foglio di carta. 
La soluzione fu la tecnica dello **SPOOLING** (dall'acronimo *Simultaneous Peripheral Operation On Line*):
1. I programmi non scrivono più direttamente sulla stampante fisica, ma inviano l'output a *periferiche virtuali* (appositi file su disco) gestite dal sistema operativo.
2. Solo quando un programma termina completamente l'esecuzione, il sistema operativo preleva quel file chiuso e invia l'intero output alla stampante fisica, mettendo ordinatamente in coda gli output dei diversi programmi e impedendo così ogni interferenza.

### Sintesi
*   La **multiprogrammazione** è nata per sfruttare i tempi morti della CPU, alternando l'esecuzione di più programmi caricati contemporaneamente in memoria.
*   Maggiore è il **grado di multiprogrammazione**, maggiore è lo sfruttamento del processore.
*   La convivenza di più programmi richiede hardware specifico: i **registri limite** per evitare che un programma sporchi la memoria altrui, e un **timer** per impedire che monopolizzi la CPU.
*   Il **DMA** permette di sgravare la CPU dalle lente operazioni di I/O, creando un parallelismo reale e hardware.
*   Lo **SPOOLING** è una tecnica software che salva gli output su disco (periferiche virtuali) per poi mandarli in coda alla stampante, evitando accavallamenti tra programmi eseguiti in parallelo.

### Glossario Finale
*   **Multiprogrammazione:** Tecnica di gestione del sistema operativo in cui la CPU esegue contemporaneamente più programmi, alternandoli durante i rispettivi periodi di attesa per l'Input/Output.
*   **Grado di multiprogrammazione:** Il numero di programmi contemporaneamente caricati e presenti nella memoria centrale.
*   **Registri Limite:** Speciali registri hardware che contengono gli indirizzi di memoria di inizio e fine assegnati a un processo, utilizzati per proteggere lo spazio di memoria di altri programmi.
*   **Timer (Temporizzatore):** Componente hardware che invia un'interruzione al sistema operativo allo scadere di un limite di tempo prefissato, per impedire il monopolio della CPU.
*   **DMA (Direct Memory Access):** Dispositivo hardware che trasferisce enormi blocchi di dati direttamente tra le periferiche e la memoria RAM in totale autonomia, lasciando il processore libero di eseguire altre istruzioni.
*   **SPOOLING (Simultaneous Peripheral Operation On Line):** Tecnica di gestione delle periferiche condivise che intercetta i dati in uscita dai programmi e li salva in file temporanei su disco, inviandoli in coda alla periferica reale solo al termine del lavoro.