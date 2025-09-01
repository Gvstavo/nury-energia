'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, IconButton, Card, CardMedia, Button, Grow } from '@mui/material';
import { CardContent, Avatar, Rating, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AcUnitIcon from '@mui/icons-material/AcUnit'; // Ícone de "Não polui o meio ambiente"
import AutorenewIcon from '@mui/icons-material/Autorenew'; // Ícone de "Fonte de energia renovável"
import BoltIcon from '@mui/icons-material/Bolt'; // Ícone de "Estoque Próprio"
import ConstructionIcon from '@mui/icons-material/Construction'; 
// Hook personalizado para detectar visibilidade no scroll
const useScrollEffect = (threshold = 0.5) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const handleIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setInView(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, { threshold });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [handleIntersect, threshold]);

  return [ref, inView];
};

const originalBanners = [
  {
    title: 'CONECTANDO VOCÊ AO',
    subtitle: 'FUTURO DA MOBILIDADE ELÉTRICA',
    imageUrl: '/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg', // Imagem de exemplo
    align: 'left',
  },
  {
    title: 'SOLUÇÕES COMPLETAS PARA',
    subtitle: 'ENERGIA SOLAR RESIDENCIAL',
    imageUrl: '/chelsea-WvusC5M-TM8-unsplash.jpg', // Imagem de exemplo
    align: 'right',
  },
  {
    title: 'EFICIÊNCIA ENERGÉTICA',
    subtitle: 'PARA O SEU NEGÓCIO',
    imageUrl: '/anders-j-hxUcl0nUsIY-unsplash.jpg', // Imagem de exemplo
    align: 'left',
  },
];

// Crie a lista de banners circular duplicando o primeiro e o último item
const banners = [
  originalBanners[originalBanners.length - 1],
  ...originalBanners,
  originalBanners[0]
];

const highlightItems = [
  {
    title: 'Residencial',
    description: 'Transforme a sua casa em um exemplo de sustentabilidade e economia com a energia solar.',
    imageUrl: '/benjamin-child-GWe0dlVD9e0-unsplash.jpg', // Imagem de exemplo
  },
  {
    title: 'Comercial',
    description: 'Utilize energia solar, reduza os custos operacionais e melhore sua imagem corporativa com energia solar. Torne seu negócio mais sustentável e lucrativo.',
    imageUrl: '/chelsea-WvusC5M-TM8-unsplash.jpg', // Imagem de exemplo
  },
  {
    title: 'Industrial',
    description: 'Transforme sua produção industrial com energia solar. Otimize seus processos e reduza drasticamente seus custos com energia e também emissões de carbono.',
    imageUrl: '/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg', // Imagem de exemplo
  },



];

const highlightItemsBottom = [
  {
    title: 'Agro',
    description: 'Energize suas operações agrícolas com soluções solares sustentáveis e eficientes. Reduza custos e aumente a produtividade de maneira limpa e eficiente.',
    imageUrl: '/benjamin-child-GWe0dlVD9e0-unsplash.jpg', // Imagem de exemplo
  },
  {
    title: 'Imobiliário',
    description: 'Adicione valor aos seus empreendimentos imobiliários com energia solar. Atraia compradores e inquilinos ao oferecer soluções sustentáveis e econômicas.',
    imageUrl: '/chelsea-WvusC5M-TM8-unsplash.jpg', // Imagem de exemplo
  },
  {
    title: 'Usinas',
    description: 'Construa e opere usinas solares de grande porte. Beneficie-se de uma energia limpa, renovável e de baixo custo para abastecer comunidades inteiras. Gerando renda e economia.',
    imageUrl: '/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg', // Imagem de exemplo
  },



];
const advantagesItems = [
  {
    title: 'Facilidade na Instalação',
    description: 'Nossa equipe de especialistas garante um processo de instalação rápido e sem complicações.',
    icon: <ConstructionIcon sx={{ fontSize: 60, color: '#00579D' }} />,
    image: '/davis-v-8F9B6eYy-sI-unsplash.jpg',
  },
  {
    title: 'Não Polui o Meio Ambiente',
    description: 'A energia solar é uma fonte limpa que não emite poluentes, contribuindo para um futuro mais verde.',
    icon: <AcUnitIcon sx={{ fontSize: 60, color: '#00579D' }} />,
    image: '/thomas-shellberg-3L_x39v80T8-unsplash.jpg',
  },
  {
    title: 'Fonte de Energia Renovável',
    description: 'O sol é uma fonte inesgotável de energia, garantindo sustentabilidade e independência energética a longo prazo.',
    icon: <AutorenewIcon sx={{ fontSize: 60, color: '#00579D' }} />,
    image: '/jonathan-borba-xP5_t-G4mH0-unsplash.jpg',
  },
  {
    title: 'Estoque Próprio',
    description: 'Com a parceria da WEG, nosso estoque é um diferencial que garante acesso imediato a uma grande variedade de produtos de alta qualidade.',
    icon: <BoltIcon sx={{ fontSize: 60, color: '#00579D' }} />,
    image: '/thisisengineering-ra-hYj2o0M8-unsplash.jpg',
  },
];

