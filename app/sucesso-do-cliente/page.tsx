'use client';

import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';
import { Container, Grow } from '@mui/material';
import {useScrollEffect} from "../../src/utils.tsx";
import { useState, useRef, useEffect} from 'react';

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
    backgroundImage: 'url(/markus-spiske-rNn_TU8dvoY-unsplash.webp)',
    backgroundSize: 'cover',
    backgroundPosition: '25% 20%',
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
                <StyledBanner ref={bannerRef}>
                    <StyledBannerContent>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                            Sucesso do Cliente
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 1, maxWidth: '600px', mx: 'auto' }}>
                        </Typography>
                    </StyledBannerContent>
                </StyledBanner>
            </Grow>

            <SectionWrapper>
                {/* Seção 1: Suporte Técnico Completo */}
                <Grow in={supportInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                    <ContentRow ref={supportRef}>
                        <TextContent>
                            <Typography variant="body1" sx={{ color: '#00579D', fontWeight: 'bold', mb: 1 }}>
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
                            <Typography variant="body1" sx={{ color: '#00579D', fontWeight: 'bold', mb: 1 }}>
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