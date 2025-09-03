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
const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/chuttersnap-9cCeS9Sg6nU-unsplash.webp)',
    backgroundSize: 'cover',
    backgroundPosition: '25% 15%',
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


export default function Industrial() {
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
                            Energia solar industrial
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
                                    Eficiência Energética em Grande Escala
                                </Typography>
                                <Typography variant="h6" component="h3" color={primaryBlue} sx={{ mb: 3, fontWeight: 'medium' }}>
                                    Soluções sob medida
                                </Typography>
                                <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                                    Maximize a competitividade da sua indústria com sistemas de energia solar robustos e personalizados. 
                                    A Nury entende as demandas energéticas das grandes indústrias e oferece soluções que garantem eficiência, confiabilidade e redução significativa dos custos operacionais. 
                                    Nossos projetos são desenvolvidos para se integrar perfeitamente às operações industriais, minimizando interrupções e garantindo uma transição suave para a energia renovável.
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
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">  Redução Significativa de Custos  </Typography>
                                        <Typography variant="body1" color="text.secondary"> Economize milhões em despesas energéticas com um sistema solar projetado para grandes consumidores.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">  Conformidade Ambiental </Typography>
                                        <Typography variant="body1" color="text.secondary"> Atenda a exigências regulatórias ambientais e melhore sua posição competitiva no mercado.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary"> Autonomia Energética </Typography>
                                        <Typography variant="body1" color="text.secondary"> Reduza a dependência das concessionárias e proteja sua operação contra flutuações de preços de energia.</Typography>
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
                                   Soluções Personalizadas
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Projetos desenvolvidos sob medida, levando em conta a estrutura e a demanda energética da sua indústria.
                                </Typography>
                            </Box>
                            {/* Item 2: Instalação Rápida e Segura */}
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <SupportAgentIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                                   Suporte Completo
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                     Desde a instalação até a manutenção, nossa equipe oferece suporte contínuo para garantir o melhor desempenho do sistema.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Grow>
        </>
    );
}