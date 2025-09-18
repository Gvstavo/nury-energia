'use client';

import { Box, Typography, Container, Grow, CardMedia, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import { useScrollEffect } from "../utils.tsx";
import Link from 'next/link';

// Ícones para a seção de Detalhes Técnicos
import EvStationIcon from '@mui/icons-material/EvStation';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const mainBanner = {
    title: 'Conduza o Futuro. Abasteça com o Sol.',
    subtitle: 'Integre carregadores de veículos elétricos ao seu sistema de energia solar e experimente a verdadeira mobilidade 100% limpa e sustentável.',
    imageUrl: '/6.webp',
    align: 'flex-start',
};

// ... (StyledCarousel, StyledSlide, SlideContent - sem alterações)
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: align || 'center',
    justifyContent: 'center',
    padding: theme.spacing(4, 10),
    textAlign: align === 'flex-start' ? 'left' : 'center',
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
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(7, 36, 99, 0.7), rgba(7, 36, 99, 0.1), transparent)',
        zIndex: 2,
    },
}));

const SlideContent = styled(Box)({
    position: 'relative',
    zIndex: 3,
    color: 'white',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
});

// Componente reutilizável para as seções de conteúdo (COM O BOTÃO ADICIONADO)
const ContentSection = ({ image, title, subtitle, description, imagePosition = 'left', bgColor = '#ffffff', inView, sectionRef, showOrcamentoButton = false }: any) => {
    const primaryBlue = '#072463';
    
    return (
        <Grow in={inView} style={{ transformOrigin: 'top' }} timeout={1000}>
            <Box ref={sectionRef} sx={{ width: '100%', py: 8, backgroundColor: bgColor }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: imagePosition === 'left' ? 'row' : 'row-reverse' },
                        gap: { xs: 4, md: 8 },
                        alignItems: 'center',
                    }}>
                        {/* Coluna da Imagem */}
                        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' }, borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)' }}>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={title}
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                        {/* Coluna do Texto */}
                        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" sx={{ mb: 2 }}>
                                {title}
                            </Typography>
                            <Typography variant="h6" component="h3" color={primaryBlue} sx={{ mb: 3, fontWeight: 'medium' }}>
                                {subtitle}
                            </Typography>
                            {description}
                            {/* Lógica para mostrar o botão */}
                            {showOrcamentoButton && (
                                <Button 
                                    component={Link} 
                                    href="/orcamento" 
                                    variant="contained" 
                                    sx={{ 
                                        mt: 3, 
                                        backgroundColor: primaryBlue, 
                                        '&:hover': { backgroundColor: '#051a4a' } 
                                    }}
                                >
                                    Pedir Orçamento
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Grow>
    );
};


export default function Mobilidade() {
    const [bannerRef, bannerInView] = useScrollEffect(0.3);
    const [section1Ref, section1InView] = useScrollEffect(0.3);
    const [section2Ref, section2InView] = useScrollEffect(0.3);
    const [detailsRef, detailsInView] = useScrollEffect(0.3);

    const primaryBlue = '#072463';

    return (
        <>
            {/* Banner Section */}
            <Grow in={bannerInView} style={{ transformOrigin: 'top' }} timeout={1000}>
                <StyledCarousel ref={bannerRef}>
                    <StyledSlide imageUrl={mainBanner.imageUrl} align={mainBanner.align}>
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

            {/* Seção 1: O Futuro da Mobilidade (com botão) */}
            <ContentSection
                image="/IMG_2775.webp"
                title="O Futuro da Mobilidade Começa Aqui"
                subtitle="Soluções de Carregamento Sob Medida"
                description={
                    <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                        Com o crescimento acelerado da mobilidade elétrica no Brasil, a Nury está na vanguarda dessa transformação. Nossas soluções incluem carregadores para veículos elétricos que podem ser integrados com sistemas solares, proporcionando uma recarga sustentável e econômica.
                    </Typography>
                }
                imagePosition="left"
                bgColor="#ffffff"
                inView={section1InView}
                sectionRef={section1Ref}
                showOrcamentoButton={true} // <-- Botão ativado
            />

            {/* Seção 2: Benefícios da Recarga Inteligente (com botão) */}
            <ContentSection
                image="/nury_pref.jpg"
                title="Benefícios da Recarga Inteligente"
                subtitle="Economia, Sustentabilidade e Tecnologia"
                description={
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, textAlign: 'left' }}>
                            <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                            <Box>
                                <Typography variant="h6" component="h3" fontWeight="bold">Redução de Custos</Typography>
                                <Typography variant="body1" color="text.secondary">Use a sua própria energia solar para recarregar veículos elétricos, reduzindo drasticamente os custos operacionais.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, textAlign: 'left' }}>
                            <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                            <Box>
                                <Typography variant="h6" component="h3" fontWeight="bold">Sustentabilidade</Typography>
                                <Typography variant="body1" color="text.secondary">Faça parte da transição para um futuro mais limpo, contribuindo para a redução das emissões de CO².</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}>
                            <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                            <Box>
                                <Typography variant="h6" component="h3" fontWeight="bold">Versatilidade e Conectividade</Typography>
                                <Typography variant="body1" color="text.secondary">Nossos carregadores são compatíveis com diversas tensões e possuem conectividade avançada via Wi-Fi e 4G.</Typography>
                            </Box>
                        </Box>
                    </Box>
                }
                imagePosition="right"
                bgColor="#f7f7f7"
                inView={section2InView}
                sectionRef={section2Ref}
                showOrcamentoButton={true} // <-- Botão ativado
            />

            {/* Seção de Detalhes Técnicos */}
            <Grow in={detailsInView} style={{ transformOrigin: 'top' }} timeout={1000}>
                <Box ref={detailsRef} sx={{ width: '100%', py: 8, backgroundColor: 'white' }}>
                    <Container maxWidth="lg">
                        <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" sx={{ textAlign: 'center', mb: 6 }}>
                            Detalhes Técnicos
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, textAlign: 'center' }}>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <EvStationIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold">Carregadores Personalizados</Typography>
                                <Typography variant="body1" color="text.secondary">Soluções que vão desde carregadores domésticos até infraestruturas para frotas empresariais.</Typography>
                            </Box>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <SystemUpdateAltIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold">Atualizações e Suporte</Typography>
                                <Typography variant="body1" color="text.secondary">Carregadores com atualizações remotas e suporte contínuo para garantir a máxima eficiência.</Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Grow>
        </>
    );
}
