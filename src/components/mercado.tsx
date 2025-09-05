'use client';

import { Box, Typography, Container, Grow } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import { useScrollEffect } from "../utils.tsx";

import SolarPowerIcon from '@mui/icons-material/SolarPower';
// Ícones para a nova seção de Detalhes Técnicos
import TuneIcon from '@mui/icons-material/Tune';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MonitorIcon from '@mui/icons-material/Monitor';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const mainBanner = {
    title: 'A Liberdade de Escolher a Sua Energia',
    subtitle: 'Dê o próximo passo na gestão energética da sua empresa. No Mercado Livre, você negocia diretamente com os fornecedores para garantir melhores preços e contratos.',
    imageUrl: '/nasa-Q1p7bh3SHj8-unsplash.webp',
    align: 'flex-start', // Alinha o texto à esquerda
};
const StyledCarousel = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
}));

const StyledSlide = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'imageUrl' && prop !== 'align',
}) <any>(({ theme, imageUrl, align }) => ({
    width: '100%',
    height: '100%',
    position: 'relative', // Necessário para o pseudo-elemento do overlay
    display: 'flex',
    flexDirection: 'column',
    alignItems: align || 'center', // Usa o alinhamento do objeto do banner
    justifyContent: 'center',
    padding: theme.spacing(4, 10),
    textAlign: align === 'flex-start' ? 'left' : 'center', // Alinha o texto
    
    // A imagem de fundo agora fica no pseudo-elemento ::before
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        zIndex: 1,
    },

    // O gradiente azul fica no pseudo-elemento ::after
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // O gradiente vai da esquerda (azul) para a direita (transparente)
        background: 'linear-gradient(to right, rgba(7, 36, 99, 0.7), rgba(7, 36, 99, 0.1), transparent)',
        zIndex: 2,
    },
}));
const SlideContent = styled(Box)({
    position: 'relative',
    zIndex: 3, // Garante que o conteúdo fique sobre a imagem e o gradiente
    color: 'white',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
});
const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/nasa-Q1p7bh3SHj8-unsplash.webp)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
}));

const StyledBannerContent = styled(Box)(({ theme }) => ({
    color: '#FFFFFF',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
}));


export default function Mercado() {
    // Hooks para o efeito de scroll
    const [bannerRef, bannerInView] = useScrollEffect(0.3);
    const [sectionRef, sectionInView] = useScrollEffect(0.3);
    const [detailsRef, detailsInView] = useScrollEffect(0.3); // Hook para a nova seção

    const primaryBlue = '#072463';

    return (
        <>
            {/* Banner Section com animação */}
            <Grow in={bannerInView} style={{ transformOrigin: 'top' }} timeout={1000}>
                <StyledCarousel ref={bannerRef}>
                    <StyledSlide
                        imageUrl={mainBanner.imageUrl}
                        align={mainBanner.align}
                    >
                        <SlideContent sx={{ maxWidth: '50%' }}>
                            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                                {mainBanner.title}
                            </Typography>
                            <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                                {mainBanner.subtitle}
                            </Typography>

                        </SlideContent>
                    </StyledSlide>
                </StyledCarousel>
            </Grow>

            {/* Seção Energia Solar Personalizada com animação */}
            <Grow in={sectionInView} style={{ transformOrigin: 'top' }} timeout={1000}>
                <Box ref={sectionRef} sx={{ width: '100%', py: 8, backgroundColor: '#f8f8f8' }}>
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { xs: 6, md: 10 },
                                alignItems: 'flex-start'
                            }}>
                            {/* Coluna da Esquerda: Conteúdo */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" sx={{ mb: 2 }}>
                                    Soluções Inteligentes para um Futuro Sustentável
                                </Typography>
                                <Typography variant="h6" component="h3" color={primaryBlue} sx={{ mb: 3, fontWeight: 'medium' }}>
                                    Soluções sob medida
                                </Typography>
                                <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                                    O Mercado Livre de Energia é uma oportunidade única para grandes consumidores de energia economizarem ao escolher seus fornecedores de energia. 
                                    A Nury oferece consultoria e implementação para ajudar sua empresa a navegar por esse mercado, obtendo melhores condições de fornecimento e preços mais competitivos. 
                                    Essa é a liberdade de escolher a energia que move seu negócio, com a segurança e o suporte que só a Nury pode oferecer.
                                </Typography>
                            </Box>
                            {/* Coluna da Direita: Benefícios */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" sx={{ mb: 4 }}>
                                    Benefícios
                                </Typography>
                                {/* Benefícios listados aqui... */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">   Redução de Custos Energéticos</Typography>
                                        <Typography variant="body1" color="text.secondary">  Economize ao negociar diretamente com fornecedores de energia, sem intermediários.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">  Controle Total </Typography>
                                        <Typography variant="body1" color="text.secondary">  Personalize seus contratos de energia de acordo com a demanda da sua empresa.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary"> Suporte Especializado </Typography>
                                        <Typography variant="body1" color="text.secondary">  Nossa equipe acompanha todo o processo, desde a migração até a gestão contínua do fornecimento.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Grow>

            {/* NOVA SEÇÃO: Detalhes Técnicos */}
            <Grow in={detailsInView} style={{ transformOrigin: 'top' }} timeout={1000}>
                <Box ref={detailsRef} sx={{ width: '100%', py: 8, backgroundColor: 'white' }}>
                    <Container maxWidth="lg">
                        <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" sx={{ textAlign: 'center', mb: 6 }}>
                            Detalhes Técnicos
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 4,
                            textAlign: 'center'
                        }}>
                            {/* Item 1: Sistemas Personalizados */}
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <SolarPowerIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                                   Consultoria Completa
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Projetos desenvolvidos sob medida, levando em conta a estrutura e a demanda energética da sua indústria.
                                </Typography>
                            </Box>
                            {/* Item 2: Instalação Rápida e Segura */}
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <MonitorIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                                 Monitoramento Contínuo
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                     Ferramentas para acompanhar o desempenho e otimizar o uso de energia no Mercado Livre.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Grow>
        </>
    );
}