import {Typography, Button, Card, CardContent, CardMedia, Box, Divider} from '@mui/material';
import {MiscellaneousServicesTwoTone, SupportAgentTwoTone, HandshakeTwoTone} from '@mui/icons-material'; // Icons for the shop and sale areas
import Grid from '@mui/material/Grid2';
import serv_2 from '../assets/serv_2.png';
import serv_3 from '../assets/serv_3.jpg';
import theme from "../theme.jsx";
import CardActionArea from "@mui/material/CardActionArea";
import {useState} from "react";


const cards = [
    {
        id: 1,
        icon: <MiscellaneousServicesTwoTone sx={{color: '#6b4737'}} />,
        title: 'Multi services',
        description: "Plusieurs secteurs d'operations pour repondre à vos besoins.",
    },
    {
        id: 2,
        icon: <SupportAgentTwoTone sx={{color: '#6b4737'}} />,
        title: 'Assistance 7/7',
        description: "Notre équipe est toujours l'ecoute de vos besoins.",
    },
    {
        id: 3,
        icon: <HandshakeTwoTone sx={{color: '#6b4737'}} />,
        title: 'Fournisseur Integré',
        description: 'Vous proposez dess services, postez vos annonces. Et plus encore !',
    },
];

const EServicesPage = () => {
    const [selectedCard, setSelectedCard] = useState(0);

    return (
        <Box sx={{padding: '2rem'}}>
            <Typography fontWeight="bold" variant="h5" align="center" gutterBottom>
                Découvrez Djo E-Commerce
            </Typography>

            <Box id='eserv_box'
                 sx={{
                     width: '100%',
                     display: 'grid',
                     gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%),1fr))',
                     gap: 2,
                     alignContent: 'center',
                     my: 2
                 }}
                 align='center'
            >
                {cards.map((card, index) => (
                    <Card key={index}>
                        <CardActionArea
                            onClick={() => setSelectedCard(index)}
                            data-active={selectedCard === index ? '' : undefined}
                            sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                        backgroundColor: 'action.selectedHover',
                                    },
                                },
                            }}
                        >
                            <CardContent sx={{height: '100%'}}>
                                {card.icon}
                                <Typography variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
            {/* Espace demande de service */}
            <Grid container spacing={{xs: 2, md: 4}} columns={{xs: 6, sm: 8, md: 12}}>
                {/* Image à gauche */}
                <Grid size={{xs: 6}}>
                    <CardMedia
                        component="img"
                        image={serv_2}
                        alt="Demande de service"
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
                </Grid>

                {/* Contenu à droite */}
                <Grid size={{xs: 6}}>
                    <Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Espace demande de service
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Explorez une vaste sélection de service dans divers secteurs avec des operateurs
                                qualifiés pour vous repondre. Faites votre demande et laisser nous vous guider.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Découvrez l'Espace demande
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Divider sx={{my: 4}}/>

            {/* Espace offre de service */}
            <Grid container spacing={{xs: 2, md: 4}} columns={{xs: 6, sm: 8, md: 12}}>

                <Grid size={{xs: 6}}>
                    <Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Espace offre de service
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Créez votre propre page fournisseur en ligne et partager vos offres.
                                Gérez vos de,andes, suivez les et atteignez des clients du monde entier.
                            </Typography>
                            <Button variant="contained" color="secondary">
                                Proposer des services
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{xs: 6}} sx={{display: 'flex', justifyContent: 'end'}}>
                    <CardMedia
                        component="img"
                        image={serv_3}
                        alt="Vente en ligne"
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
                </Grid>
            </Grid>

            <Divider sx={{my: 4}}/>

            <Typography variant="body1">
                Djo E-Service offre une expérience unique pour les clients avec des besoins particulieres.
                Rejoignez-nous dès aujourd'hui !
            </Typography>
        </Box>
    );
};

export default EServicesPage;
