import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = 'https://nury-energia.vercel.app'; // 1. Substitua pelo seu domínio oficial

    // Lista de todas as suas páginas estáticas
    const staticRoutes = [
        '/',
        '/sobre-nos',
        '/sucesso-do-cliente',
        '/orcamento',
        '/blog',
        '/solucoes/residencial',
        '/solucoes/comercial',
        '/solucoes/industrial',
        '/solucoes/agro',
        '/solucoes/mobilidade-eletrica',
        '/solucoes/mercado-livre-energia',
        '/solucoes/baterias-e-armazenamento',
    ];

    // Mapeia as rotas estáticas para o formato do sitemap
    const staticUrls = staticRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        // Defina prioridades diferentes para páginas chave
        priority: route === '/' ? 1.0 : 0.8,
        changeFrequency: 'monthly' as 'monthly',
    }));
    
    // --- Seção para rotas dinâmicas (ex: posts de blog) ---
    // Exemplo: Supondo que você tenha posts de blog dinâmicos em /blog/[slug]
    // Você buscaria os dados dos seus posts aqui (de um CMS, banco de dados, etc.)
    // const posts = await fetch('URL_DA_SUA_API_DE_POSTS').then((res) => res.json());

    // const dynamicBlogUrls = posts.map((post) => ({
    //     url: `${BASE_URL}/blog/${post.slug}`,
    //     lastModified: new Date(post.updatedAt).toISOString(),
    //     priority: 0.6,
    //     changeFrequency: 'yearly',
    // }));

    return [
        ...staticUrls,
        // ...dynamicBlogUrls, // Descomente quando tiver posts de blog dinâmicos
    ];
}