import {useState} from "react";
import {Typography, Button, Card, CardContent, CardMedia, Box, Divider} from '@mui/material';
import Grid from '@mui/material/Grid2';
import com_2 from '../assets/com_2.png';
import com_3 from '../assets/com_3.png';
import theme from "../theme.jsx";
import CardActionArea from "@mui/material/CardActionArea";
import {DeliveryDiningTwoTone, LocalMallTwoTone , AddBusinessTwoTone} from '@mui/icons-material';

const cards = [
    {
        id: 1,
        icon: <LocalMallTwoTone sx={{color: '#6b4737'}} />,
        title: 'Divers',
        description: 'Retrouvez une large diversité de produits.',
    },
    {
        id: 2,
        icon: <DeliveryDiningTwoTone sx={{color: '#6b4737'}} />,
        title: 'Livraison',
        description: 'Faites-vous livrer dans les meilleurs delais.',
    },
    {
        id: 3,
        icon: <AddBusinessTwoTone sx={{color: '#6b4737'}} />,
        title: 'Vente Integrée',
        description: 'Vous voulez proposer des produits, ouvrez votre propre boutique.',
    },
];


const ECommercePage = () => {
    const [selectedCard, setSelectedCard] = useState(0);

    return (
        <Box id="ecom" sx={{padding: '2rem', justifyContent: 'center'}}>
            <Typography sx={{fontWeight: 'bold'}} variant="h5" align="center" gutterBottom>
                Découvrez Djo E-Commerce
            </Typography>

            <Box id='ecom_box'
                 sx={{
                     width: '100%',
                     display: 'grid',
                     gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                     gap: 2,
                     my: 2,
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
            {/* Espace Achat */}
            <Grid container spacing={{xs: 2, md: 4}} columns={{xs: 6, sm: 8, md: 12}}>
                {/* Image à gauche */}
                <Grid size={{xs: 6}}>
                    <CardMedia
                        component="img"
                        image={com_2}
                        alt="Achat en ligne"
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
                                Espace Achat
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Explorez une vaste sélection de produits dans diverses catégories :
                                électronique, mode, maison, et plus encore. Trouvez les meilleurs
                                magasins et achetez en ligne en toute simplicité.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Découvrez l'Espace Achat
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Divider sx={{my: 4}}/>

            {/* Espace Vente */}
            <Grid container spacing={{xs: 2, md: 4}} columns={{xs: 6, sm: 8, md: 12}}>

                <Grid size={{xs: 6}}>
                    <Card sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Espace Vente
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Créez votre propre boutique en ligne et vendez vos produits facilement.
                                Gérez vos ventes, suivez les commandes et atteignez des clients du monde entier.
                            </Typography>
                            <Button variant="contained" color="secondary">
                                Créez votre Boutique
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{xs: 6}} sx={{display: 'flex', justifyContent: 'end'}}>
                    <CardMedia
                        component="img"
                        image={com_3}
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
                Djo E-Commerce permet une expérience d'achat et de vente fluide avec des outils puissants pour vous
                aider à réussir, que vous soyez un acheteur ou un vendeur. Rejoignez-nous dès aujourd'hui !
            </Typography>
        </Box>

    );
};

export default ECommercePage;
