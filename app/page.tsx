import type { Metadata } from 'next';
import Home from '@/src/components/home.tsx'; // Supondo que seu conteúdo esteja em um componente de cliente

// Metadados otimizados especificamente para a Homepage
export const metadata: Metadata = {
    // O título principal do seu site. Ele usará o `default` que você definiu no template do layout.
    // Não precisa reescrever o title aqui, a menos que queira um diferente do `default` do layout.
    
    // A descrição é a mais importante. Deve ser o seu "elevator pitch".
    description: 'Nury Energia: Líder em soluções de energia solar no Sul do Brasil. Oferecemos projetos personalizados para residências, agronegócio e indústrias. Reduza sua conta e invista em um futuro sustentável.',

    // Palavras-chave mais importantes e abrangentes do seu negócio
    keywords: ['energia solar', 'Nury Energia', 'painel solar Rio Grande do Sul', 'energia fotovoltaica', 'soluções em energia', 'economia de energia', 'sustentabilidade'],

    // A URL Canônica da homepage é a raiz do site. Essencial para SEO.
    alternates: {
        canonical: '/',
    },

    // O Open Graph da homepage deve ser o mais atrativo possível
    openGraph: {
        title: 'Nury Energia - Soluções Completas em Energia Solar', // Título principal para compartilhamento
        description: 'Líder em projetos de energia solar para residências, agronegócio e indústrias no Sul do Brasil. Peça seu orçamento e comece a economizar.',
        url: '/', // A URL principal do site
        // A imagem aqui deve ser a principal da sua marca
        images: [
            {
                url: '/og-image-home.png', // Recomendo uma imagem específica para a home
                width: 1200,
                height: 630,
                alt: 'Projetos de energia solar da Nury Energia.',
            }
        ],
    },

    // O Twitter Card também deve ser específico para a home
    twitter: {
        title: 'Nury Energia - Soluções Completas em Energia Solar',
        description: 'Líder em projetos de energia solar para residências, agronegócio e indústrias no Sul do Brasil.',
        images: ['/og-image-home.png'],
    },
};

export default function HomePage() {
    // Renderiza o componente de cliente que contém a interface da sua homepage
    return <Home />;
}