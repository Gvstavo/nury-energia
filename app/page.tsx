'use client';

import { useState } from 'react';
import { Box, Typography, IconButton, Card, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const banners = [
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
const highlightItems = [
  {
    title: 'Residencial',
    description: 'Transforme a sua casa em um exemplo de sustentabilidade e economia com a energia solar.',
    imageUrl: '/benjamin-child-GWe0dlVD9e0-unsplash.jpg', // Imagem de exemplo
  },
  {
    title: 'Comercial',
    description: 'Posicione sua empresa como líder em sustentabilidade e inovação com soluções de energia solar.',
    imageUrl: '/chelsea-WvusC5M-TM8-unsplash.jpg', // Imagem de exemplo
  },
  {
    title: 'Industrial',
    description: 'Maximize a competitividade da sua indústria com sistemas de energia solar robustos e personalizados.',
    imageUrl: '/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg', // Imagem de exemplo
  },
];

const StyledCarousel = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '600px', // Altura fixa de 600px
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledSlide = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'imageUrl' && prop !== 'align',
})(({ theme, imageUrl, align }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'opacity 0.5s ease-in-out',
  opacity: 0,
  visibility: 'hidden',
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
  backgroundColor: '#0091BD',
  color: 'white',
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const StyledInfoButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0091BD',
  color: 'white',
  borderRadius: '8px',
  padding: theme.spacing(1.5, 3),
  fontWeight: 'bold',
  marginTop: theme.spacing(3),
  '&:hover': {
    backgroundColor: '#323758',
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


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (<>
    <Box>
      {/* Carrossel de Banners */}
      <StyledCarousel>
        {banners.map((banner, index) => (
          <StyledSlide
            key={index}
            imageUrl={banner.imageUrl}
            align={banner.align}
            sx={{
              opacity: activeIndex === index ? 1 : 0,
              visibility: activeIndex === index ? 'visible' : 'hidden',
            }}
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
        <Box
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

        {/* Container de texto e botão */}
        <Box
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

        {/* Container da imagem */}
        <Box
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
      </Box>
    </Box>


      <Box
        sx={{
          backgroundColor: '#00579D ',
          padding: { xs: 4, md: 8 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: '#000000', fontWeight: 'bold' }}
        >
          Independente da sua necessidade
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: '#000000', fontWeight: 'bold', mb: 6 }}
        >
          Temos a solução energética
          <br />
          perfeita pra você!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: { xs: 4, md: 3 },
          }}
        >
          {highlightItems.map((item, index) => (
            <StyledHighlightCard key={index}>
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
          ))}
        </Box>
      </Box>






</>
  );
}
