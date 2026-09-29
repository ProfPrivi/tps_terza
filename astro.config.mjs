// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://ProfPrivi.github.io',
    base: '/tps_terza', // (ricorda lo slash iniziale!)
    integrations: [
        starlight({
            title: 'Appunti di TPS per la Terza',
            logo: {
                src: './src/assets/greppi_net.png',
            },
            customCss: [
                './src/styles/custom.css',
            ],
            // 2. Inietta entrambi i componenti personalizzati
            components: {
                ThemeSelect: './src/components/MenuToggle.astro',
                SiteTitle: './src/components/ScrollProgress.astro',
            },   

            sidebar: [
                // --- PRIMA CATEGORIA ---
                {
                    label: "Teoria e codifica dell'informazione",                     
                    collapsed: true,                        
                    items: [
                        { label: 'Concetti di Informazione e trasmissione', link: '/lezione11/' },
                        { label: "Dai linguaggi naturali all'elaborazione dei dati", link: '/lezione12/' },
                        { label: 'La teoria della comunicazione e le interfacce utente', link: '/lezione13/' },
                        { label: 'Introduzione ai sistemi posizionali e al Sistema Binario', link: '/lezione14/' },
                        { label: "L'Aritmetica Binaria e i Calcoli della CPU", link: '/lezione15/' },
                        { label: "Sistemi Ottale, Esadecimale e Raggruppamento dei Dati", link: '/lezione16/' },
                        { label: "L'organizzazione della memoria e i Numeri Interi", link: '/lezione17/' },
                        { label: "I Numeri Reali: Virgola Fissa, Virgola Mobile e Normalizzazione", link: '/lezione18/' },
                        { label: "Lo Standard IEEE 754 per la Virgola Mobile", link: '/lezione19/' },
                        { label: "La codifica dei testi e dei caratteri", link: '/lezione110/' },
                        { label: "La grafica digitale: Immagini Vettoriali e Raster", link: '/lezione111/' },
                        { label: "I formati Multimediali: Audio e Video", link: '/lezione112/' },
                    ]
                }, // <-- Virgola importantissima che separa le categorie!
                {
                    label: "Caratteristiche generali dei sistemi operativi",                     
                    collapsed: true,                        
                    items: [
                        { label: 'Aspetti introduttivi', link: '/lezione21/' },
                        { label: 'Risorse hardware e software del computer', link: '/lezione22/' },
                        { label: 'Le origini e le caratteristiche dei primi Sistemi Operativi', link: '/lezione23/' },
                        { label: 'I Sistemi Operativi Multiprogrammati', link: '/lezione24/' },
                        { label: 'Sistemi time sharing e sistemi basati sulle priorità', link: '/lezione25/' },
                        { label: 'Funzioni e Struttura del Sistema Operativo', link: '/lezione26/' },
                        { label: "L'Architettura del Computer e il Modello di Von Neumann", link: '/lezione27/' },
                        { label: "La Gerarchia delle Memorie e le Memorie di Massa", link: '/lezione28/' },
                    ]
                }, // <-- Virgola importantissima che separa le categorie!    
                {
                    label: 'Educazione Civica',
                    collapsed: true,
                    items: [
                        // { label: 'Confini reali e confini virtuali', link: '/civica/' }
                    ]
                } // <-- Niente virgola qui, perché è l'ultima categoria
            ],
        }),
    ],
});