const cases = [
    {
      name: 'João Pedro Ernest',
      type: 'Cliente residencial',
      rating: 5,
      comment: 'Ótima experiência desde o primeiro contato com a empresa, pessoal muito bem qualificado, esclareceram todas as dúvidas, cumpriram com o prazo de entrega e hoje já nem me preocupo mais com a conta de luz. Super recomendo!!!',
      avatarUrl: '/lampada-nury.webp', // Adicione a URL da imagem de avatar aqui
    },
    {
      name: 'João Fraga',
      type: 'Cliente residencial',
      rating: 5,
      comment: 'Preço justo, negociação célere, atendimento de qualidade, tudo isso em prol da sustentabilidade, energia solar com uma empresa séria que respeita seu cliente.',
      avatarUrl: '/lampada-nury.webp', // Adicione a URL da imagem de avatar aqui
    },
    {
      name: 'Silvio Senw',
      type: 'Cliente residencial',
      rating: 5,
      comment: 'Tendo uma fonte de energia natural que ajuda o meio ambiente sem degradação sem dúvida é a energia solar e para que isso seja possível nada mais que ter um serviço de qualidade junto à empresa Nury Energia Solar de Osório-RS.',
      avatarUrl: 'lampada-nury.webp', // Adicione a URL da imagem de avatar aqui
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledSlide = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'imageUrl' && prop !== 'align',
})<any>(({ theme, imageUrl, align }) => ({
  flexShrink: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: align,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8),
  },
}));

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

