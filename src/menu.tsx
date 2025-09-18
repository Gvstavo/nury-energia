'use client';

import { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Button, 
    Box, 
    Menu, 
    MenuItem, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    ListItemText,
    Collapse,
    Typography,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const navItems = [
    { label: 'Página Inicial', href: '/' },
    { label: 'Sobre nós', href: '/sobre-nos' },
    { label: 'Sucesso do Cliente', href: '/sucesso-do-cliente' },
];

const solutions = [
    { label: "Energia Solar", href: "/solucoes/energia-solar" },
    { label: "Mobilidade Elétrica", href: "/solucoes/mobilidade-eletrica" },
    { label: "Mercado Livre de Energia", href: "/solucoes/mercado-livre-energia" },
];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // Ponto de quebra para mobile

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleSolutionsClick = () => {
        setSolutionsOpen(!solutionsOpen);
    };

    const drawerContent = (
        <Box
            sx={{ width: 280, p: 2 }}
            role="presentation"
        >
            <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', top: 8, right: 8 }}>
                <CloseIcon />
            </IconButton>
            <List sx={{ mt: 4 }}>
                {navItems.map((item) => (
                    <ListItem key={item.label} component={Link} href={item.href} onClick={toggleDrawer(false)}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
                <ListItem onClick={handleSolutionsClick}>
                    <ListItemText primary="Soluções" />
                    {solutionsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={solutionsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {solutions.map((solution) => (
                            <ListItem key={solution.label} component={Link} href={solution.href} sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
                                <ListItemText primary={solution.label} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <ListItem sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        component={Link}
                        href="/orcamento"
                        fullWidth
                        sx={{ backgroundColor: '#072463', '&:hover': { backgroundColor: '#051a4a' } }}
                        onClick={toggleDrawer(false)}
                    >
                        Pedir orçamento
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: 93, justifyContent: 'space-between' }}>
                    <Box component={Link} href="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <Image src="/logo-nuryenergia.png" alt="Logo da Nury Energia" width={120} height={40} priority={true} />
                    </Box>

                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon sx={{ color: '#1A1A1A' }} />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                {drawerContent}
                            </Drawer>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button key={item.label} component={Link} href={item.href} color="inherit" sx={{ mx: 1, textTransform: 'none', color: '#1A1A1A' }} className="nav-item-hover">
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                onMouseEnter={handleMenuOpen}
                                color="inherit"
                                sx={{ mx: 1, textTransform: 'none', color: '#1A1A1A' }}
                                className="nav-item-hover"
                                endIcon={<ArrowDropDownIcon />}
                            >
                                Soluções
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                MenuListProps={{ onMouseLeave: handleMenuClose }}
                                sx={{ '.MuiPaper-root': { mt: 2 } }}
                            >
                                {solutions.map((solution) => (
                                    <MenuItem key={solution.label} component={Link} href={solution.href} onClick={handleMenuClose}>
                                        {solution.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Button
                                variant="contained"
                                component={Link}
                                href="/orcamento"
                                sx={{ ml: 2, backgroundColor: '#072463', '&:hover': { backgroundColor: '#007A9A' } }}
                            >
                                Pedir orçamento
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
