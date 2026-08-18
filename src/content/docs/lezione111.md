---
title: "La grafica digitale: Immagini Vettoriali e Raster"
---

### Introduzione
I file più comunemente utilizzati in ambito comunicativo riguardano testi, immagini, audio e video. Quando si progetta un nuovo contenuto visivo, la scelta del formato corretto è indispensabile, e dipende unicamente dal supporto su cui questo contenuto sarà fruito. Un'immagine destinata alla carta stampata necessita di un'altissima quantità di particolari e informazioni, mentre un'immagine per un sito Web deve garantire un caricamento rapido, riducendo drasticamente il proprio "peso" o dimensione in byte. In informatica, i formati grafici si suddividono in due universi diametralmente opposti: la grafica vettoriale e la grafica raster. Scopriamone insieme le logiche e le differenze.

### Sviluppo dell'argomento core

**1. La Grafica Vettoriale: L'arte della Matematica**
Le immagini vettoriali non sono formate da veri e propri "disegni", bensì descritte da un insieme di **primitive geometriche** (punti, linee, segmenti, poligoni e curve) a cui è possibile associare colori di riempimento, colori dei contorni e sfumature.
La potenza della grafica vettoriale risiede nella sua indipendenza: le proprietà di un'immagine sono elementi indipendenti che possono essere spostati e modificati senza alcuna perdita di qualità. 
*Esempio didattico:* Immaginiamo il disegno di un albero. Nel mondo vettoriale, il tronco, i rami, le foglie e i frutti sono tutti "oggetti" matematici indipendenti. Ognuno di essi è ridimensionabile o ricolorabile a piacimento, senza minimamente influire sugli altri elementi vicini.

Essendo basate su formule, queste immagini sono solitamente molto "leggere" (pesano pochi Kilobyte), perché per rappresentarle servono poche informazioni facilmente comprimibili.
I programmi più noti per la creazione vettoriale sono Adobe Illustrator, Corel Draw e il software libero Inkscape. I formati principali sono:
*   **.svg (Scalable Vector Graphics):** Il formato standard del Web.
*   **.eps (Encapsulated Postscript):** Un formato ibrido, che può contenere sia elementi vettoriali che non.
*   **.pdf (Portable Document Format):** Creato da Adobe, è il re indiscusso per lo scambio documentale su vasta scala, perché preserva la forma dell'originale, gestendo testi, grafica vettoriale, immagini, link ipertestuali e firme digitali.
*   **ePub (Electronic Publishing):** Lo standard aperto per i libri elettronici (e-book), in grado di adattarsi dinamicamente a qualsiasi dispositivo mobile (e-reader, smartphone, tablet).

**2. La Grafica Raster (Bitmap): L'arte dei Punti**
Le immagini raster, note anche come *bitmap* (mappa di bit), sono invece formate da singoli punti minuscoli disposti su una griglia: i **pixel** (dall'inglese *picture element*). A ogni singolo pixel viene assegnato un preciso colore; è proprio l'insieme denso di tutti questi pixel colorati a generare il motivo visivo, come in un mosaico.
La grafica raster è quella usata per la fotografia digitale, poiché riesce a gestire con naturalezza milioni di sfumature di colori reali. 

Tuttavia, c'è un rovescio della medaglia: 
*   **Il "peso":** Maggiore è il numero di colori da memorizzare, maggiore sarà il peso dell'immagine in Kilobyte o Megabyte.
*   **Il problema della risoluzione:** Le immagini raster sono strettamente "dipendenti dalla risoluzione". A differenza della grafica vettoriale (che è *scalabile* e ricalcola all'infinito le sue forme geometriche), se proviamo ad aumentare le dimensioni di un'immagine raster la qualità precipita. Il software grafico è infatti costretto ad aggiungere "pixel inventati" accanto a quelli esistenti per riempire il nuovo spazio vuoto, assegnando colori simili tramite un procedimento chiamato **interpolazione**. Il triste risultato di questa azione è il classico sgranamento dell'immagine (o "effetto pixelato").
I software più noti per operare in questo mondo sono Adobe Photoshop e l'alternativa open source The Gimp.

**3. I formati Raster per il Web e le tecniche di compressione**
Nel mondo del Web regnano tre formati raster principali, supportati da tutti i browser, ma con scopi ben distinti:
*   **Formato .gif (Graphic Interchange Format):** Rappresenta al massimo 256 colori (8 bit), ed è quindi perfetto per loghi e disegni stilizzati. Gode di due caratteristiche amatissime: supporta le *animazioni* (gif animate) e la *trasparenza* (rendendo un colore, ad esempio lo sfondo, invisibile per il browser). Utilizza una compressione **lossless** (senza perdita di qualità).
*   **Formato .jpg (Joint Photographic Expert Group):** Ideale per le fotografie. Basato sul modello RGB, gestisce sfumature fino a 16 milioni di colori (24 bit), ma non supporta né trasparenze né animazioni. Utilizza una compressione **lossy** (con perdita di qualità), che scarta fisicamente le informazioni ritenute "superflue" all'occhio umano pur di alleggerire il file.
*   **Formato .png (Portable Network Graphics):** L'evoluzione moderna. Unisce la potenza dei milioni di colori del .jpg con la gestione intelligente della trasparenza del .gif. Utilizza, proprio come il GIF, un algoritmo di compressione di tipo **lossless** (senza perdita), ma non brevettato e quindi liberamente utilizzabile.

### Sintesi
*   **Grafica Vettoriale:** Creata tramite espressioni matematiche e primitive geometriche. È scalabile (ingrandibile all'infinito) senza perdere dettaglio, rendendola perfetta per loghi, illustrazioni nitide e documenti multipiattaforma come i PDF.
*   **Grafica Raster:** Formata da una griglia di punti colorati detti pixel. È ideale per la fotografia realistica, ma è dipendente dalla risoluzione: ingrandirla genera fastidiosi effetti di sgranatura a causa del fenomeno dell'interpolazione.
*   **Formati per il Web:** 
    *   `.jpg`: ideale per foto (alta gamma cromatica, no trasparenza, compressione lossy).
    *   `.gif`: ideale per loghi e piccole animazioni (256 colori, trasparenza, compressione lossless).
    *   `.png`: l'ibrido di alta qualità (migliori colori, trasparenza ottimale, compressione lossless).

### Glossario Finale
*   **Grafica Vettoriale:** Tipologia di computer grafica in cui le immagini sono generate e descritte da formule matematiche e forme geometriche.
*   **Grafica Raster (o Bitmap):** Tipologia di grafica in cui le immagini sono costruite tramite una matrice a griglia fissa di punti fisici (i pixel).
*   **Pixel (Picture Element):** Il più piccolo elemento singolo e indivisibile che compone un'immagine digitale raster.
*   **Interpolazione:** Procedimento tramite il quale un software "inventa" nuovi pixel aggiungendoli tra quelli esistenti durante l'ingrandimento di un'immagine raster, causando la tipica sgranatura visiva.
*   **Compressione Lossless:** Un algoritmo di compressione dei file che riduce lo spazio occupato senza causare la minima perdita o degradazione di informazione e di qualità (usato in .gif e .png).
*   **Compressione Lossy:** Un algoritmo di compressione molto potente che sacrifica in via definitiva alcune informazioni visive marginali per ottenere un notevole alleggerimento del file (usato in .jpg).