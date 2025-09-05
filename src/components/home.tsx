'use client';

import { Box, Typography, IconButton, Card, CardMedia, Button, Grow } from '@mui/material';
import { CardContent, Avatar, Rating, Container,    List,ListItem,ListItemIcon,ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BoltIcon from '@mui/icons-material/Bolt';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useScrollEffect } from "../utils.tsx";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link'; // Importe o Link para o botão
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const mainBanner = {
    title: 'Energia Solar é o nosso forte',
    subtitle: 'Soluções completas para residências, agronegócio e indústrias em todo o Sul do Brasil.',
    imageUrl: '/mpv-shot0108.jpg',
    align: 'flex-start', // Alinha o texto à esquerda
};
const mainSolutions = [
    {
        title: 'Energia Solar',
        description: 'Projetos personalizados para residências, comércios, indústrias e agronegócio, garantindo economia e sustentabilidade.',
        imageUrl: '/IMG_4241.webp', // Imagem representativa de energia solar
        url: '/solucoes/energia-solar' // Pode apontar para a solução principal ou uma página geral
    },
    {
        title: 'Mobilidade Elétrica',
        description: 'Instalação de carregadores para veículos elétricos, integrados com sistemas solares para uma recarga 100% limpa e econômica.',
        imageUrl: '/charger.jpeg', // Imagem de mobilidade elétrica
        url: '/solucoes/mobilidade-eletrica'
    },
    {
        title: 'Mercado Livre de Energia',
        description: 'Assessoria completa para a sua empresa migrar e operar no Mercado Livre, otimizando custos e contratos de energia.',
        imageUrl: '/83A9B1BD-1D42-41D0-9675-E8CB89D8592C.jpg', // Imagem do Mercado Livre de Energia
        url: '/solucoes/mercado-livre-energia'
    },
];

// Crie este novo array para a lista de outras soluções
const otherSolutions = [
    'Elétricas',
    'Projetos',
    'Laudos técnicos',
    'Redes elétricas para condomínios',
    'SPDA',
    'Extensões de rede e entrada de energia',
    'Automações residenciais',
    'Automações industriais',
    'Correção fator de potência',
];
const originalBanners = [
    {
        title: 'Teste de fonte',
        subtitle: '',
        imageUrl: '/mpv-shot0108.jpg',
        align: 'center',
    },
    {
        title: '',
        subtitle: '',
        imageUrl: '/dji_fly_20240408_185116_65_1712583670563_photo_optimized.jpg',
        align: 'center',
    },
    {
        title: '',
        subtitle: '',
        imageUrl: '/mpv-shot0109.jpg',
        align: 'center',
    },
];

const banners = [
    originalBanners[originalBanners.length - 1],
    ...originalBanners,
    originalBanners[0]
];

const highlightItems = [
    {
        title: 'Residencial',
        description: 'Leve a energia solar para sua casa. Economize na conta de luz e contribua para um futuro mais verde com soluções solares acessíveis e eficientes.',
        imageUrl: '/watt-a-lot-4Wl2YkDqHjU-unsplash.webp',
        url: '/solucoes/residencial'
    },
    {
        title: 'Comercial',
        description: 'Utilize energia solar, reduza os custos operacionais e melhore sua imagem corporativa com energia solar. Torne seu negócio mais sustentável e lucrativo.',
        imageUrl: '/tem-rysh-F6-U5fGAOik-unsplash.jpg',
        url: '/solucoes/comercial'
    },
    {
        title: 'Industrial',
        description: 'Transforme sua produção industrial com energia solar. Otimize seus processos e reduza drasticamente seus custos com energia e também emissões de carbono.',
        imageUrl: '/homa-appliances-pWUyHVJgLhg-unsplash.jpg',
        url: '/solucoes//industrial'
    },
];

const highlightItemsBottom = [
    {
        title: 'Rural',
        description: 'Energize suas operações agrícolas com soluções solares sustentáveis e eficientes. Reduza custos e aumente a produtividade de maneira limpa e eficiente.',
        imageUrl: '/james-smith-qg7xspO1Ozk-unsplash.jpg',
        url:'/solucoes//rural'
    },
    {
        title: 'Mobilidade elétrica',
        description: 'Com o crescimento acelerado da mobilidade elétrica no Brasil, a Nury está na vanguarda dessa transformação. ',
        imageUrl: '/chuttersnap-xJLsHl0hIik-unsplash.jpg',
        url:'/solucoes/mobilidade-eletrica'
    },
    {
        title: 'Baterias e Armazenamento',
        description: 'Maximize o uso da energia solar, armazenando o excesso para uso durante a noite ou em momentos de alta demanda.',
        imageUrl: '/jon-moore-g4PJkWiAmVo-unsplash.jpg',
        url: '/solucoes/baterias-e-armazenamento'
    },
];

