'use client';

import { Box, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// Importa os ícones necessários
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#00579D', // Cor de fundo que se aproxima da imagem
  color: 'white',
  padding: theme.spacing(8, 4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 8),
  },
}));

const StyledCopyright = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  backgroundColor: '#00579D', 
  padding: theme.spacing(3, 4),
  textAlign: 'right',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 8),
  },
}));

export default function Footer() {
  return (
    <Box>
      <StyledFooter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Coluna da Logo e Descrição */}
          <Box sx={{ maxWidth: { xs: '100%', md: '30%' } }}>
            <Image
              src="/Logo-Nury-white.png" // Use o caminho real da sua logo
              alt="Logo Nury Energia"
              width={150}
              height={40}
              priority={true}
            />
            <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.6 }}>
              Uma empresa voltada 100% para a atividade de energias renováveis, com experiência
              comprovada, equipe técnica especializada e atuando dentro das normas NR10 e NR35.
              Possuímos de engenharia própria e um atendimento de venda e pós-venda
              especializado.
            </Typography>
          </Box>

          {/* Coluna de Contatos */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contatos
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <PhoneIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">(51) 3909-7279</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <PhoneIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">(51) 9 9787-1660</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <PhoneIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">(51) 9 9839-2260</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">comercial@atendimentoenergia.com.br</Typography>
            </Box>
          </Box>

          {/* Coluna de Redes Sociais e Endereço */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Siga-nos nas Redes Sociais
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Link href="#" target="_blank" rel="noopener">
                <IconButton sx={{ color: 'white' }}>
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Link href="#" target="_blank" rel="noopener">
                <IconButton sx={{ color: 'white' }}>
                  <InstagramIcon />
                </IconButton>
              </Link>
              <Link href="#" target="_blank" rel="noopener">
                <IconButton sx={{ color: 'white' }}>
                  <YouTubeIcon />
                </IconButton>
              </Link>
              <Link href="#" target="_blank" rel="noopener">
                <IconButton sx={{ color: 'white' }}>
                  <LinkedInIcon />
                </IconButton>
              </Link>
            </Box>
            
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Endereço
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <LocationOnIcon sx={{ fontSize: 18, mt: 0.5 }} />
              <Typography variant="body2">
                Edifício Manhattan, R. Bento Gonçalves, 1259, Osório, RS.
                <br />
                Osório/RS
              </Typography>
            </Box>
          </Box>
        </Box>
      </StyledFooter>

      {/* Seção de Copyright */}
      <StyledCopyright>
        <Typography variant="caption"  sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Copyright © 2025 Nury - A melhor opção de Energia Solar no Rio Grande do Sul - RS
        </Typography>
      </StyledCopyright>
    </Box>
  );
}
