'use client';

import { Box, Typography, Container, Grow, CardMedia, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import { useScrollEffect } from "../utils.tsx";
import { useRef, useEffect } from 'react';
import Link from 'next/link';

// 1. Dados para o novo banner e as secções
const mainBanner = {
    title: 'Transforme o Sol em Economia',
    subtitle: 'Oferecemos soluções completas em energia solar para residências, comércios, indústrias e agronegócio. Descubra o projeto ideal para si.',
    imageUrl: '/dji_fly_20240408_185116_65_1712583670563_photo_optimized.jpg',
    align: 'flex-start',
};

const solarSolutions = [
    {
        image: '/mpv-shot0117.jpg',
        title: 'Energia Solar Residencial',
        subtitle: 'Conforto e Economia para o seu Lar',
        description: 'Reduza a sua conta de luz em até 95% e valorize o seu imóvel. Projetamos sistemas personalizados que se integram perfeitamente à sua casa, garantindo eficiência e um futuro mais sustentável para a sua família.',
        url: '/solucoes/residencial'
    },
    {
        image: '/comercial.jpeg',
        title: 'Energia Solar Comercial',
        subtitle: 'Fortaleça a Sua Marca e Reduza Custos',
        description: 'Posicione a sua empresa como líder em sustentabilidade. Nossas soluções para o setor comercial não só diminuem os custos operacionais, mas também melhoram a sua imagem corporativa junto de clientes e investidores.',
        url: '/solucoes/comercial'
    },
    {
        image: '/rural.jpeg',
        title: 'Energia Solar Rural',
        subtitle: 'Sustentabilidade e Eficiência no Campo',
        description: 'Garanta a continuidade das suas operações agrícolas com energia estável e econômica. Oferecemos sistemas robustos, projetados para suportar as condições do campo e aumentar a rentabilidade da sua propriedade.',
        url: '/solucoes/agro'
    },
    {
        image: '/mpv-shot0109.jpg',
        title: 'Usinas de Grande Porte',
        subtitle: 'Investimento e Geração em Larga Escala',
        description: 'Para investidores e grandes consumidores, projetamos e implementamos usinas solares de alta performance que garantem rentabilidade sustentável e contribuem de forma significativa para a matriz energética limpa do país.',
        url: '/solucoes/usinas-solares' // Supondo que esta seja a URL
    }
];

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

// Componente reutilizável para as seções
const ContentSection = ({ data, imagePosition, bgColor, inView, sectionRef }: any) => {
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
                        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' }, borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)' }}>
                            <CardMedia component="img" image={data.image} alt={data.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" sx={{ mb: 2 }}>
                                {data.title}
                            </Typography>
                            <Typography variant="h6" component="h3" color={primaryBlue} sx={{ mb: 3, fontWeight: 'medium' }}>
                                {data.subtitle}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                                {data.description}
                            </Typography>
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
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Grow>
    );
};

export default function EnergiaSolar() {
    const [bannerRef, bannerInView] = useScrollEffect(0.3);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionInViews = solarSolutions.map(() => useScrollEffect(0.3));

    return (
        <>
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

            {/* 2. Mapeamento das secções com lógica de alternância */}
            {solarSolutions.map((solution, index) => {
                const [sectionRef, inView] = sectionInViews[index];
                return (
                    <ContentSection
                        key={index}
                        data={solution}
                        imagePosition={index % 2 === 0 ? 'left' : 'right'}
                        bgColor={index % 2 === 0 ? '#ffffff' : '#f7f7f7'}
                        inView={inView}
                        sectionRef={sectionRef}
                    />
                );
            })}
        </>
    );
}
