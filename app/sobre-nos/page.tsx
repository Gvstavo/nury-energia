import type { Metadata } from 'next';
import About from '../../src/components/about.tsx';

export const metadata: Metadata = {
    title: 'Sobre Nós - História e Valores',
    description: 'Conheça a história, a missão e os valores da Nury Energia. Descubra nosso compromisso com a excelência, inovação e sustentabilidade em soluções de energia solar.',
    keywords: ['sobre nury energia', 'história nury energia', 'missão', 'visão', 'valores', 'energia solar sustentável', 'excelência em atendimento'],
    alternates: {
        canonical: '/sobre-nos',
    },
    openGraph: {
        title: 'Sobre Nós | Nury Energia',
        description: 'Descubra nosso compromisso com a excelência e inovação em soluções de energia solar.',
        url: '/sobre-nos',
        images: [
            {
                url: '/rahul-bhogal-Ub9LkIWxyec-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Vista panorâmica de painéis solares representando a visão da Nury Energia',
            }
        ],
    },
    twitter: {
        title: 'Sobre Nós | Nury Energia',
        description: 'Descubra nosso compromisso com a excelência e inovação em soluções de energia solar.',
        images: ['/rahul-bhogal-Ub9LkIWxyec-unsplash.webp'],
    },
};

// Este é o componente da página. Ele renderiza o componente de cliente.
export default function AboutPage() {
    return <About />;
}