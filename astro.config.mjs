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