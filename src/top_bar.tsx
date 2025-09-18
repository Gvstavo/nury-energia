'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TopBar() {
    const [isAtTop, setIsAtTop] = useState(true);

    const theme = useTheme();
    // Define o ponto de quebra. 'md' (medium) é um bom padrão (abaixo de 900px será considerado mobile).
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                // Altura responsiva
                height: { xs: 56, md: 69 },
                bgcolor: '#072463',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // Padding horizontal responsivo
                px: { xs: 2, md: 4, lg: 10 },
                zIndex: 1100,
                transition: 'transform 0.3s ease-in-out',
                transform: isAtTop ? 'translateY(0)' : 'translateY(-100%)',
            }}
        >
            {/* Lado esquerdo com informações de contato */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIphoneIcon sx={{ fontSize: 18 }} />
                    {/* Em mobile, o texto do telefone é escondido para dar espaço */}
                    <Typography variant="body2" sx={{ fontSize: 14, display: { xs: 'none', sm: 'block' } }}>
                        (51) 9767-4482
                    </Typography>
                </Box>
                {/* Email e Localização escondidos em telas menores que 'md' */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                    <EmailIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2" sx={{ fontSize: 14 }}>
                        atendimento@nuryenergia.com.br
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2" sx={{ fontSize: 14, whiteSpace: 'nowrap' }}>
                        Edifício Manhattan, Osório, RS
                    </Typography>
                </Box>
            </Box>

            {/* Lado direito com ícones sociais */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0, sm: 1 } }}>
                {/* Texto "Contate-nos" escondido em telas menores que 'sm' */}
                <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
                    Contate-nos
                </Typography>
                <Link href="https://wa.me/555197674482" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: 'white' }}>
                        <WhatsAppIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.instagram.com/nuryenergia/" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: 'white' }}>
                        <InstagramIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.youtube.com/@nuryenergia" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: 'white', display: { xs: 'none', sm: 'inline-flex' } }}>
                        <YouTubeIcon />
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
}
