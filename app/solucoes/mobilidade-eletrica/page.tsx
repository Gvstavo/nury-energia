import type { Metadata } from 'next';
import Mobilidade from '@/src/components/mobilidade_eletrica.tsx'; // Ajuste o caminho se necessário

// Metadados otimizados para a página de Mobilidade Elétrica
export const metadata: Metadata = {
    title: 'Mobilidade Elétrica e Carregadores para Veículos Elétricos', // Resultado: "Mobilidade Elétrica... | Nury Energia"
    description: 'Soluções em mobilidade elétrica, incluindo carregadores para veículos elétricos (VEs) residenciais e comerciais. Integre com energia solar para uma recarga sustentável.',
    keywords: ['mobilidade elétrica', 'carregador de veículo elétrico', 'carregador veicular', 'recarga de carro elétrico', 'energia solar para carros elétricos', 'estação de recarga'],

    // URL Canônica para esta página
    alternates: {
        canonical: '/solucoes/mobilidade-eletrica',
    },

    // Metadados Open Graph para compartilhamento social
    openGraph: {
        title: 'Mobilidade Elétrica e Carregadores para VEs | Nury Energia',
        description: 'Descubra nossas soluções em carregadores para veículos elétricos. Recarga sustentável e econômica, integrada com energia solar.',
        url: '/solucoes/mobilidade-eletrica',
        images: [
            {
                // Usando a imagem do banner da página para o compartilhamento
                url: '/chuttersnap-xfaYAsMV1p8-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Carro elétrico sendo recarregado em uma estação de carregamento.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Mobilidade Elétrica e Carregadores para VEs | Nury Energia',
        description: 'Descubra nossas soluções em carregadores para veículos elétricos. Recarga sustentável e econômica, integrada com energia solar.',
        images: ['/chuttersnap-xfaYAsMV1p8-unsplash.webp'],
    },
};

// Componente da página que renderiza a parte do cliente.
export default function MobilidadePage() {
    return <Mobilidade />;
}