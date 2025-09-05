'use client'

import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper, Link, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image'; // Assuming you have an image for the Nury Energia logo and background
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Container, Grow } from '@mui/material';
import {useScrollEffect} from "../utils.tsx";
import { styled } from '@mui/material/styles';
import {useState} from "react";
import { Divider } from '@mui/material';
import {  CircularProgress, Alert } from '@mui/material';
const mainBanner = {
    title: 'Vamos Começar o Seu Projeto Solar?',
    subtitle: 'Dê o primeiro passo para a sua independência energética. Preencha o formulário para receber uma proposta técnica e comercial sem compromisso.',
    imageUrl: '/northfolk-Ok76F6yW2iA-unsplash.webp',
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


const advantages = [
  'Gerar energia limpa.',
  'Valorizar seu imóvel.',
  'Deixar de emitir CO2 na natureza.',
  'Reduzir a sua conta de energia elétrica.',
  'Gerar sua própria energia elétrica (autoprodutor).',
  'Excelente investimento, com retorno e payback atrativo.',
];

const differentiators = [
  'Equipe Técnica e de Instaladores especializadas, treinadas na WEG, dentro das normas NR10 e NR35.',
  'Possuímos área de Engenharia própria, assim desenvolvemos o projeto dentro da necessidade de cada cliente de forma rápida e eficaz.',
  'Equipe de Comissionamento especializada para fazer o check list de qualidade, utilizando ferramentas de alta qualidade, como câmera termográfica para as conexões e módulos; todo este processo realizado antes do funcionamento, assim entregamos segurança ao cliente.',
  'Equipe de Pós-Vendas e SAC própria, com sala de monitoramento especializada.',
  'Priorizamos a qualidade e segurança de nossas instalações.',
  'Possuímos um estoque de equipamentos e produtos dentro do Estado, o que facilita e agiliza o processo de entrega.',
];

const headingColor = '#072463';
const StyledBanner = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    backgroundImage: 'url(/northfolk-Ok76F6yW2iA-unsplash.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
export default function Orcamento() {
    const [bannerRef, bannerInView] = useScrollEffect(0.3);
    const [diferenciaisRef, diferenciaisInView] = useScrollEffect(0.3);
    const [formRef, formInView] = useScrollEffect(0.3);
    const [atendimentoRef, atendimentoInView] = useScrollEffect(0.3);

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    necessity: 'agricola',
    solution: 'eletrica'
    });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);    

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ocorreu um erro no servidor.');
      }
      
      setResponse({ type: 'success', message: data.message });
      // Limpa o formulário após o envio bem-sucedido
      setFormData({ name: '', email: '', whatsapp: '', city: '', necessity: 'agricola' });

    } catch (error) {
      setResponse({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <Box>

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

            <Grow in={bannerInView} style={{ transformOrigin: 'top' }} timeout={1000}>
              <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                  <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
                    Comece já a gerar energia
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '75ch', mx: 'auto' }}>
                    Experimente ter uma fonte inesgotável de energia em sua casa ou
                    empresa com painéis solares e ainda economizando muito dinheiro.
                  </Typography>
                </Box>

                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' }, // Coluna em telas pequenas, linha em telas médias/grandes
                  gap: { xs: 5, md: 8 }, // Espaçamento entre as colunas
                }}>
                  
                  {/* Coluna da Esquerda (Vantagens) */}
                  <Box sx={{ flex: 1 }}> {/* flex: 1 faz a Box ocupar o espaço disponível */}
                    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ color: headingColor, mb: 2 }}>
                      Vantagens da energia solar
                    </Typography>
                    <List sx={{ p: 0 }}>
                      {advantages.map((advantage, index) => (
                        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5 }}>
                            <CheckCircleIcon sx={{ color: headingColor }} />
                          </ListItemIcon>
                          <ListItemText primary={advantage} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* Coluna da Direita (Diferenciais) */}
                  <Box sx={{ flex: 1 }}> {/* flex: 1 faz a Box ocupar o espaço disponível */}
                    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ color: headingColor, mb: 2 }}>
                      Diferenciais Nury
                    </Typography>
                    <List sx={{ p: 0, listStyleType: 'disc', pl: 2.5 }}>
                      {differentiators.map((text, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', p: 0, mb: 1.5 }}>
                            <Typography variant="body1" color="text.secondary">
                            {text}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Container>
            </Grow>


        <Grow in={formInView} style={{ transformOrigin: 'top' }} timeout={1000}>
              <Box ref={formRef} sx={{
                position: 'relative',
                width: '100%',
                height: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#072463",
                //backgroundImage: 'linear-gradient(to right, #072463, #007bff)', // Adjust for background image if available
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>

                <Paper sx={{
                  backgroundColor: 'white',
                  padding: '40px',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  maxWidth: '800px',
                  width: '100%',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <Typography variant="h5" component="h2" sx={{
                    color: '#072463',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    textAlign: 'center',
                  }}>
                    RECEBA UM ORÇAMENTO
                  </Typography>
   <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '20px' }}>
      <TextField
        name="name"
        label="Nome Completo"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="email"
        type="email"
        label="E-mail"
        variant="outlined"
        placeholder="E-mail para contato"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="whatsapp"
        label="Whatsapp"
        variant="outlined"
        value={formData.whatsapp}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="city"
        label="Cidade"
        variant="outlined"
        value={formData.city}
        onChange={handleChange}
        required
        fullWidth
      />
      <FormControl variant="outlined" sx={{ gridColumn: { xs: '1', sm: 'span 2' } }}>
        <InputLabel>Segmento</InputLabel>
        <Select
          name="necessity"
          label="Necessidade"
          value={formData.necessity}
          onChange={handleChange}
        >
          <MenuItem value="agricola">Agrícola</MenuItem>
          <MenuItem value="residencial">Residencial</MenuItem>
          <MenuItem value="industrial">Industrial</MenuItem>
          <MenuItem value="usina">Usina</MenuItem>
          <MenuItem value="imobiliario">Imobiliário</MenuItem>
          <MenuItem value="comercial">Comercial</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ gridColumn: { xs: '1', sm: 'span 2' } }}>
        <InputLabel>Solução</InputLabel>
        <Select
          name="solution"
          label="solucao"
          value={formData.solution}
          onChange={handleChange}
        >
          <MenuItem value="eletrica">Elétricas</MenuItem>
          <MenuItem value="energia_solar">Energia Solar</MenuItem>
          <MenuItem value="projetos">Projetos</MenuItem>
          <MenuItem value="laudos">Laudos técnicos</MenuItem>
          <MenuItem value="redes_eletricas_condominios">Redes elétricas para condomínios</MenuItem>
          <MenuItem value="spda">SPDA</MenuItem>
          <MenuItem value="extensoes">Extensões de rede e entrada de energia</MenuItem>
          <MenuItem value="automacoes_residenciais">Automações residenciais</MenuItem>
          <MenuItem value="automacoes_industriais">Automações industriais</MenuItem>
          <MenuItem value="correcao">Correção fator de potência</MenuItem>
 <MenuItem value="mercado">Mercado livre de energia</MenuItem>
 <MenuItem value="mobilidade">Mobilidade Elétrica</MenuItem>

        </Select>
      </FormControl>



      <Box sx={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            backgroundColor: '#072463', '&:hover': { backgroundColor: '#051a4a' },
            color: 'white', padding: '12px 30px', borderRadius: '4px',
            textTransform: 'uppercase', fontWeight: 'bold', minWidth: '150px'
          }}
        >
          {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
        </Button>

        {response && (
          <Alert severity={response.type} sx={{ width: '100%', justifyContent: 'center' }}>
            {response.message}
          </Alert>
        )}
      </Box>
    </Box>
                </Paper>
              </Box>
            </Grow>

      {/* Quick Service Section */}
            <Grow in={atendimentoInView} style={{ transformOrigin: 'top' }} timeout={1000}>
       <Box ref={atendimentoRef} sx={{
            padding: '80px 20px',
            backgroundColor: '#f8f8f8',
            textAlign: 'center',
        }}>
            <Typography variant="h4" component="h3" sx={{
                color: '#072463',
                fontWeight: 'bold',
                marginBottom: '20px',
            }}>
                Atendimento rápido
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto' }}>
                Caso desejar, entre em contato diretamente com um dos nossos especialistas.
            </Typography>

            <Paper sx={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px', // Aumentado para acomodar o layout lado a lado
                margin: '0 auto',
            }}>
                <Box sx={{
                    display: 'flex',
                    // Em telas pequenas (xs), a direção é 'column' (empilhado)
                    // Em telas médias (md) e maiores, a direção é 'row' (lado a lado)
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4, // Espaçamento entre as seções
                    width: '100%',
                }}>

                    {/* === Coluna da Esquerda: Contato === */}
                    <Box sx={{
                        flex: 1, // Faz a coluna ocupar metade do espaço
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2, // Espaçamento entre os itens de contato
                        alignItems: { xs: 'center', md: 'flex-start' }, // Alinhamento responsivo
                    }}>
                        <Typography variant="h6" sx={{ color: '#072463', fontWeight: 'bold', mb: 1 }}>
                            Contato
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <WhatsAppIcon sx={{ color: '#072463', fontSize: 30 }} />
                            <Typography variant="body1" sx={{ color: '#072463', fontWeight: 'bold' }}>
                                +55 (51) 99573.5089
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <MailOutlineIcon sx={{ color: '#072463', fontSize: 30 }} />
                            <Link href="mailto:atendimento@nuryenergiasolar.com.br" sx={{ color: '#072463', textDecoration: 'none', fontWeight: 'bold' }}>
                                atendimento@nuryenergiasolar.com.br
                            </Link>
                        </Box>
                    </Box>

                    {/* Divisor vertical (só aparece em telas médias ou maiores) */}
                    <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
                    {/* Divisor horizontal (só aparece em telas pequenas) */}
                    <Divider sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }} />

                    {/* === Coluna da Direita: Horário de Atendimento === */}
                    <Box sx={{
                        flex: 1, // Faz a coluna ocupar a outra metade do espaço
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        alignItems: { xs: 'center', md: 'flex-start' }, // Alinhamento responsivo
                    }}>
                        <Typography variant="h6" sx={{ color: '#072463', fontWeight: 'bold', mb: 1 }}>
                            Horário de atendimento
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <AccessTimeIcon sx={{ color: '#072463', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ color: '#555' }}>
                                Segunda a sexta-feira: <span style={{ fontWeight: 'bold' }}>08:00h - 18:00h</span>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <AccessTimeIcon sx={{ color: '#072463', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ color: '#555' }}>
                                Sábado: <span style={{ fontWeight: 'bold' }}>08:00h - 12:00h</span>
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Paper>
        </Box>
                </Grow>
    </Box>
  );
}