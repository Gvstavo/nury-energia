'use client';

import { Box, Typography, Container, Grow } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import { useScrollEffect } from "../../src/utils.tsx";
import SolarPowerIcon from '@mui/icons-material/SolarPower';
// Ícones para a nova seção de Detalhes Técnicos
import TuneIcon from '@mui/icons-material/Tune';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MonitorIcon from '@mui/icons-material/Monitor';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/jon-moore-0MKzwPmehRE-unsplash.webp)',
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
                <StyledBanner ref={bannerRef}>
                    <StyledBannerContent>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                            Baterias e Armazenamento
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 1, maxWidth: '600px', mx: 'auto' }}>
                        </Typography>
                    </StyledBannerContent>
                </StyledBanner>
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
                                   Armazenamento Inteligente para um Futuro Sustentável
                                </Typography>
                                <Typography variant="h6" component="h3" color={primaryBlue} sx={{ mb: 3, fontWeight: 'medium' }}>
                                    Soluções sob medida
                                </Typography>
                                <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                                    Com nossas soluções de armazenamento , você pode maximizar o uso da energia solar, armazenando o excesso para uso durante a noite ou em momentos de alta demanda. 
                                    Isso não apenas aumenta a sua autonomia energética, mas também reduz os custos durante horários de pico, oferecendo uma solução completa para a gestão de energia em sua residência ou empresa.
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
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">    Redução de Custos Durante Horários de Pico   </Typography>
                                        <Typography variant="body1" color="text.secondary">  Utilize energia armazenada em momentos de alta demanda e evite tarifas elevadas.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">  Autonomia Energética </Typography>
                                        <Typography variant="body1" color="text.secondary">   Garanta o fornecimento contínuo de energia, mesmo em caso de falhas na rede.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">  Confiabilidade e Segurança </Typography>
                                        <Typography variant="body1" color="text.secondary">  Sistemas de armazenamento seguros, com monitoramento constante e suporte técnico especializado.</Typography>
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
                                   Soluções Modulares
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                     Sistemas que podem ser dimensionados para atender às suas necessidades energéticas específicas.
                                </Typography>
                            </Box>
                            {/* Item 2: Instalação Rápida e Segura */}
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <MonitorIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                                 Tecnologia de Ponta
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                     Equipamentos de armazenamento com alta eficiência e durabilidade, suportados pelas melhores marcas do mercado.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Grow>
        </>
    );
}