'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function TopBar() {
  const [isAtTop, setIsAtTop] = useState(true);

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
        height: 69,
        bgcolor: '#00579D',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 20,
        zIndex: 1100,
        transition: 'transform 0.3s ease-in-out',
        transform: isAtTop ? 'translateY(0)' : 'translateY(-100%)',
    }}
>
      {/* Lado esquerdo com informações de contato */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <PhoneIphoneIcon sx={{ fontSize: 18 }} />
      <Typography variant="body2" sx={{ fontSize: 15 }}>
        (54) 3452-3200
    </Typography>
</Box>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <EmailIcon sx={{ fontSize: 18 }} />
  <Typography variant="body2" sx={{ fontSize: 15 }}>
    contato@nuryenergia.com.br
</Typography>
</Box>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <LocationOnIcon sx={{ fontSize: 18 }} />
  <Typography variant="body2" sx={{ fontSize: 15 }}>
    Edifício Manhattan, R. Bento Gonçalves, 1259, Osório, RS.
</Typography>
</Box>
</Box>

      {/* Lado direito com "Contate-nos" e ícones sociais */}
<Box sx={{ display: 'flex', alignItems: 'center', gap: 0 }}>
    <Typography variant="body2" sx={{ fontSize: 15, fontWeight: 'bold' }}>
      Contate-nos
  </Typography>
  <Link href="https://wa.me/555434523200" target="_blank" rel="noopener noreferrer">
  <IconButton sx={{ color: 'white' }}>
    <WhatsAppIcon />
</IconButton>
</Link>
<Link href="https://www.instagram.com/nuryenergia/" target="_blank" rel="noopener noreferrer">
<IconButton sx={{ color: 'white' }}>
    <InstagramIcon />
</IconButton>
</Link>
</Box>
</Box>
);
}