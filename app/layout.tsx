import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import Navbar from '../src/menu.tsx';
import Box from '@mui/material/Box';
import TopBar from "../src/top_bar.tsx"
import Footer from '../src/footer.tsx';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const roboto = Roboto({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-roboto',
});

const barlow = Roboto({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-barlow',
});

export const metadata: Metadata = {
    // metadataBase é crucial para que URLs relativas (como a da imagem og) funcionem corretamente.
    // Substitua pelo seu domínio oficial quando o site for ao ar.
    metadataBase: new URL('https://www.nuryenergia.com.br'),

    // Título dinâmico para as páginas. O %s será substituído pelo título da página específica.
    title: {
        template: '%s | Nury Energia',
        default: 'Nury Energia - Soluções Completas em Energia Solar',
    },
    description: "Especialistas em energia solar para residências, agronegócio e usinas. Reduza sua conta de luz com projetos personalizados e tecnologia de ponta. Peça seu orçamento!",
    keywords: ['energia solar', 'painel solar', 'placa solar', 'energia fotovoltaica', 'Nury Energia', 'economia de energia', 'sustentabilidade', 'energia solar residencial', 'energia solar agro', 'usina solar'],
    
    // Informações sobre o autor e para os robôs de busca
    creator: 'Nury Energia',
    publisher: 'Nury Energia',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Ícones para navegadores e dispositivos
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    
    // Open Graph (para compartilhamento em redes sociais como Facebook, LinkedIn, WhatsApp)
    openGraph: {
        title: 'Nury Energia - Soluções Completas em Energia Solar',
        description: 'Especialistas em energia solar para residências, agronegócio e usinas. Reduza sua conta de luz com projetos personalizados.',
        url: 'https://www.nuryenergia.com.br',
        siteName: 'Nury Energia',
        images: [
            {
                url: '/og-image.png', // Caminho para a imagem na pasta /public
                width: 1200,
                height: 630,
                alt: 'Painéis solares em um telhado com o logo da Nury Energia',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },

    // Twitter Card (para compartilhamento no Twitter)
    twitter: {
        card: 'summary_large_image',
        title: 'Nury Energia - Soluções Completas em Energia Solar',
        description: 'Especialistas em energia solar para residências, agronegócio e usinas.',
        images: ['/og-image.png'], // Reutiliza a mesma imagem do Open Graph
        // creator: '@seu_twitter', // Opcional: Adicione o handle do Twitter da empresa
    },

    // Manifest para PWA (Progressive Web App)
    manifest: '/site.webmanifest',
};


export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR"className={barlow.variable}>
      <body>
         <ThemeProvider theme={theme}>
            <AppRouterCacheProvider>
               <TopBar />
               <Box sx={{ mt: '69px' }}>
                  <Navbar />
                  {children}
               </Box>
               <Footer />
               <Fab
                  color="success"
                  aria-label="whatsapp"
                  href="https://wa.me/555197674482"
                  target="_blank"
                  sx={{
                     position: 'fixed',
                     bottom: '20px',
                     right: '20px',
                     zIndex: 1000,
                     backgroundColor: '#25D366',
                     '&:hover': {
                        backgroundColor: '#128C7E',
                     },
                  }}
               >
                  <WhatsAppIcon sx={{ color: 'white', fontSize: '32px' }} />
               </Fab>
            </AppRouterCacheProvider>
         </ThemeProvider>
      </body>
      </html>
   );
}