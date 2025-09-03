import type { Metadata } from 'next';
import Industrial from '@/src/components/industrial.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Energia Solar Industrial
export const metadata: Metadata = {
    title: 'Energia Solar Industrial', // Resultado: "Energia Solar Industrial | Nury Energia"
    description: 'Soluções de energia solar em grande escala para indústrias. Maximize sua eficiência, reduza custos operacionais e atinja metas de sustentabilidade com a Nury Energia.',
    keywords: ['energia solar industrial', 'placa solar para indústria', 'sistema fotovoltaico industrial', 'eficiência energética industrial', 'redução de custos indústria', 'autonomia energética'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/solucoes/industrial',
    },

    // Metadados Open Graph para compartilhamento social
    openGraph: {
        title: 'Energia Solar Industrial | Nury Energia',
        description: 'Projetos robustos de energia solar para indústrias, garantindo eficiência, confiabilidade e redução significativa dos custos operacionais.',
        url: '/solucoes/industrial',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/chuttersnap-9cCeS9Sg6nU-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Painéis solares instalados em uma grande planta industrial.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Energia Solar Industrial | Nury Energia',
        description: 'Projetos robustos de energia solar para indústrias, garantindo eficiência, confiabilidade e redução significativa dos custos operacionais.',
        images: ['/chuttersnap-9cCeS9Sg6nU-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function IndustrialPage() {
    return <Industrial />;
}