---
title: "I formati Multimediali: Audio e Video"
---

### Introduzione
Il mondo reale in cui viviamo è fatto di suoni e movimenti continui, ovvero di segnali analogici. Per far sì che un computer possa registrare, elaborare e riprodurre una canzone o un filmato, è necessario che questi segnali vengano trasformati nel linguaggio nativo della macchina: il digitale. In questa lezione scopriremo i meccanismi alla base di questa magia informatica, esplorando il processo di campionamento sonoro, i principi che regolano i fotogrammi di un video e il ruolo cruciale dei "Codec", i veri motori della multimedialità moderna.

### Sviluppo dell'argomento core

**1. L'Audio Digitale e il Processo di Campionamento**
Perché un suono venga rappresentato in un file, è necessario trasformare il segnale da analogico a digitale. Questo processo di trasformazione è detto **campionamento**.
Il campionamento consiste in una lettura del segnale sonoro a intervalli regolari, durante la quale vengono registrati in forma digitale solo i valori corrispondenti a tali intervalli (e non tutti gli infiniti punti che formano l'onda sonora continua). 
*Esempio didattico:* Per comprendere questo concetto, si può immaginare il campionamento come l'azione di scattare delle "fotografie" al segnale analogico ad intervalli di tempo regolarissimi. La lettura del suono viene quindi fatta "a campione".

**2. Formati Audio: Lossless vs Lossy**
Esattamente come accade per le immagini, anche i formati audio si dividono in due grandi famiglie in base alla tipologia di compressione:
*   **Formati non compressi (Lossless):** Appartengono a questa categoria formati come il **.wav** (lo standard di Windows) e il **.aiff** (sviluppato da Apple). Questi file sono generalmente di grandi dimensioni ma garantiscono una qualità altissima, motivo per cui sono diffusissimi nell'ambito della registrazione audio professionale.
*   **Formati compressi (Lossy):** Occupano molto meno spazio, ma comportano una qualità dell'audio peggiore rispetto all'originale. I più famosi sono il **.wma** (Windows Media Audio) e, su tutti, il formato **.mp3** (Mpeg 1 Layer 3). La riduzione della dimensione con questi formati può arrivare a 1/12 rispetto a un file non compresso.

*Ma come fa l'algoritmo MP3 a rimpicciolire così tanto un file?*
L'algoritmo del formato .mp3 taglia fisicamente dal file audio le informazioni che ritiene non necessarie. Poiché l'orecchio umano non è in grado di percepire determinate frequenze sonore, le frequenze più alte vengono puramente eliminate, alleggerendo drasticamente il peso del file. La qualità di ascolto rimane discreta, soprattutto se il **bitrate** (il numero di bit usati per memorizzare un secondo di audio) viene mantenuto al di sopra dei 128 Kb/s (Kilobit al secondo).
Un altro formato noto per la rete è il *Real Audio*, utilissimo per l'ascolto di file in *streaming* grazie al suo buon livello di compressione.

**3. L'eccezione alla regola: Il Formato MIDI**
Un formato del tutto particolare è il **MIDI** (*Musical Instrument Digital Interface*, con estensione .mid). La sua unicità sta nel fatto che *non contiene suoni registrati*! Esso contiene esclusivamente le "istruzioni" per suonare le note, indicando i relativi tempi e gli strumenti musicali che devono eseguirle, comportandosi esattamente come uno spartito musicale virtuale.
Poiché il lavoro di riproduzione del suono è lasciato al software che "legge" lo spartito, i file MIDI hanno dimensioni estremamente ridotte e sono modificabili nota per nota. Sono diffusissimi per produrre basi musicali o musica elettronica.

**4. Il Video Digitale: Frame e Interlacciamento**
I filmati non sono altro che fotogrammi (in inglese *frame*) messi in rapida sequenza per ingannare l'occhio e creare l'illusione del movimento. Due concetti regolano la visualizzazione dei video:
*   **Aspect Ratio:** È il rapporto matematico tra la larghezza e l'altezza dell'immagine (i classici formati 4:3 o 16:9 dei televisori e monitor).
*   **FPS (Frame Per Second):** È il numero di fotogrammi trasmessi ogni secondo. Questo standard varia geograficamente: in Europa lo standard è il *PAL* e si basa su 25 fps, mentre in Nord America e Giappone lo standard è l'*NTSC* a 30 fps.

Per ottimizzare la trasmissione, un singolo fotogramma non è quasi mai un'immagine piena, ma è formato da due immagini diverse che si sovrappongono e si completano. Se dividessimo il fotogramma in righe orizzontali, un'immagine conterrebbe solo le righe dispari e l'altra solo le righe pari. Questo ingegnoso metodo di sovrapposizione definisce un frame **interlacciato**.

**5. Formati Video e il ruolo fondamentale dei "Codec"**
Acquisire un video digitale richiede una mole immensa di dati, poiché bisogna campionare sia le onde sonore dell'audio, sia il colore di ogni singolo pixel visivo fotogramma per fotogramma (usando ad esempio 24 bit per pixel per ottenere 16 milioni di colori, il cosiddetto RGB).
Diventa quindi impensabile gestire i video senza una compressione. I formati più diffusi sono il **.mpg** (sviluppato dagli stessi creatori del JPEG), il **.mov** (Quicktime di Apple), l'** .avi** e il **.wmv** di Microsoft.
Questi formati per funzionare si appoggiano ai **Codec** (acronimo di *Compressore-Decompressore*). Un codec è un insieme di istruzioni che, in fase di acquisizione, compatta le informazioni in un file più piccolo; in fase di riproduzione, invece, scompatta le informazioni per mostrare il filmato originale. I codec più celebri per il formato .avi sono *Divx* e *Xvid*, mentre per l'alta definizione (Blu-ray) domina il codec *H264*, capace di una qualità altissima a fronte di dimensioni ridotte.

### Sintesi
*   L'audio viene convertito in digitale tramite il **campionamento**, che "fotografa" le onde sonore a intervalli regolari.
*   I formati audio possono essere **lossless** (senza perdita, altissima qualità, es. WAV) o **lossy** (compressi tagliando frequenze inudibili, es. MP3).
*   Il formato **MIDI** è un'eccezione: è uno spartito di istruzioni musicali senza audio registrato, ed è perciò leggerissimo.
*   Il video è un'illusione data dalla riproduzione rapida di fotogrammi (solitamente 25 o 30 FPS). I fotogrammi televisivi sono spesso **interlacciati** (composti da due metà di linee alternate pari e dispari).
*   Per gestire l'enorme peso dei file video, si ricorre ai **Codec**, programmi che comprimono e decomprimono in tempo reale sia l'audio che le informazioni sui pixel.

### Glossario Finale
*   **Campionamento:** Processo di digitalizzazione di un segnale analogico continuo, effettuato misurando il segnale a intervalli di tempo regolari.
*   **Bitrate:** Unità di misura (spesso in Kb/s) che indica la quantità di bit impiegati per memorizzare un singolo secondo di traccia audio o video.
*   **MIDI:** Standard e formato informatico che non salva l'onda sonora, ma le istruzioni digitali (note, strumenti, tempo) necessarie per riprodurre un brano musicale.
*   **Aspect Ratio:** Rapporto proporzionale tra la larghezza e l'altezza di un'immagine o di uno schermo (es. 4:3 o 16:9).
*   **FPS (Frame Per Second):** L'unità di misura della frequenza visiva, ovvero il numero di fotogrammi mostrati in un singolo secondo di filmato.
*   **Interlacciato:** Un metodo di visualizzazione video in cui ogni singolo fotogramma finale è creato sovrapponendo due semi-quadri (uno con le righe orizzontali pari, l'altro con le dispari).
*   **Codec:** Acronimo di Compressore-Decompressore. Software specializzato nel ridurre (comprimere) le dimensioni di flussi audio o video e di decodificarli al momento della riproduzione.