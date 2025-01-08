import { Box, Typography, Container, Link } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 0.5,
                mt: 1,
                textAlign: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body1" color="secondary">
                    © {new Date().getFullYear()} Djo Store by Lampe Fall Tech.
                </Typography>
                <Typography variant="body2" color="secondary">
                    <Link href="/privacy-policy" color="inherit" underline="hover">
                        Politique de confidentialité
                    </Link> |
                    <Link href="/terms-of-service" color="inherit" underline="hover">
                        Conditions d'utilisation
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
