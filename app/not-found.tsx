import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function NotFound() {
    const primaryBlue = '#072463';

    return (
        <Container
            component="main"
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: 'calc(100vh - 200px)', // Ajusta a altura para preencher a tela, descontando header/footer
                py: 8,
            }}
        >
            <WarningAmberIcon sx={{ fontSize: '6rem', color: primaryBlue, mb: 2 }} />
            
            <Typography
                variant="h1"
                component="h1"
                sx={{
                    fontSize: { xs: '6rem', md: '10rem' },
                    fontWeight: 'bold',
                    color: primaryBlue,
                    lineHeight: 1,
                }}
            >
                404
            </Typography>
            
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 'bold',
                    mt: 2,
                    mb: 2,
                    color: 'text.primary',
                }}
            >
                Página Não Encontrada
            </Typography>
            
            <Typography
                variant="body1"
                sx={{
                    color: 'text.secondary',
                    maxWidth: '500px',
                    mb: 4,
                }}
            >
                Pedimos desculpa, mas a página que você está a tentar aceder não existe, foi removida ou o nome foi alterado.
            </Typography>
            
            <Button
                component={Link}
                href="/"
                variant="contained"
                sx={{
                    backgroundColor: primaryBlue,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    padding: '12px 24px',
                    '&:hover': {
                        backgroundColor: '#051a4a',
                    },
                }}
            >
                Voltar à Página Inicial
            </Button>
        </Container>
    );
}
