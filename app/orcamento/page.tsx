import type { Metadata } from 'next';
import Orcamento from '@/src/components/orcamento.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Orçamento
export const metadata: Metadata = {
    title: 'Peça seu Orçamento de Energia Solar', // Resultado: "Peça seu Orçamento... | Nury Energia"
    description: 'Solicite um orçamento personalizado para seu sistema de energia solar. Economize na conta de luz com soluções para residências, agronegócio e empresas. Resposta rápida.',
    keywords: ['orçamento energia solar', 'preço painel solar', 'instalação fotovoltaica', 'simulação energia solar', 'Nury Energia orçamento', 'valor sistema fotovoltaico'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/orcamento',
    },

    // Metadados Open Graph para compartilhamento
    openGraph: {
        title: 'Peça seu Orçamento de Energia Solar | Nury Energia',
        description: 'Solicite um orçamento personalizado e descubra o quanto você pode economizar com energia solar. Soluções para residências, agronegócio e empresas.',
        url: '/orcamento',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/northfolk-Ok76F6yW2iA-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Pessoa analisando documentos para um orçamento de energia solar.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Peça seu Orçamento de Energia Solar | Nury Energia',
        description: 'Solicite um orçamento personalizado e descubra o quanto você pode economizar com energia solar.',
        images: ['/northfolk-Ok76F6yW2iA-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function OrcamentoPage() {
    return <Orcamento />;
}