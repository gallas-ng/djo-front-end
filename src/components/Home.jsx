import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Container, CardActions, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import d from '../assets/d.jpg';
import serv_1 from '../assets/serv_1.png';
import com_1 from '../assets/com_1.png';
import theme from "../theme.jsx";
import {Link} from "react-router-dom";
import ContactForm from "./ContactForm.jsx";

function Home() {
    return (

        <Container maxWidth="lg" sx={{ mt: 4 }}>
            {/* Carte Principale */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, width: '85%', border: 'solid 4px #e6ddc5' }}>
                    <CardActionArea>
                        <CardMedia

                            component="img"
                            // height="300"
                            image={d}
                            alt="Image principale"
                            sx={{
                                maxWidth: '330px',
                                maxHeight: '300px',
                                margin: '0 auto',
                                display: 'block',
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center' }}>
                                Bienvenue chez Djo !
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'dark', textAlign: 'center', fontStyle: 'italic' }}>
                                Tous vos plans disponibles dans notre site. Aidez-nous à vous rendre service !!!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>

            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ width: '85%', margin: '0 auto' }}
            >
                {/* Carte Enfant 1 */}
                <Grid xs={12} md={5} size="grow">
                    <Card sx={{
                        width: '100%',
                        height: '450px',
                        boxShadow: 2,
                        '&:hover': { boxShadow: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <CardMedia
                            component="img"
                            image={com_1}
                            alt="Image 1"
                            sx={{
                                width: '90%',
                                height: 'auto',
                                maxWidth: '100%',
                                maxHeight: '300px',   // For larger screens
                                margin: '0 auto',
                                display: 'block',
                                [theme.breakpoints.down('sm')]: {
                                    maxHeight: '150px',  // For small screens (mobile)
                                }
                            }}
                        />
                        <CardContent  sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Djo e-commerce
                            </Typography>
                            <Typography variant="body2" color="dark">
                                La vente et l'achat en ligne comme jamais.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 'auto', backgroundColor: '#e6ddc5' }}>
                            <Button size="small" color="secondary" component={Link} to="/e_commerce">
                                En savoir plus
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Carte Enfant 2 */}
                <Grid xs={12} md={5} size="grow">
                    <Card sx={{
                        width: '100%',
                        height: '450px',
                        boxShadow: 2,
                        '&:hover': { boxShadow: 4 },
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={serv_1}
                            alt="Image 2"
                            sx={{
                                width: '90%',
                                height: 'auto',
                                maxWidth: '100%',
                                maxHeight: '300px',   // For larger screens
                                margin: '0 auto',
                                display: 'block',
                                [theme.breakpoints.down('sm')]: {
                                    maxHeight: '150px',  // For small screens (mobile)
                                }
                            }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Djo e-services
                            </Typography>
                            <Typography variant="body2" color="dark">
                                Des professionnels pour vous accompagner sur vos besoins particuliers.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 'auto', backgroundColor: '#e6ddc5' }}> {/* Colle les boutons en bas */}
                            <Button size="small" color="secondary" component={Link} to="/e_services">
                                En savoir plus
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        <ContactForm />
        </Container>
    );
}

export default Home;