const advantagesItems = [
    {
        title: 'Facilidade na Instalação',
        description: 'Nossa equipe de especialistas garante um processo de instalação rápido e sem complicações.',
        icon: <ConstructionIcon sx={{ fontSize: 60, color: '#072463' }} />,
        image: '/davis-v-8F9B6eYy-sI-unsplash.jpg',
    },
    {
        title: 'Não Polui o Meio Ambiente',
        description: 'A energia solar é uma fonte limpa que não emite poluentes, contribuindo para um futuro mais verde.',
        icon: <AcUnitIcon sx={{ fontSize: 60, color: '#072463' }} />,
        image: '/thomas-shellberg-3L_x39v80T8-unsplash.jpg',
    },
    {
        title: 'Fonte de Energia Renovável',
        description: 'O sol é uma fonte inesgotável de energia, garantindo sustentabilidade e independência energética a longo prazo.',
        icon: <AutorenewIcon sx={{ fontSize: 60, color: '#072463' }} />,
        image: '/jonathan-borba-xP5_t-G4mH0-unsplash.jpg',
    },
    {
        title: 'Estoque Próprio',
        description: 'Com a parceria da WEG, nosso estoque é um diferencial que garante acesso imediato a uma grande variedade de produtos de alta qualidade.',
        icon: <BoltIcon sx={{ fontSize: 60, color: '#072463' }} />,
        image: '/thisisengineering-ra-hYj2o0M8-unsplash.jpg',
    },
];

const cases = [
    {
        name: 'João Pedro Ernest',
        type: 'Cliente residencial',
        rating: 5,
        comment: 'Ótima experiência desde o primeiro contato com a empresa, pessoal muito bem qualificado, esclareceram todas as dúvidas, cumpriram com o prazo de entrega e hoje já nem me preocupo mais com a conta de luz. Super recomendo!!!',
        avatarUrl: '/lampada-nury.webp',
    },
    {
        name: 'João Fraga',
        type: 'Cliente residencial',
        rating: 5,
        comment: 'Preço justo, negociação célere, atendimento de qualidade, tudo isso em prol da sustentabilidade, energia solar com uma empresa séria que respeita seu cliente.',
        avatarUrl: '/lampada-nury.webp',
    },
    {
        name: 'Silvio Senw',
        type: 'Cliente residencial',
        rating: 5,
        comment: 'Tendo uma fonte de energia natural que ajuda o meio ambiente sem degradação sem dúvida é a energia solar e para que isso seja possível nada mais que ter um serviço de qualidade junto à empresa Nury Energia Solar de Osório-RS.',
        avatarUrl: 'lampada-nury.webp',
    },
];

const StyledAdvantageCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: 'black',
    padding: theme.spacing(3),
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    height: '100%',
}));

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
const StyledButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    zIndex: 10,
}));

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#072463',
    color: 'white',
    padding: theme.spacing(3),
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const StyledInfoButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#072463',
    color: 'white',
    borderRadius: '8px',
    padding: theme.spacing(1.5, 3),
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    '&:hover': {
        backgroundColor: '#007A9A',
    },
}));

const StyledHighlightCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    color: 'white',
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    height: '100%',
}));

const StyledHighlightsButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#072463',
    color: 'white',
    borderRadius: '8px',
    padding: theme.spacing(1.5, 3),
    fontWeight: 'bold',
    marginTop: 'auto',
    '&:hover': {
        backgroundColor: '#007A9A',
    },
}));

const StyledHighlightsCardContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    color: "black"
}));

const StyledHowItWorksCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    flexGrow: 1,
    margin: theme.spacing(1),
    maxWidth: '300px',
}));

const StyledHowItWorksButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#072463',
    color: 'white',
    borderRadius: '8px',
    padding: theme.spacing(1.5, 3),
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#007A9A',
    },
    textTransform: 'none',
}));

const StyledSuccessCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    height: '100%',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 90,
    height: 90,
    marginBottom: theme.spacing(2),
    border: '3px solid #072463',
}));

const sectionStyles = {
    padding: { xs: 4, md: 8 },
    textAlign: 'center',
};

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const [infoStatsRef, infoStatsInView] = useScrollEffect(0.3);
    const [infoTextRef, infoTextInView] = useScrollEffect(0.3);
    const [infoImageRef, infoImageInView] = useScrollEffect(0.3);

    const [highlightsTitleRef, highlightsTitleInView] = useScrollEffect(0.3);
    const [highlightCardInView, setHighlightCardInView] = useState(highlightItems.map(() => false));
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [howItWorksTextRef, howItWorksTextInView] = useScrollEffect(0.3);
    const [howItWorksCardInView, setHowItWorksCardInView] = useState([false, false, false]);
    const howItWorksRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [advantagesRef, advantagesInView] = useScrollEffect(0.3);
    const [advantageCardInView, setAdvantageCardInView] = useState(advantagesItems.map(() => false));
    const advantageCardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [casesTitleRef, casesTitleInView] = useScrollEffect(0.3);
    const [caseCardInView, setCaseCardInView] = useState(cases.map(() => false));
    const caseCardRefs = useRef<(HTMLDivElement | null)[]>([]);


    const handleNext = () => {
        setActiveIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (activeIndex === banners.length - 1 && isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(1);
            }, 500);
            return () => clearTimeout(timer);
        }
        if (activeIndex === 0 && isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(banners.length - 2);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [activeIndex, isTransitioning]);

    useEffect(() => {
        if (!isTransitioning) {
            requestAnimationFrame(() => setIsTransitioning(true));
        }
    }, [isTransitioning]);


    useEffect(() => {
        const observers = highlightItems.map((_, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setHighlightCardInView(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.3 });
            if (cardRefs.current[index]) {
                observer.observe(cardRefs.current[index]);
            }
            return observer;
        });

        return () => {
            observers.forEach((observer, index) => {
                if (cardRefs.current[index]) {
                    observer.unobserve(cardRefs.current[index]);
                }
            });
        };
    }, []);

    useEffect(() => {
        const observers = [0, 1, 2].map((_, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setHowItWorksCardInView(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.3 });
            if (howItWorksRefs.current[index]) {
                observer.observe(howItWorksRefs.current[index]);
            }
            return observer;
        });

        return () => {
            observers.forEach((observer, index) => {
                if (howItWorksRefs.current[index]) {
                    observer.unobserve(howItWorksRefs.current[index]);
                }
            });
        };
    }, []);

    useEffect(() => {
        const observers = advantagesItems.map((_, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setAdvantageCardInView(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.3 });
            if (advantageCardRefs.current[index]) {
                observer.observe(advantageCardRefs.current[index]);
            }
            return observer;
        });

        return () => {
            observers.forEach((observer, index) => {
                if (advantageCardRefs.current[index]) {
                    observer.unobserve(advantageCardRefs.current[index]);
                }
            });
        };
    }, []);

    useEffect(() => {
        const observers = cases.map((_, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setCaseCardInView(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.3 });
            if (caseCardRefs.current[index]) {
                observer.observe(caseCardRefs.current[index]);
            }
            return observer;
        });

        return () => {
            observers.forEach((observer, index) => {
                if (caseCardRefs.current[index]) {
                    observer.unobserve(caseCardRefs.current[index]);
                }
            });
        };
    }, []);

    return (
        <>
            <Box>
                {/* Carrossel de Banners */}
                <StyledCarousel>
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
                            <Button
                                component={Link}
                                href="/orcamento"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: 'white',
                                    color: '#072463',
                                    fontWeight: 'bold',
                                    padding: '12px 32px',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    }
                                }}
                            >
                                Peça um Orçamento
                            </Button>
                        </SlideContent>
                    </StyledSlide>
                </StyledCarousel>

                {/* Seção de Informações */}
                <Box
                    sx={{
                        ...sectionStyles,
                        backgroundColor: '#F7F7F7',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 4, md: 8 },
                    }}
                >
                    <Grow in={infoStatsInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                        <Box
                            ref={infoStatsRef}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                width: { xs: '100%', md: '30%' },
                            }}
                        >
                            <StyledCard>
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                    + de 200
                                </Typography>
                                <Typography variant="body1">
                                    Projetos executados
                                </Typography>
                            </StyledCard>
                            <StyledCard>
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                    + de 10.000
                                </Typography>
                                <Typography variant="body1">
                                    Módulos em operação
                                </Typography>
                            </StyledCard>
                            <StyledCard>
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                    13 Mil Toneladas
                                </Typography>
                                <Typography variant="body1">
                                    de CO² Reduzidas
                                </Typography>
                            </StyledCard>
                        </Box>
                    </Grow>
                    <Grow in={infoTextInView} style={{ transformOrigin: '0 0 0' }} timeout={1500}>
                        <Box
                            ref={infoTextRef}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: { xs: 'center', md: 'flex-start' },
                                textAlign: { xs: 'center', md: 'left' },
                                width: { xs: '100%', md: '30%' },
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Nury é energia limpa e economia para você
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                Somos uma empresa pioneira no Brasil em geração de energia, 100% brasileira que projeta e instala sistemas fotovoltaicos de pequeno, médio e grande porte com elevada qualidade e comprovada eficiência. Trabalhamos com os fabricantes líderes mundiais.
                            </Typography>
                            <StyledInfoButton href="/orcamento">
                                Saiba mais
                            </StyledInfoButton>
                        </Box>
                    </Grow>
                    <Grow in={infoImageInView} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
                        <Box
                            ref={infoImageRef}
                            sx={{
                                width: { xs: '100%', md: '40%' },
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image="/img_.webp"
                                alt="Reunião de negócios"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Grow>
                </Box>

                {/* Seção de Destaques */}
{/* Secção de Destaques - REESTRUTURADA */}
{/* Secção de Destaques - REESTRUTURADA */}
<Box
    sx={{
        ...sectionStyles,
        backgroundColor: '#ffffff',
    }}
>
    <Container maxWidth="lg">
        <Grow in={highlightsTitleInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
            <Box ref={highlightsTitleRef}>
                <Typography
                    variant="body1"
                    sx={{ color: '#1A1A1A', }}
                >
                    Independente da sua necessidade
                </Typography>
                <Typography
                    variant="h3"
                    sx={{ color: '#1A1A1A', mb: 6 }}
                >
                    Temos a solução energética
                    <br />
                    perfeita para si!
                </Typography>
            </Box>
        </Grow>

        {/* 3 Destaques Principais */}
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                gap: { xs: 4, md: 3 },
                mb: 8,
            }}
        >
            {mainSolutions.map((item, index) => (
                <Grow in={highlightCardInView[index]} style={{ transformOrigin: '0 0 0' }} timeout={1000 + (index * 500)} key={item.title}>
                    <StyledHighlightCard ref={el => cardRefs.current[index] = el} sx={{ flex: 1 }}>
                        <CardMedia
                            component="img"
                            image={item.imageUrl}
                            alt={item.title}
                            sx={{ height: 200, width: '100%', objectFit: 'cover' }}
                        />
                        <StyledHighlightsCardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                {item.description}
                            </Typography>
                            <Box sx={{ mt: 'auto' }}>
                                <StyledHighlightsButton href={item.url}>
                                    Saiba mais
                                </StyledHighlightsButton>
                            </Box>
                        </StyledHighlightsCardContent>
                    </StyledHighlightCard>
                </Grow>
            ))}
        </Box>

        {/* Secção "Outras Soluções" */}
        <Box sx={{ mt: 8, pt: 6, borderTop: '1px solid #e0e0e0' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1A1A1A', textAlign: 'center', mb: 1 }}>
                E muito mais...
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', mb: 4 }}>
                Contate-nos e conheça as nossas outras soluções em engenharia elétrica:
            </Typography>

            {/* AQUI ESTÁ A SUBSTITUIÇÃO DE GRID POR BOX */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: 2, // Espaçamento entre os itens
                }}
            >
                {otherSolutions.map((solution, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            // Define a largura de cada item para criar as colunas
                            width: {
                                xs: '100%', // 1 coluna em ecrãs extra pequenos
                                sm: 'calc(50% - 8px)', // 2 colunas em ecrãs pequenos (8px = metade do gap)
                                md: 'calc(33.333% - 11px)', // 3 colunas em ecrãs médios
                            },
                        }}
                    >
                        <CheckCircleOutlineIcon sx={{ color: '#072463', mr: 1.5 }} />
                        <Typography variant="body1">{solution}</Typography>
                    </Box>
                ))}
            </Box>
            
            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <StyledInfoButton href="/orcamento">
                    Fale com um especialista
                </StyledInfoButton>
            </Box>
        </Box>
    </Container>
