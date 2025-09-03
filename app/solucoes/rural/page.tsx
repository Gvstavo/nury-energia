import type { Metadata } from 'next';
import Rural from '@/src/components/rural.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Energia Solar Rural e Agronegócio
export const metadata: Metadata = {
    title: 'Energia Solar para Agronegócio e Zonas Rurais', // Resultado: "Energia Solar para Agronegócio... | Nury Energia"
    description: 'Soluções em energia solar para o agronegócio e propriedades rurais. Garanta independência energética, reduza custos operacionais e aumente a lucratividade da sua produção.',
    keywords: ['energia solar rural', 'energia solar para agronegócio', 'placa solar para fazenda', 'sistema fotovoltaico para irrigação', 'agro solar', 'energia no campo'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/solucoes/agro',
    },

    // Metadados Open Graph para compartilhamento social
    openGraph: {
        title: 'Energia Solar para Agronegócio e Zonas Rurais | Nury Energia',
        description: 'Garanta a continuidade das suas operações agrícolas com energia solar estável e econômica. Soluções robustas para o campo.',
        url: '/solucoes/agro',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/raphael-cruz-IwY-27ceRCA-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Painéis solares em uma propriedade rural ao pôr do sol.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Energia Solar para Agronegócio e Zonas Rurais | Nury Energia',
        description: 'Garanta a continuidade das suas operações agrícolas com energia solar estável e econômica. Soluções robustas para o campo.',
        images: ['/raphael-cruz-IwY-27ceRCA-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function AgroPage() {
    return <Rural />;
}