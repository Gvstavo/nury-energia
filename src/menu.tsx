'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const navItems = [
  { label: 'Página Inicial', href: '/' },
  { label: 'Sobre nós', href: '/about' },
  { label: 'Sucesso do Cliente', href: '/customer-success' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contact' },
];

const solutions = [
  "Agro",
  "Residencial",
  "Usinas Solares"
]

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
     setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
     setAnchorEl(null);
 };

 return (
     <AppBar position="sticky" color="transparent" elevation={0} sx={{backgroundColor: "white"}} >
       <Toolbar sx={{
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '100%',
          minHeight: 93,
          alignItems: 'center',
          
          transition: 'background-color 0.3s ease-in-out',
      }}>
      <Box
          component="a"
          href="/"
          sx={{
             flexGrow: 1,
             display: 'flex',
             alignItems: 'center',
             textDecoration: 'none',
             px: 17
         }}
     >
  {/* Use o componente Image do Next.js aqui */}
        <Image
           src="/logo-nuryenergia.png"
           alt="Logo da Nury Energia"
           width={120}
           height={40}
           priority={true}
       />
   </Box>

   <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' , px: 15}}>
      {navItems.map((item) => (
         <Button key={item.label} href={item.href} color="inherit" sx={{ mx: 1, textTransform: 'none', '&:hover': { backgroundColor: 'transparent' } }} className="nav-item-hover">
           {item.label}
       </Button>
       ))}
      <Button
         id="solutions-button"
         aria-controls={open ? 'solutions-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onMouseEnter={handleOpen}
         color="inherit"
         sx={{ mx: 1, textTransform: 'none', '&:hover': { backgroundColor: 'transparent' } }}
         className="nav-item-hover"
         endIcon={<ArrowDropDownIcon />}
     >
         Soluções
     </Button>
     <Menu
         id="solutions-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         onMouseLeave={handleClose}
         MenuListProps={{
           disablePadding: true,
           onMouseLeave: handleClose
       }}
   >
     {solutions.map((solution) => (
       <MenuItem
          key={solution}
          onClick={handleClose}
          sx={{
            textTransform: 'none',
            color: 'black',
            '&:hover': {
               backgroundColor: 'transparent',
               color: '#0091BD',
           },
           '&:focus-visible': {
               backgroundColor: 'transparent',
               outline: 'none',
           },
       }}
   >
    {solution}
</MenuItem>
))}
 </Menu>
</Box>
</Toolbar>
</AppBar>
);
}
