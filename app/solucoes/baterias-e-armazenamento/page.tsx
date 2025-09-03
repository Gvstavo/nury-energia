import type { Metadata } from 'next';
import Baterias from '@/src/components/baterias.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Baterias e Armazenamento
export const metadata: Metadata = {
    title: 'Baterias e Armazenamento de Energia Solar', // Resultado: "Baterias e Armazenamento... | Nury Energia"
    description: 'Soluções em baterias e armazenamento para maximizar o uso da sua energia solar. Garanta autonomia energética, reduza custos em horários de pico e tenha energia contínua.',
    keywords: ['baterias para energia solar', 'armazenamento de energia solar', 'banco de baterias fotovoltaico', 'sistema de armazenamento de energia', 'autonomia energética', 'backup de energia'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/solucoes/baterias-e-armazenamento',
    },

    // Metadados Open Graph para compartilhamento social
    openGraph: {
        title: 'Baterias e Armazenamento de Energia Solar | Nury Energia',
        description: 'Maximize sua autonomia e economize mais com nossos sistemas de armazenamento de energia. Energia garantida, mesmo sem sol.',
        url: '/solucoes/baterias-e-armazenamento',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/jon-moore-0MKzwPmehRE-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Sistema moderno de baterias para armazenamento de energia solar.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Baterias e Armazenamento de Energia Solar | Nury Energia',
        description: 'Maximize sua autonomia e economize mais com nossos sistemas de armazenamento de energia. Energia garantida, mesmo sem sol.',
        images: ['/jon-moore-0MKzwPmehRE-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function BateriasPage() {
    return <Baterias />;
}