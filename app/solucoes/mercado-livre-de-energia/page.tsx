import type { Metadata } from 'next';
import Mercado from '@/src/components/mercado.tsx'; // Ajuste o caminho se necessário

export const metadata: Metadata = {
    title: 'Mercado Livre de Energia', 
    description: 'Navegue pelo Mercado Livre de Energia com a consultoria especializada da Nury Energia. Obtenha melhores preços, controle total e reduza seus custos energéticos.',
    keywords: ['mercado livre de energia', 'migração para mercado livre', 'compra de energia', 'gestão de energia', 'consultoria de energia', 'economia de energia para empresas'],

    alternates: {
        canonical: '/solucoes/mercado-livre-energia',
    },

    openGraph: {
        title: 'Mercado Livre de Energia | Nury Energia',
        description: 'Liberdade para escolher seu fornecedor de energia e economizar. Oferecemos consultoria completa para a migração e gestão no Mercado Livre.',
        url: '/solucoes/mercado-livre-energia',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/nasa-Q1p7bh3SHj8-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Imagem abstrata representando a rede de energia do Mercado Livre.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Mercado Livre de Energia | Nury Energia',
        description: 'Liberdade para escolher seu fornecedor de energia e economizar. Oferecemos consultoria completa para a migração e gestão no Mercado Livre.',
        images: ['/nasa-Q1p7bh3SHj8-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function MercadoLivrePage() {
    return <Mercado />;
}