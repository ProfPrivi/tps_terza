---
title: "Processi e Interruzioni"
---

### Introduzione
Nella nostra vita digitale usiamo continuamente il termine "programma", ma per un ingegnere informatico un programma salvato sul disco fisso è solo una "scatola vuota". Cosa succede quando facciamo doppio clic sulla sua icona e lo "risvegliamo"? L'entità statica prende vita all'interno della memoria RAM e del processore, trasformandosi in quello che chiamiamo **Processo**. In questa lezione esploreremo l'anatomia di un processo, i suoi stati di esecuzione e scopriremo in che modo il Sistema Operativo riesce a fermarlo o a gestirne gli errori improvvisi, introducendo il fondamentale meccanismo delle **Interruzioni**.

### Sviluppo dell'argomento core

**1. Programma vs. Processo: Dalla staticità alla dinamica**
È essenziale distinguere due concetti apparentemente simili ma tecnicamente opposti:
*   **Il Programma (Entità passiva):** È un semplice file salvato sul disco rigido (memoria di massa). È un elenco statico di istruzioni scritte da un programmatore.
*   **Il Processo (Entità attiva):** È un programma *in esecuzione*. Quando il Sistema Operativo carica il programma nella memoria RAM e la CPU inizia a eseguirne le istruzioni, esso diventa un processo. Un processo ha bisogno di risorse (tempo di CPU, spazio in RAM, accesso ai file) per poter vivere.

> **Approfondimento Didattico - L'analogia della Ricetta:**
> Immagina un libro di ricette appoggiato su uno scaffale: quello è il **Programma**. 
> Quando un cuoco prende il libro, legge la ricetta della torta, prepara gli ingredienti sul tavolo e inizia a mescolarli, tutta quell'attività in corso d'opera è il **Processo**. Dalla stessa ricetta (un solo programma), due cuochi diversi potrebbero cucinare due torte in momenti diversi, dando vita a due *processi* distinti!

**2. La "Carta d'Identità" del Processo: Il PCB**
Per non fare confusione tra le decine di processi aperti contemporaneamente (il browser, l'antivirus, un videogioco), il Sistema Operativo crea per ognuno di essi una struttura dati chiamata **PCB (Process Control Block)**. È la vera e propria carta d'identità del processo e contiene informazioni vitali come:
* L'identificatore univoco (PID - Process ID).
* Lo stato attuale del processo.
* Il valore del *Program Counter* (per sapere esattamente a quale istruzione si era arrivati).
* L'elenco dei file aperti e la memoria RAM occupata.

**3. Gli Stati di un Processo**
Durante la sua "vita", un processo non è sempre in esecuzione costante, ma transita attraverso diversi stati logici gestiti dall'OS:
1.  **Nuovo (New):** Il processo è appena stato creato.
2.  **Pronto (Ready):** Il processo è in RAM e ha tutto ciò che gli serve. Sta solo aspettando il suo turno per usare la CPU.
3.  **In Esecuzione (Running):** La CPU sta attivamente calcolando le istruzioni di questo processo.
4.  **In Attesa o Bloccato (Waiting/Blocked):** Il processo si è dovuto fermare perché sta aspettando un evento esterno (ad esempio, che l'utente prema un tasto o che l'Hard Disk finisca di leggere un file).
5.  **Terminato (Terminated):** L'esecuzione è conclusa (perché ha finito il suo compito o per un errore) e il sistema operativo libera la RAM occupata.

*[Segnaposto Immagine: Inserire qui il Diagramma a stati di un processo, con le frecce che mostrano i passaggi tra Pronto -> Esecuzione -> Attesa -> Pronto]*

**4. Le Interruzioni (Interrupts): I riflessi del computer**
Cosa succede se, mentre la CPU sta eseguendo pacificamente un processo, l'utente preme un tasto o un componente hardware richiede attenzione immediata? Entrano in gioco le **Interruzioni (Interrupts)**.
Un'interruzione è un segnale speciale che costringe il processore a sospendere *immediatamente* ciò che sta facendo per occuparsi di un evento più urgente.

Possiamo classificarle in due macro-categorie:
*   **Interruzioni Hardware (Asincrone):** Provengono dai dispositivi fisici (es. il mouse che viene mosso, la stampante che ha finito la carta, la scheda di rete che riceve un messaggio, o il "Timer" che avvisa che il tempo a disposizione del processo è scaduto).
*   **Interruzioni Software o Eccezioni (Sincrone / Trap):** Sono generate dal processo stesso mentre è in esecuzione. Accadono in caso di un errore grave (es. divisione per zero, tentativo di leggere una zona di memoria proibita) o quando il processo chiede un servizio al sistema operativo (le *System Call* viste nelle lezioni precedenti).

**5. La gestione dell'Interruzione: Il Cambio di Contesto (Context Switch)**
Quando arriva un segnale di interruzione, la CPU compie una manovra rapida ed elegante chiamata **Context Switch** (Cambio di contesto):
1.  Sospende il processo attualmente in stato di *Running*.
2.  Salva tutto lo stato attuale di quel processo (i registri, il Program Counter) all'interno del suo **PCB**, mettendo come un "segnalibro" per non dimenticare dove si era fermata.
3.  Esegue un codice speciale del Sistema Operativo chiamato **ISR (Interrupt Service Routine)**, progettato per risolvere la causa di quella specifica interruzione.
4.  Terminata la ISR, ripristina lo stato dell'ultimo processo (o di un altro con priorità maggiore) leggendo il PCB, togliendo il "segnalibro" e riprendendo l'esecuzione esattamente da dove si era fermata.

*[Segnaposto Immagine: Inserire qui uno schema del Context Switch, che mostra la CPU che salva i registri nel PCB del Processo A, esegue l'ISR, e poi ricarica i registri dal PCB del Processo B]*

### Sintesi
*   Un **programma** è un file passivo su disco, un **processo** è l'attività dinamica di quel programma caricato in memoria ed eseguito dalla CPU.
*   Ogni processo è monitorato tramite il **PCB**, una struttura dati che contiene le sue informazioni vitali (PID, stato, memoria occupata).
*   Il ciclo di vita di un processo attraversa cinque stati fondamentali: **Nuovo, Pronto, Esecuzione, In Attesa, Terminato**.
*   Le **Interruzioni** sono segnali hardware o software che forzano la CPU a sospendere l'operazione corrente per gestire un evento urgente o un errore.
*   Per gestire un'interruzione senza perdere dati, la CPU esegue un **Cambio di Contesto (Context Switch)**, salvando lo stato del processo nel PCB e avviando una routine di emergenza (ISR).

### Glossario Finale
*   **Processo:** Un programma in esecuzione, completo dei suoi dati, del suo stato e delle risorse a lui assegnate dal sistema operativo.
*   **PCB (Process Control Block):** Il blocco di controllo del processo; un record informativo creato dal sistema operativo per memorizzare tutte le informazioni vitali del processo.
*   **Interrupt (Interruzione):** Segnale (hardware o software) che interrompe il normale flusso di esecuzione del processore per segnalare un evento critico o urgente.
*   **Trap / Eccezione:** Un'interruzione software causata internamente al processore (es. un errore logico nel codice o una System Call).
*   **Context Switch (Cambio di contesto):** La delicata operazione con cui il sistema operativo "congela" lo stato del processo in esecuzione (salvandolo nel PCB) per assegnare la CPU a un altro compito o processo.
*   **ISR (Interrupt Service Routine):** Il frammento di codice del sistema operativo progettato appositamente per gestire e risolvere una determinata interruzione.