</Box>

                {/* Seção "Como funciona" */}
 {/* Secção "Como funciona" - REESTRUTURADA */}
<Box
    sx={{
        ...sectionStyles,
        backgroundColor: '#F7F7F7',
    }}
>
    <Container maxWidth="lg">
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center', // Alinha a imagem e o texto verticalmente
                gap: { xs: 4, md: 8 },
            }}
        >
            {/* Coluna da Esquerda: Imagem Única */}
            <Grow in={howItWorksTextInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                <Box
                    ref={howItWorksTextRef} // Reutilizando a ref para a animação da secção
                    sx={{
                        flex: 1,
                        maxWidth: { xs: '100%', md: '40%' },
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/IMG_5938.jpg" // Imagem de destaque
                        alt="Análise e planeamento de projeto de energia solar"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Grow>

            {/* Coluna da Direita: Texto e Lista de Passos */}
            <Grow in={howItWorksTextInView} style={{ transformOrigin: '0 0 0' }} timeout={1500}>
                <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '60%' }, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#1A1A1A' }}>
                        Como Funciona
                    </Typography>
                    
                    {/* Texto introdutório adicionado */}
                    <Typography variant="body1" sx={{ mb: 4, color: '#555' }}>
                        Na Nury Energia, acreditamos que cada projeto é único. Por isso, desenvolvemos um processo claro e detalhado para garantir a solução perfeita para você.
                    </Typography>
                    
                    {/* Lista com os passos do processo */}
                    <List sx={{ mb: 4 }}>
                        <ListItem sx={{ alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ mt: '6px', minWidth: '40px' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#072463' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Análise das Contas"
                                secondary="O primeiro passo é uma análise detalhada do seu histórico de consumo para entendermos perfeitamente a sua necessidade energética."
                            />
                        </ListItem>
                        <ListItem sx={{ alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ mt: '6px', minWidth: '40px' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#072463' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Proposta e Contrato"
                                secondary="Com base na análise, apresentamos uma proposta comercial clara e o contrato de serviço, sem surpresas."
                            />
                        </ListItem>
                        <ListItem sx={{ alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ mt: '6px', minWidth: '40px' }}>
                                <CheckCircleOutlineIcon sx={{ color: '#072463' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Projeto e Legalização"
                                secondary="A nossa equipa de engenharia cuida de todo o projeto técnico e do processo de legalização junto da concessionária de energia."
                            />
                        </ListItem>
                    </List>

                    <StyledHowItWorksButton href="/orcamento">
                        Peça um Orçamento
                    </StyledHowItWorksButton>
                </Box>
            </Grow>
        </Box>
    </Container>
</Box>

                {/* Seção de Cases de Sucesso */}
                <Box
                    sx={{
                        ...sectionStyles,
                        backgroundColor: '#FfFfFf', // Manteve a cor de fundo cinza
                    }}
                >
                    <Container maxWidth="lg">
                        <Grow in={casesTitleInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
                            <Box ref={casesTitleRef}>
                                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 6, color: '#1A1A1A' }}>
                                    Cases de Sucesso
                                </Typography>
                            </Box>
                        </Grow>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'center',
                                gap: { xs: 4, md: 3 },
                            }}
                        >
                            {cases.map((caseItem, index) => (
                                <Grow in={caseCardInView[index]} style={{ transformOrigin: '0 0 0' }} timeout={1000 + (index * 300)} key={index}>
                                    <StyledSuccessCard ref={el => caseCardRefs.current[index] = el} sx={{ flex: 1 }}>
                                        <StyledAvatar alt={caseItem.name}>
                                            <img src={caseItem.avatarUrl} alt={caseItem.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                        </StyledAvatar>
                                        <CardContent>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#072463' }}>
                                                {caseItem.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                                                {caseItem.type}
                                            </Typography>
                                            <Rating name={`rating-${index}`} value={caseItem.rating} readOnly sx={{ mb: 2 }} />
                                            <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#1A1A1A' }}>
                                                "{caseItem.comment}"
                                            </Typography>
                                        </CardContent>
                                    </StyledSuccessCard>
                                </Grow>
                            ))}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
}