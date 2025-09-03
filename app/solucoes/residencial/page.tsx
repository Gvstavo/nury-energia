import type { Metadata } from 'next';
import Residencial from '@/src/components/residencial.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Energia Solar Residencial
export const metadata: Metadata = {
    title: 'Energia Solar Residencial', // Resultado: "Energia Solar Residencial | Nury Energia"
    description: 'Soluções personalizadas em energia solar para sua casa. Reduza sua conta de luz, valorize seu imóvel e contribua para um futuro mais sustentável com a Nury Energia.',
    keywords: ['energia solar residencial', 'placa solar para casa', 'kit fotovoltaico residencial', 'instalação de energia solar em residências', 'economia conta de luz', 'Nury Energia'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/solucoes/residencial',
    },

    // Metadados Open Graph para compartilhamento social
    openGraph: {
        title: 'Energia Solar Residencial | Nury Energia',
        description: 'Reduza sua conta de luz e valorize seu imóvel com as soluções de energia solar personalizadas da Nury Energia para residências.',
        url: '/solucoes/residencial',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/daniele-la-rosa-messina-OiPtLN9_04w-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Painéis solares instalados no telhado de uma residência moderna.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Energia Solar Residencial | Nury Energia',
        description: 'Reduza sua conta de luz e valorize seu imóvel com as soluções de energia solar personalizadas da Nury Energia para residências.',
        images: ['/daniele-la-rosa-messina-OiPtLN9_04w-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function ResidencialPage() {
    return <Residencial />;
}