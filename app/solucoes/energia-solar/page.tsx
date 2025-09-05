import type { Metadata } from 'next';
import EnergiaSolar from '@/src/components/energia_solar.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página geral de Soluções em Energia Solar
export const metadata: Metadata = {
    title: 'Soluções em Energia Solar',
    description: 'Conheça as soluções completas da Nury Energia. Projetos de energia solar personalizados para residências, comércios, indústrias e agronegócio.',
    keywords: ['energia solar', 'soluções fotovoltaicas', 'projetos de energia solar', 'energia solar residencial', 'energia solar comercial', 'energia solar industrial', 'energia solar rural'],
    alternates: {
        canonical: '/solucoes/energia-solar',
    },
    openGraph: {
        title: 'Soluções em Energia Solar | Nury Energia',
        description: 'Projetos personalizados para residências, comércios, indústrias e agronegócio.',
        url: '/solucoes/energia-solar',
        images: [
            {
                url: '/daniele-la-rosa-messina-OiPtLN9_04w-unsplash.webp', // Imagem do banner
                width: 1200,
                height: 630,
                alt: 'Painéis solares num telhado sob um céu azul.',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Soluções em Energia Solar | Nury Energia',
        description: 'Projetos personalizados para residências, comércios, indústrias e agronegócio.',
        images: ['/daniele-la-rosa-messina-OiPtLN9_04w-unsplash.webp'],
    },
};

export default function EnergiaSolaServer() {
    return <EnergiaSolar />;
}
