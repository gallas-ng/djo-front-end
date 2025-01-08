import {useState} from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Paper,
    MenuItem,
    Dialog,
    Snackbar,
    DialogContent,
    DialogTitle,
    Alert
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// ✅ Schéma de Validation avec Yup
const schema = yup.object().shape({
    user_fname: yup.string().required('Le prenom est requis'),
    user_lname: yup.string().required('Le nom est requis'),
    user_email: yup.string().email('Email invalide').required('L\'email est requis'),
    user_subject: yup.string().required('Le sujet est requis'),
    user_message: yup.string().min(10, 'Le message doit contenir au moins 10 caractères').required('Le message est requis'),
    user_tel: yup.string()
        .matches(/^\+?\d{10,15}$/, 'Numéro de téléphone invalide')
        .required('Le numéro de téléphone est requis'),
});

function ContactForm() {
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            user_fname: '',
            user_lname: '',
            user_email: '',
            user_tel: '',
            user_subject: '',
            user_message: ''
        }
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [formStatus, setFormStatus] = useState({ success: false, message: '' });


    const onSubmit = (data) => {

        emailjs.sendForm(
            'service_jnd5n2p',
            'template_ik8h8at',
            data,{
            publicKey:'h8Raw5G_fdXVVsAvB',
            }
        ).then((result) => {
            console.log(result.text);
            setFormStatus({ success: true, message: 'Message envoyé avec succès !' });
            setOpenDialog(true);
            reset(); // Vider les champs
        }, (error) => {
            console.log(error.text);
            setFormStatus({ success: false, message: 'Erreur lors de l\'envoi du message.' });
            setOpenSnackbar(true);
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    📨 Contactez-nous
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
                    Nous serions ravis de discuter avec vous. Remplissez le formulaire ci-dessous !
                </Typography>

                <Box
                    component="form"
                    autoComplete="off"
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
                        mt: 2,
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >

                    {/* Nom */}
                    <Controller
                        name="user_lname"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Nom"
                                fullWidth
                                size="small"
                                error={!!errors.user_lname}
                                helperText={errors.user_lname?.message}
                            />
                        )}
                    />

                    {/* Prenom */}
                    <Controller
                        name="user_fname"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Prenom"
                                fullWidth
                                size="small"
                                error={!!errors.user_fname}
                                helperText={errors.user_fname?.message}
                            />
                        )}
                    />

                    {/* Email */}
                    <Controller
                        name="user_email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                fullWidth
                                size="small"
                                error={!!errors.user_email}
                                helperText={errors.user_email?.message}
                                sx={{ gridColumn: 'span 2' }}
                            />
                        )}
                    />

                    {/* Téléphone */}
                    <Controller
                            name="user_tel"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Numéro de téléphone"
                                    fullWidth
                                    size="small"
                                    error={!!errors.user_tel}
                                    helperText={errors.user_tel?.message}
                                    type="tel"
                                    placeholder="+33 6 12 34 56 78"
                                    sx={{ gridColumn: 'span 2' }}
                                />
                            )}
                        />

                    {/* Sujet */}
                    <Controller
                        name="user_subject"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                name="user_subject"
                                size="small"
                                select
                                fullWidth
                                label="Sujet"
                                variant="outlined"
                                defaultValue=""
                                error={!!errors.user_subject}
                                helperText={errors.user_subject?.message}
                                sx={{ gridColumn: 'span 2' }}
                            >
                                <MenuItem value="support">Support Technique</MenuItem>
                                <MenuItem value="partenariat">Partenariat / Proposition</MenuItem>
                                <MenuItem value="reclamation">Réclamation</MenuItem>
                                <MenuItem value="autre">Autre</MenuItem>
                            </TextField>
                        )}
                    />


                    {/* Message */}
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                name="user_message"
                                size="small"
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                                error={!!errors.user_message}
                                helperText={errors.user_message?.message}
                                sx={{ gridColumn: 'span 2', fontSize: '9px' }}
                            />
                        )}
                    />

                    {/* Bouton */}
                    <Box sx={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary" size="large" type="submit">
                            Envoyer
                        </Button>
                    </Box>
                    {/* Snackbar pour les erreurs */}
                    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                            {formStatus.message}
                        </Alert>
                    </Snackbar>

                    {/* Dialog pour le succès */}
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>
                            <CheckCircleIcon color="success" sx={{ fontSize: 40, verticalAlign: 'middle' }} /> Message envoyé
                        </DialogTitle>
                        <DialogContent>
                            <Typography>{formStatus.message}</Typography>
                        </DialogContent>
                        <Button onClick={handleCloseDialog} color="primary" sx={{ m: 2 }}>Fermer</Button>
                    </Dialog>
                </Box>
            </Paper>

        </Container>
    );
}

export default ContactForm;
