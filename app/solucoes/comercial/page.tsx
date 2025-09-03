import type { Metadata } from 'next';
import Comercial from '@/src/components/comercial.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Energia Solar Comercial
export const metadata: Metadata = {
    title: 'Energia Solar Comercial', // Resultado: "Energia Solar Comercial | Nury Energia"
    description: 'Soluções em energia solar para empresas e comércios. Reduza custos operacionais, aproveite incentivos fiscais e fortaleça a imagem da sua marca com a Nury Energia.',
    keywords: ['energia solar comercial', 'energia solar para empresas', 'placa solar para comércio', 'sistema fotovoltaico comercial', 'redução de custos empresa', 'incentivos fiscais energia solar'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/solucoes/comercial',
    },

    // Metadados Open Graph para compartilhamento social
    openGraph: {
        title: 'Energia Solar Comercial | Nury Energia',
        description: 'Reduza custos operacionais e fortaleça sua marca com as soluções de energia solar personalizadas da Nury Energia para empresas.',
        url: '/solucoes/comercial',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/manny-becerra-NgdhrwAx0J8-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Painéis solares instalados no telhado de um edifício comercial.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Energia Solar Comercial | Nury Energia',
        description: 'Reduza custos operacionais e fortaleça sua marca com as soluções de energia solar personalizadas da Nury Energia para empresas.',
        images: ['/manny-becerra-NgdhrwAx0J8-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function ComercialPage() {
    return <Comercial />;
}