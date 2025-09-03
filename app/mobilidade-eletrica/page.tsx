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
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import EvStationIcon from '@mui/icons-material/EvStation';
const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/chuttersnap-xfaYAsMV1p8-unsplash.webp)',
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


export default function Mobilidade() {
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
                            Mobilidade Elétrica
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
                                    O futuro da mobilidade começa aqui
                                </Typography>
                                <Typography variant="h6" component="h3" color={primaryBlue} sx={{ mb: 3, fontWeight: 'medium' }}>
                                    Soluções sob medida
                                </Typography>
                                <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                                    Com o crescimento acelerado da mobilidade elétrica no Brasil, a Nury está na vanguarda dessa transformação. 
                                    Nossas soluções incluem carregadores para veículos elétricos que podem ser integrados com sistemas solares, proporcionando uma recarga sustentável e econômica. 
                                    Com opções de carregadores para diferentes necessidades, desde residenciais até comerciais, estamos prontos para ajudar você a fazer parte do futuro da mobilidade.
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
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">   Redução de Custos de Recarga  </Typography>
                                        <Typography variant="body1" color="text.secondary">  Use a energia solar para recarregar veículos elétricos, reduzindo ainda mais os custos operacionais.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary"> Sustentabilidade </Typography>
                                        <Typography variant="body1" color="text.secondary">  Contribua para a redução das emissões de CO² e faça parte da transição para um futuro mais limpo.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <CheckCircleOutlineIcon sx={{ color: primaryBlue, fontSize: 24, mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary">  Versatilidade e Conectividade  </Typography>
                                        <Typography variant="body1" color="text.secondary"> Carregadores compatíveis com diversas tensões e conectividade avançada via Wi-Fi e 4G.</Typography>
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
                                <EvStationIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                                   Carregadores Personalizados
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                     Soluções que vão desde carregadores domésticos até infraestruturas de carregamento para frotas empresariais.
                                </Typography>
                            </Box>
                            {/* Item 2: Instalação Rápida e Segura */}
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <SystemUpdateAltIcon sx={{ fontSize: '3rem', color: primaryBlue, mb: 2 }} />
                                <Typography variant="h6" component="h3" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
                                  Atualizações e Suporte
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                      Carregadores com atualizações remotas e suporte contínuo para garantir a máxima eficiência.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Grow>
        </>
    );
}