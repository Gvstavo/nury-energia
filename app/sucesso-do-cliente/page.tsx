import type { Metadata } from 'next';
import Features from '../../src/components/sucesso_cliente.tsx';


export const metadata: Metadata = {
    title: 'Sucesso do Cliente',
    description: 'Conheça nosso compromisso com o seu sucesso. Oferecemos suporte técnico completo, manutenção preventiva e gestão energética premium para sua usina solar.',
    keywords: ['sucesso do cliente', 'suporte técnico energia solar', 'manutenção painel solar', 'gestão energética', 'monitoramento de usina', 'pós-venda Nury Energia'],

    alternates: {
        canonical: '/sucesso-do-cliente',
    },

    openGraph: {
        title: 'Sucesso do Cliente | Nury Energia',
        description: 'Oferecemos suporte técnico completo e gestão energética premium para garantir a máxima eficiência da sua usina solar.',
        url: '/sucesso-do-cliente',
        images: [
            {
                url: '/markus-spiske-rNn_TU8dvoY-unsplash.webp',
                width: 1200,
                height: 630,
                alt: 'Técnico realizando manutenção em painéis solares.',
            }
        ],
    },

    // Metadados do Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Sucesso do Cliente | Nury Energia',
        description: 'Oferecemos suporte técnico completo e gestão energética premium para garantir a máxima eficiência da sua usina solar.',
        images: ['/markus-spiske-rNn_TU8dvoY-unsplash.webp'],
    },
};

// Este é o componente da página que renderiza a parte do cliente.
export default function CustomerSuccessPage() {
    return <Features />;
}