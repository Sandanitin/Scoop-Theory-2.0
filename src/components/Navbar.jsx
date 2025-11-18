import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useScrollTrigger,
  Slide,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Menu', to: 'menu' },
  { name: 'About', to: 'about' },
  { name: 'Contact', to: 'contact' },
];

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'rgba(15, 23, 42, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
});

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
  fontWeight: 500,
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
    color: 'white',
    fontWeight: 600,
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        height: '100%',
        padding: '20px 0'
      }}
    >
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ 
          flexGrow: 1, 
          textAlign: 'center',
          mb: 2,
          fontWeight: 700,
          background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Scoop Time
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name} 
            component={Link} 
            to={item.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'center',
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontWeight: 500,
                },
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <StyledAppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'block' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Scoop Time
              </Typography>

              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.name}
                    component={Link}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    activeClass="active"
                  >
                    {item.name}
                  </NavButton>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavButton 
                  variant="contained" 
                  sx={{
                    ml: 2,
                    background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #7c3aed 30%, #db2777 90%)',
                    },
                  }}
                >
                  Order Now
                </NavButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: 'none' }, ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </HideOnScroll>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
              width: 250,
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'transparent',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;