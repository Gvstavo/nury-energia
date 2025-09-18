'use client';

import { Box, Typography, Container, Grow , Button} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import {useScrollEffect} from "../utils.tsx";
import Link from 'next/link';
// Ícones para a nova seção de valores
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const proposals = [
    'Agilidade',
    'Excelência no Atendimento',
    'Conhecimento técnico avançado',
    'Sustentabilidade e inovação como pilares centrais',
    'Resultados financeiros sólidos para nossos clientes',
    'Segurança em todas as fases do projeto, com práticas rigorosas de segurança do trabalho',
];

const values = [
    {
        icon: <LightbulbOutlinedIcon sx={{ fontSize: 60, color: '#072463' }} />,
        title: 'Propósito',
        description: 'Pensar e agir de forma inovadora, buscando, através da energia que nos move, realizar sonhos e solarizar o Sul do Brasill.',
    },
    {
        icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 60, color: '#072463' }} />,
        title: 'Missão',
        description: 'Colaboramos com a sustentabilidade do planeta, proporcionando liberdade de escolha aos nossos clientes por meio da experiência única de gerar sua própria energia com soluções customizadas e inovadoras.',
    },
    {
        icon: <StarOutlineOutlinedIcon sx={{ fontSize: 60, color: '#072463' }} />,
        title: 'Visão',
        description: 'Ser referência em excelência na eficiência energética e energia renovável na nossa região de atuação.',
    },
];
const mainBanner = {
    title: 'Nossa História, Nossos Valores',
    subtitle: 'Conheça a Nury Energia e descubra como estamos moldando um futuro mais limpo e sustentável.',
    imageUrl: '/IMG_1183.webp',
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
        backgroundPosition: 'center',
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
const StyledChecklistItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
}));

// Estilos do Banner
const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/rahul-bhogal-Ub9LkIWxyec-unsplash.webp)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 35%',
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

const StyledValueBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#F5F5F5',
    borderRadius: theme.shape.borderRadius,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-10px)',
    },
    flex: 1, // Para que os itens se ajustem e ocupem o mesmo espaço
    maxWidth: { xs: '100%', md: '30%' }, // Limita a largura em telas maiores
}));

export default function About() {
    const [sectionRef, sectionInView] = useScrollEffect(0.3);
    const [bannerRef, bannerInView] = useScrollEffect(0.3);
    const [valuesRef, valuesInView] = useScrollEffect(0.3);

    return (
        <>
            {/* Novo Banner */}
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

            {/* Seção Sobre Nós */}
            <Box
                sx={{
                    backgroundColor: '#FFFFFF',
                    padding: { xs: 4, md: 8 },
                    color: '#1A1A1A',
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        ref={sectionRef}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: { xs: 4, md: 8 },
                        }}
                    >
                        {/* Coluna da Esquerda: Proposta de Valor */}
                        <Grow in={sectionInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                            <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#072463' }}>
                                    Proposta de Valor:
                                </Typography>
                                <Box>
                                    {proposals.map((item, index) => (
                                        <StyledChecklistItem key={index}>
                                            <CheckCircleOutlineIcon sx={{ color: '#072463', mr: 1, fontSize: 20 }} />
                                            <Typography variant="body1">
                                                {item}
                                            </Typography>
                                        </StyledChecklistItem>
                                    ))}
                                </Box>
                            </Box>
                        </Grow>

                        {/* Coluna da Direita: Texto da Empresa */}
                        <Grow in={sectionInView} style={{ transformOrigin: '0 0 0' }} timeout={1500}>
                            <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
                                <Typography variant="body1" sx={{ color: '#555' }}>
                                    A Nury Energia se destaca como uma empresa visionária em soluções energéticas completas, oferecendo desde sistemas fotovoltaicos para residências, empresas e agronegócios até usinas de investimento, que garantem rentabilidade sustentável. Nosso compromisso é entregar soluções personalizadas que atendem às necessidades específicas de cada cliente, sempre com tecnologia de ponta e eficiência.
                                </Typography>
                            </Box>
                        </Grow>
                    </Box>
                </Container>
            </Box>

            {/* Seção de Valores */}
            <Box
                sx={{
                    backgroundColor: '#F9F9F9',
                    padding: { xs: 4, md: 8 },
                    color: '#1A1A1A',
                }}
            >
                <Container maxWidth="lg" ref={valuesRef}>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6, color: '#072463' }}>
                        Valores que nos movem
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'center',
                            alignItems: 'stretch', // Alinha os itens para terem a mesma altura
                            gap: { xs: 4, md: 3 },
                        }}
                    >
                        {values.map((value, index) => (
                            <Grow in={valuesInView} style={{ transformOrigin: 'top' }} timeout={1000 + index * 500} key={index}>
                                <StyledValueBox>
                                    {value.icon}
                                    <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#555' }}>
                                        {value.description}
                                    </Typography>
                                </StyledValueBox>
                            </Grow>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
}