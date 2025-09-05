'use client';

import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import { Container, Grow } from '@mui/material';
import {useScrollEffect} from "../utils.tsx";
import { useState, useRef, useEffect} from 'react';
const mainBanner = {
    title: 'A Nossa Parceria Continua Após a Instalação',
    subtitle: 'O nosso compromisso é com o seu sucesso a longo prazo. Conheça as nossas soluções de suporte técnico e gestão energética que garantem a máxima performance do seu sistema solar.',
    imageUrl: '/38CF4930-11E5-441A-82E3-FAF7A15666A1.jpg',
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
const SectionWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6),
    backgroundColor: '#fff',
    padding: theme.spacing(8, 2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(12, 4),
    },
}));

const ContentRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        gap: theme.spacing(8),
    },
}));

const TextContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        alignItems: 'center',
    },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    position: 'relative',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
    minHeight: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
        minHeight: '350px',
    },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'rgba(38, 50, 56, 0.9)',
    color: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
}));

const FeatureItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));

const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/IMG_4604.webp)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 58%',
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
    flex: 1,
    maxWidth: { xs: '100%', md: '30%' },
}));

export default function Features() {
    const [bannerRef, bannerInView] = useScrollEffect(0.3);
    const [supportRef, supportInView] = useScrollEffect(0.3);
    const [managementRef, managementInView] = useScrollEffect(0.3);

    return (
        <>
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

            <SectionWrapper>
                {/* Seção 1: Suporte Técnico Completo */}
                <Grow in={supportInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                    <ContentRow ref={supportRef}>
                        <TextContent>
                            <Typography variant="body1" sx={{ color: '#072463', fontWeight: 'bold', mb: 1 }}>
                                Manutenção
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ color: '#1A1A1A', fontWeight: 'bold', mb: 2 }}>
                                Suporte Técnico Completo
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                                Na Nury, nosso compromisso com você não termina na instalação. Oferecemos suporte técnico contínuo para garantir que sua usina solar opere com a máxima eficiência. Nossa equipe está disponível para assistência técnica, manutenção preventiva, e monitoramento constante do sistema. Escolha entre nossos pacotes de suporte para obter a assistência ideal para suas necessidades.
                            </Typography>
                        </TextContent>
                        <ImageContainer sx={{ backgroundImage: 'url(/arlington-research-kN_kViDchA0-unsplash.webp)' }}>
                            <FeatureBox>
                                <FeatureItem>
                                    <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                                    <Typography variant="body2">
                                        Manutenção preventiva para evitar problemas futuros
                                    </Typography>
                                </FeatureItem>
                                <FeatureItem>
                                    <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                                    <Typography variant="body2">
                                        Assistência técnica rápida e eficiente
                                    </Typography>
                                </FeatureItem>
                            </FeatureBox>
                        </ImageContainer>
                    </ContentRow>
                </Grow>

                {/* Seção 2: Gestão Energética Premium */}
                <Grow in={managementInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                    <ContentRow ref={managementRef} sx={{ flexDirection: { xs: 'column', md: 'row-reverse' } }}>
                        <TextContent>
                            <Typography variant="body1" sx={{ color: '#072463', fontWeight: 'bold', mb: 1 }}>
                                Gestão
                            </Typography>
                            <Typography variant="h4" component="h2" sx={{ color: '#1A1A1A', fontWeight: 'bold', mb: 2 }}>
                                 Energética Premium
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                                Maximize o retorno sobre seu investimento com nossos serviços de gestão contínua. Analisamos o desempenho da sua usina solar, fornecendo relatórios personalizados e otimizações para garantir que você aproveite ao máximo sua energia solar. Acesse ferramentas de monitoramento online e receba relatórios detalhados regularmente.
                            </Typography>
                        </TextContent>
                        <ImageContainer sx={{ backgroundImage: 'url(/luke-chesser-JKUTrJ4vK00-unsplash.webp)' }}>
                            <FeatureBox>
                                <FeatureItem>
                                    <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                                    <Typography variant="body2">
                                        Relatórios personalizados de desempenho
                                    </Typography>
                                </FeatureItem>
                                <FeatureItem>
                                    <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                                    <Typography variant="body2">
                                        Otimização contínua para economia máxima
                                    </Typography>
                                </FeatureItem>
                                <FeatureItem>
                                    <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                                    <Typography variant="body2">
                                        Acesso a ferramentas de monitoramento online
                                    </Typography>
                                </FeatureItem>
                            </FeatureBox>
                        </ImageContainer>
                    </ContentRow>
                </Grow>
            </SectionWrapper>
        </>
    );
}