// Seção de Informações
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#00579D',
  color: 'white',
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const StyledInfoButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00579D',
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
  backgroundColor: '#00579D',
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
  backgroundColor: '#00579D',
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
  border: '3px solid #00579D',
}));
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1); // Começa no primeiro slide real (índice 1)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Refs e estados para as seções com scroll effect
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

  // Use useEffect para gerenciar o "teletransporte"
  useEffect(() => {
    if (activeIndex === banners.length - 1 && isTransitioning) {
      // Se chegou no último slide duplicado, prepara o teletransporte
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Desativa a transição
        setActiveIndex(1); // Volta para o primeiro slide real
      }, 500); // O tempo de espera deve ser igual à duração da transição
      return () => clearTimeout(timer);
    }
    if (activeIndex === 0 && isTransitioning) {
      // Se chegou no primeiro slide duplicado, prepara o teletransporte
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(banners.length - 2); // Volta para o último slide real
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isTransitioning]);

  // Reativa a transição após o teletransporte
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);


  // Efeito de scroll para os cards de destaque
  useEffect(() => {
    const observers = highlightItems.map((_, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setHighlightCardInView(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          observer.unobserve(entry.target); // Observa apenas uma vez
        }
      }, { threshold: 0.3 });
      if (cardRefs.current[index]) {
        observer.observe(cardRefs.current[index]!);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardRefs.current[index]) {
          observer.unobserve(cardRefs.current[index]!);
        }
      });
    };
  }, []);

    // Efeito de scroll para os cards "Como Funciona"
    useEffect(() => {
      const observers = [0, 1, 2].map((_, index) => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setHowItWorksCardInView(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target); // Observa apenas uma vez
          }
        }, { threshold: 0.3 });
        if (howItWorksRefs.current[index]) {
          observer.observe(howItWorksRefs.current[index]!);
        }
        return observer;
      });
  
      return () => {
        observers.forEach((observer, index) => {
          if (howItWorksRefs.current[index]) {
            observer.unobserve(howItWorksRefs.current[index]!);
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
      observer.observe(advantageCardRefs.current[index]!);
    }
    return observer;
  });

  return () => {
    observers.forEach((observer, index) => {
      if (advantageCardRefs.current[index]) {
        observer.unobserve(advantageCardRefs.current[index]!);
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
        observer.observe(caseCardRefs.current[index]!);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (caseCardRefs.current[index]) {
          observer.unobserve(caseCardRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <>
      <Box>
        {/* Carrossel de Banners */}
        <StyledCarousel>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {banners.map((banner, index) => (
              <StyledSlide
                key={index}
                imageUrl={banner.imageUrl}
                align={banner.align}
              >
                <Box sx={{
                  width: { xs: '100%', md: '50%' },
                  textAlign: banner.align,
                }}>
                  <Typography variant="h4" component="h1" sx={{ color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', mb: 1, textTransform: 'uppercase' }}>
                    {banner.title}
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', textTransform: 'uppercase' }}>
                    {banner.subtitle}
                  </Typography>
                </Box>
              </StyledSlide>
            ))}
          </Box>

          <StyledButton onClick={handlePrev} sx={{ left: { xs: 8, md: 20 } }}>
            <ArrowBackIosIcon />
          </StyledButton>
          <StyledButton onClick={handleNext} sx={{ right: { xs: 8, md: 20 } }}>
            <ArrowForwardIosIcon />
          </StyledButton>
        </StyledCarousel>

        {/* Seção de Informações Adicionada */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            padding: { xs: 4, md: 10 },
            backgroundColor: '#F7F7F7',
          }}
        >
          {/* Container das estatísticas */}
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
                  96 MW
                </Typography>
                <Typography variant="body1">
                  de Potência Instalada
                </Typography>
              </StyledCard>
              <StyledCard>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  R$ 100 Milhões
                </Typography>
                <Typography variant="body1">
                  em Economia Anual
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

          {/* Container de texto e botão */}
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
                Somos uma empresa pioneira no Brasil em geração de energia, 100% brasileira que
                projeta e instala sistemas fotovoltaicos de pequeno, médio e grande porte com elevada
                qualidade e comprovada eficiência. Trabalhamos com os fabricantes líderes mundiais.
              </Typography>
              <StyledInfoButton>
                Saiba mais
              </StyledInfoButton>
            </Box>
          </Grow>

          {/* Container da imagem */}
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
                image="/benjamin-child-GWe0dlVD9e0-unsplash.jpg"
                alt="Reunião de negócios"
                sx={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          </Grow>
        </Box>
      </Box>

      {/* Seção de destaques adicionada */}
      <Box
        sx={{
          backgroundColor: '#F7F7F7 ',
          padding: { xs: 4, md: 8 },
          textAlign: 'center',
        }}
      >
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
              perfeita pra você!
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
          {highlightItems.map((item, index) => (
            <Grow in={highlightCardInView[index]} style={{ transformOrigin: '0 0 0' }} timeout={1000 + (index * 500)} key={index}>
              <StyledHighlightCard ref={el => cardRefs.current[index] = el} sx = {{flex: 1}}>
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                  }}
                />
                <StyledHighlightsCardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <StyledHighlightsButton>
                      Saiba mais
                    </StyledHighlightsButton>
                  </Box>
                </StyledHighlightsCardContent>
              </StyledHighlightCard>
            </Grow>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: { xs: 4, md: 3 },
          }}
        >
          {highlightItemsBottom.map((item, index) => (
            <Grow in={highlightCardInView[index]} style={{ transformOrigin: '0 0 0' }} timeout={1000 + (index * 500)} key={index}>
              <StyledHighlightCard ref={el => cardRefs.current[index] = el} sx = {{flex: 1, marginTop:  3}}>
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{
                    height: 200,
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                  }}
                />
                <StyledHighlightsCardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <StyledHighlightsButton>
                      Saiba mais
                    </StyledHighlightsButton>
                  </Box>
                </StyledHighlightsCardContent>
              </StyledHighlightCard>
            </Grow>
          ))}
        </Box>
      </Box>

      {/* Seção "Como funciona" */}
      <Box
        sx={{
          backgroundColor: '#F7F7F7', // Cor de fundo da seção na imagem
          padding: { xs: 4, md: 8 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start', // Alinha os itens ao topo
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Coluna da esquerda: Título, Subtítulo, Texto e Botão */}
        <Grow in={howItWorksTextInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
          <Box ref={howItWorksTextRef} sx={{ flex: 1, maxWidth: { xs: '100%', md: '30%' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#1A1A1A' }}>
              Como funciona
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 3, color: '#1A1A1A' }}>
              Etapas do processo de instalação
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#555' }}>
              A empresa Nury em parceria com seus colaboradores, desenvolveu um processo
              claro e detalhado do processo de instalação de seus produtos.
            </Typography>
            <StyledHowItWorksButton>
              Saiba mais
            </StyledHowItWorksButton>
          </Box>
        </Grow>

        {/* Coluna da direita: 3 Cards com Imagem, Título e Descrição */}
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-around',
            alignItems: 'flex-start', // Alinha os cards ao topo
            gap: { xs: 3, sm: 2 },
            maxWidth: { xs: '100%', md: '70%' },
          }}
        >
          {/* Card 1 */}
          <Grow in={howItWorksCardInView[0]} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
            <StyledHowItWorksCard ref={el => howItWorksRefs.current[0] = el}>
              <CardMedia
                component="img"
                image="/firmbee-com-gcsNOsPEXfs-unsplash.jpg" // Imagem 1: Análise das últimas contas
                alt="Análise das últimas contas"
                sx={{ height: 200, objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <Box sx={{ p: 2, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1A1A1A' }}>
                  Análise das últimas contas
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Será realizado uma análise das doze últimas contas.
                </Typography>
              </Box>
            </StyledHowItWorksCard>
          </Grow>

          {/* Card 2 */}
          <Grow in={howItWorksCardInView[1]} style={{ transformOrigin: '0 0 0' }} timeout={1500}>
            <StyledHowItWorksCard ref={el => howItWorksRefs.current[1] = el}>
              <CardMedia
                component="img"
                image="/scott-graham-OQMZwNd3ThU-unsplash.jpg" // Imagem 2: Proposta e contrato
                alt="Proposta e contrato"
                sx={{ height: 200, objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <Box sx={{ p: 2, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1A1A1A' }}>
                  Proposta e contrato
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  O cliente receberá uma proposta e o contrato dos nossos serviços.
                </Typography>
              </Box>
            </StyledHowItWorksCard>
          </Grow>

          {/* Card 3 */}
          <Grow in={howItWorksCardInView[2]} style={{ transformOrigin: '0 0 0' }} timeout={2000}>
            <StyledHowItWorksCard ref={el => howItWorksRefs.current[2] = el}>
              <CardMedia
                component="img"
                image="/radission-us-_XeQ8XEWb4Q-unsplash.jpg" // Imagem 3: Projeto de legalização
                alt="Projeto de legalização"
                sx={{ height: 200, objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
              <Box sx={{ p: 2, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1A1A1A' }}>
                  Projeto de legalização
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Os profissionais da Nury darão início no projeto e legalização.
                </Typography>
              </Box>
            </StyledHowItWorksCard>
          </Grow>
        </Box>
      </Box>
      {/* Seção de Vantagens */}
<Box
  sx={{
    backgroundColor: '#F7F7F7',
    padding: { xs: 4, md: 8 },
    textAlign: 'center',
  }}
>
  <Grow in={advantagesInView} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
    <Box ref={advantagesRef}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', mb: 2, color: '#1A1A1A' }}
      >
        Vantagens de Escolher Nury
      </Typography>
      <Typography variant="body1" sx={{ color: '#555', mb: 6 }}>
        Oferecemos mais do que produtos, entregamos benefícios que transformam a sua vida e o planeta.
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
    {advantagesItems.map((item, index) => (
      <Grow in={advantageCardInView[index]} style={{ transformOrigin: '0 0 0' }} timeout={1000 + (index * 500)} key={index}>
        <StyledAdvantageCard ref={el => advantageCardRefs.current[index] = el} sx={{ flex: 1 }}>
          <Box sx={{ mb: 2 }}>
            {item.icon}
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {item.description}
          </Typography>
        </StyledAdvantageCard>
      </Grow>
    ))}
  </Box>
</Box>

     <Box
      sx={{
        backgroundColor: '#F7F7F7',
        padding: { xs: 4, md: 8 },
        textAlign: 'center',
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
                {/* Aqui está o avatar com o fundo de lâmpada */}
                <StyledAvatar alt={caseItem.name}>
                  {/* Se você tiver uma imagem da lâmpada, pode usar como backgroundImage no StyledAvatar
                      e colocar a imagem da pessoa aqui, ou apenas o gradiente no StyledAvatar
                      e não ter uma imagem de pessoa. Para a imagem, estou usando exemplos de Unsplash. */}
                  <img src={caseItem.avatarUrl} alt={caseItem.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </StyledAvatar>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00579D' }}>
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


    </>
  );
}
