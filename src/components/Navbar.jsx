import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import d_logo from '../assets/d-logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box
            component="img"
            src={d_logo}
            alt="Daara Ji Ops"
            sx={{
                height: '50px', // Ajuste la hauteur selon tes besoins
                cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
        />

        {/* Boutons Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'block'}  }}>
          <Button color="secondary" component={Link} to="/">
            Accueil
          </Button>
          <Button color="secondary" component={Link} to="/e_commerce">
            Djo E-Commerce
          </Button>
          <Button color="secondary" component={Link} to="/e_services">
            Djo E-Service
          </Button>
        </Box>

        {/* Menu Hamburger pour Mobile */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, backgroundColor: 'primary' }}>
          <IconButton color="secondary" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/" sx={{fontWeight: 'bold', color: '#6b4737'}}>Accueil</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/e_commerce" sx={{fontWeight: 'bold', color: '#6b4737'}}>Djo E-Commerce</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/e_services" sx={{fontWeight: 'bold', color: '#6b4737'}}>Djo E-Services</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
