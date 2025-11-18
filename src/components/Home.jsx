import React from 'react';
import { Box, Container, Typography, Button, styled, Grid, Chip, Stack, Divider } from '@mui/material';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  background: 'linear-gradient(120deg, rgba(5, 6, 22, 0.92), rgba(27, 11, 54, 0.65)), url("https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=2070&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(6, 2),
  width: '100%',
  overflow: 'hidden',
  margin: 0,
  boxSizing: 'border-box',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.15))',
    zIndex: 0
  }
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
  position: 'relative',
  zIndex: 1
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
  '&:hover': {
    background: 'linear-gradient(45deg, #7c3aed 30%, #db2777 90%)',
  },
}));

const Home = () => {
  const milkShakes = [
    { name: 'Salted Caramel Pretzels', vibe: 'Salted caramel ribbons, crushed pretzels, malt crème', badge: 'Best Seller' },
    { name: 'Dubai Chocolate', vibe: '70% single-origin cacao, dates, saffron dust', badge: 'Luxury' },
    { name: 'Chocolate Raspberry', vibe: 'Bittersweet chocolate, raspberry coulis core' },
    { name: 'Nutella', vibe: 'Toasted hazelnut spread, cocoa nib crunch', badge: 'Classic' },
    { name: 'Midnight Cookies & Cream', vibe: 'Charcoal cookies, vanilla bean base, fudge' },
    { name: 'Peanut Butter', vibe: 'Roasted peanut butter, sea salt foam' }
  ];

  const storyParagraphs = [
    'Our story began in 2024, sitting together in the car, when our son simply asked, “Can we open an ice cream place?” That little question turned into a big dream—and soon after, a family adventure.',
    'Today, Scoop Theory is a true family-run shop, where every scoop is made with care. We’re constantly experimenting with new flavors and savoring the chance to connect with our guests.',
    'For us, this is more than a business. It’s our family’s way of welcoming you in. We care about quality ingredients, generous scoops, and feel-good flavors that bring a little happiness and a touch of nostalgia with every bite.'
  ];

  const signatureFlights = [
    {
      title: 'Madagascar Pistachio Lush',
      tags: ['Infused', 'Small-batch'],
      description: 'Pistachio chunk ice cream folded with pure Madagascar bourbon vanilla and salted caramel swirl.',
      color: '#8b5cf6'
    },
    {
      title: 'Coco Espresso Tiramisu',
      tags: ['Layered', 'Caffeinated'],
      description: 'Coco coffee & cream-cheese base layered with ladyfingers, fudge ribbons, and espresso dust.',
      color: '#ec4899'
    },
    {
      title: 'Hazelnut Brownie Velvet',
      tags: ['Crunchy', 'Decadent'],
      description: 'Hazelnut-infused ice cream studded with chocolate crisps, crushed hazelnuts, and brownie bites.',
      color: '#f97316'
    },
    {
      title: 'Saffron Rose Royale',
      tags: ['Limited', 'Aromatic'],
      description: 'Saffron and almond pistachio gelato infused with cardamom, rose petals, and candied pistachio dust.',
      color: '#10b981'
    }
  ];

  const partyExperiences = [
    {
      title: 'Birthday Party Celebration',
      description: 'Create magical birthday memories with our themed party packages, custom decorations, and delicious catering options tailored to make the day extra special.',
      icon: '🎂',
      gradient: 'linear-gradient(145deg, #f472b6 0%, #ec4899 40%, #8b5cf6 100%)',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
      tags: ['Custom themes', 'Dessert bar', 'Party hosts'],
      tagline: 'Pastel balloon ceilings with dessert theatrics'
    },
    {
      title: 'Graduation Party',
      description: 'Celebrate academic achievements in style with spacious halls, photo-ready installations, and customizable food stations for the perfect graduation bash.',
      icon: '🎓',
      gradient: 'linear-gradient(145deg, #c084fc 0%, #a855f7 45%, #8b5cf6 100%)',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80',
      tags: ['AV setup', 'Photo booth', 'Custom menu'],
      tagline: 'Toast milestones with cinematic photo moments'
    },
    {
      title: 'Corporate Events',
      description: 'Host professional gatherings, product launches, or team-building events with state-of-the-art facilities, seamless tech, and premium catering services.',
      icon: '💼',
      gradient: 'linear-gradient(145deg, #38bdf8 0%, #0ea5e9 45%, #2563eb 100%)',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
      tags: ['Hybrid meetings', 'Dedicated planner', 'Signature mocktails'],
      tagline: 'Executive lounges with seamless tech & mixology'
    },
    {
      title: 'Luxury Showers & Soirées',
      description: 'Romantic tablescapes, floral installations, and indulgent grazing bars crafted for showers, proposals, or micro weddings.',
      icon: '💍',
      gradient: 'linear-gradient(145deg, #fcd34d 0%, #f97316 50%, #fb7185 100%)',
      image: 'https://images.unsplash.com/photo-1520854220072-3a6200de86b1?auto=format&fit=crop&w=1000&q=80',
      tags: ['Floral styling', 'Live dessert chef', 'Keepsake favors'],
      tagline: 'Rose quartz lighting & sparkler send-offs'
    }
  ];

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '100vw', 
      overflowX: 'hidden',
      margin: 0,
      padding: 0 
    }}>
      {/* Hero Section */}
      <HeroSection component="section" id="home">
        <Container maxWidth="lg" sx={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 0
        }}>
          <HeroContent>
            <Typography 
              variant="h5" 
              color="#ec4899" 
              gutterBottom
              sx={{ 
                fontWeight: 600, 
                letterSpacing: 2,
                textTransform: 'uppercase'
              }}
            >
              Premium Ice Cream
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              textAlign: 'center'
            }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 2
                }}
              >
                IT'S SCOOP TIME
              </Typography>
              <Typography 
                variant="h6" 
                component="p"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  maxWidth: '700px',
                  mb: 3
                }}
              >
                Handcrafted, irresistibly creamy, and full of flavors. Grab a scoop and taste the magic in every bite. Scoop in and let the good vibe begin.
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 4
            }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(139, 92, 246, 0.6)',
                    background: 'linear-gradient(45deg, #7c3aed 30%, #db2777 90%)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  }
                }}
              >
                Order Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  border: '2px solid white',
                  color: 'white',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: '#ec4899',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                View Full Menu
              </Button>
            </Box>

            {/* Quick Highlights */}
            <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
              {[
                { label: 'Fresh Batches Daily', value: 'Handmade', detail: 'Crafted every morning for peak freshness' },
                { label: 'Natural Ingredients', value: '100%', detail: 'Seasonal fruits & organic dairy' },
                { label: 'Happy Customers', value: '10k+', detail: 'Celebrations catered since 2015' }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      borderRadius: '20px',
                      p: 3,
                      background: 'rgba(3, 7, 18, 0.55)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(18px)',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 25px 60px -30px rgba(0,0,0,0.9)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.35,
                        background: 'radial-gradient(circle at top right, rgba(236,72,153,0.8), transparent 55%)'
                      }
                    }}
                  >
                    <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', letterSpacing: 3, textTransform: 'uppercase' }}>
                      {item.label}
                    </Typography>
                    <Box sx={{ mt: 1, mb: 1 }}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 800, 
                          color: 'white', 
                          background: 'linear-gradient(45deg, #f472b6, #c084fc)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
                      {item.detail}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </HeroContent>
        </Container>
      </HeroSection>
      
      {/* Premium Quality Section */}
      <Box component="section" id="craft" sx={{ 
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #ffffff 0%, #fdf2f8 60%, #eef2ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '28px',
            p: { xs: 4, md: 7 },
            boxShadow: '0 30px 80px -40px rgba(15,23,42,0.3)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(236,72,153,0.1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '220px',
              height: '220px',
              background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)',
              top: '-60px',
              right: '-20px',
              zIndex: 0
            }
          }}>
            <Grid container spacing={6} alignItems="center">
              {/* Left Side - Content */}
              <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ 
                  pr: { md: 6 },
                  '&:hover .floating-emoji': {
                    transform: 'translateY(-5px) rotate(5deg)'
                  }
                }}>
                  <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    <Typography 
                      variant="h3" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 900,
                        mb: 4,
                        color: '#0f172a',
                        fontSize: { xs: '2rem', md: '2.8rem' },
                        lineHeight: 1.1,
                        position: 'relative',
                        display: 'inline-block',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: '-15px',
                          top: '-10px',
                          width: '60px',
                          height: '60px',
                          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23f0abfc\'%3E%3Cpath d=\'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\'/%3E%3C/svg%3E")',
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          opacity: 0.8,
                          zIndex: -1,
                          transform: 'rotate(-15deg)'
                        }
                      }}
                    >
                      Handcrafted with{' '}
                      <Box 
                        component="span" 
                        className="gradient-text"
                        sx={{ 
                          background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', 
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: '-8px',
                            width: '100%',
                            height: '3px',
                            background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                            borderRadius: '4px',
                            transform: 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.3s ease'
                          },
                          '&:hover::after': {
                            transform: 'scaleX(1)'
                          }
                        }}
                      >
                        Love
                      </Box>
                    </Typography>
                    <Box 
                      className="floating-emoji floating-emoji-1"
                      sx={{
                        position: 'absolute',
                        right: '-40px',
                        top: '-20px',
                        fontSize: '2rem',
                        transform: 'rotate(-15deg)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        animation: 'float 6s ease-in-out infinite',
                        '@keyframes float': {
                          '0%, 100%': { transform: 'translateY(0) rotate(-15deg)' },
                          '50%': { transform: 'translateY(-10px) rotate(-5deg)' }
                        }
                      }}
                    >
                      ❤️
                    </Box>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#4b5563',
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      mb: 4,
                      mt: 4,
                      position: 'relative',
                      pl: 4,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '4px',
                        background: 'linear-gradient(to bottom, #8b5cf6, #ec4899)',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease'
                      },
                      '&:hover::before': {
                        width: '6px',
                        background: 'linear-gradient(to bottom, #ec4899, #8b5cf6)'
                      }
                    }}
                  >
                    Indulge in our artisanal ice cream, crafted in small batches with the finest ingredients. Each scoop is a perfect harmony of rich, creamy texture and bold, natural flavors that will transport your taste buds to dessert heaven.
                  </Typography>

                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {[
                      { title: 'Farm-fresh milk', desc: 'Collected within 12 hours', icon: '🥛' },
                      { title: 'Slow churned', desc: '48h maturation ritual', icon: '🌀' },
                      { title: 'Chef curated', desc: 'Seasonal tasting boards', icon: '👩‍🍳' }
                    ].map((feature, idx) => (
                      <Grid item xs={12} sm={4} key={idx}>
                        <Box
                          sx={{
                            borderRadius: '16px',
                            p: 2.5,
                            height: '100%',
                            background: 'rgba(139, 92, 246, 0.08)',
                            border: '1px solid rgba(139, 92, 246, 0.15)',
                            backdropFilter: 'blur(6px)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-6px)',
                              boxShadow: '0 12px 30px -10px rgba(139,92,246,0.4)'
                            }
                          }}
                        >
                          <Typography sx={{ fontSize: '1.75rem' }}>{feature.icon}</Typography>
                          <Typography sx={{ fontWeight: 700, mt: 1, color: '#0f172a' }}>
                            {feature.title}
                          </Typography>
                          <Typography sx={{ color: '#475569', fontSize: '0.95rem' }}>
                            {feature.desc}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={4}
                    sx={{
                      borderRadius: '20px',
                      p: 3,
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.12))',
                      border: '1px solid rgba(255,255,255,0.3)',
                      boxShadow: '0 20px 45px -20px rgba(15,23,42,0.45)'
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#8b5cf6' }}>
                        72 hr
                      </Typography>
                      <Typography sx={{ color: '#475569', fontWeight: 600 }}>
                        Flavor Infusion Cycle
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ color: '#0f172a', fontWeight: 700, mb: 0.5 }}>
                        Chef Lasya Signature Collection
                      </Typography>
                      <Typography sx={{ color: '#475569' }}>
                        Limited micro-batches infused with toasted nuts, botanicals, and hand-poured swirls to create instagram-ready scoops.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              
              {/* Right Side - Image */}
              <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  justifyContent: 'center'
                }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1464306076886-da185f6a9d12?auto=format&fit=crop&w=1000&q=80"
                    alt="Gourmet ice cream scoops"
                    sx={{
                      width: { xs: '100%', sm: '60%' },
                      borderRadius: '22px',
                      boxShadow: '0 30px 60px -25px rgba(15,23,42,0.45)',
                      objectFit: 'cover',
                      animation: 'floatY 9s ease-in-out infinite',
                      '@keyframes floatY': {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-12px)' }
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: { xs: '100%', sm: '35%' } }}>
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80"
                      alt="Premium toppings"
                      sx={{
                        width: '100%',
                        borderRadius: '18px',
                        objectFit: 'cover',
                        height: '220px',
                        boxShadow: '0 20px 40px -20px rgba(15,23,42,0.35)',
                        transition: 'transform 0.4s ease',
                        '&:hover': { transform: 'scale(1.03)' }
                      }}
                    />
                    <Box
                      sx={{
                        borderRadius: '18px',
                        p: 3,
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 25px 45px -30px rgba(15,23,42,0.6)',
                        position: 'relative'
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, color: '#0f172a' }}>
                        Seasonal Spotlight
                      </Typography>
                      <Typography sx={{ color: '#475569', mb: 2 }}>
                        Strawberries & Rose crumble, roasted pistachio praline, burnt caramel kisses.
                      </Typography>
                      <Stack direction="row" spacing={1.5}>
                        {['Vegan option', 'Allergy safe', 'Chef tasting'].map(chip => (
                          <Chip
                            key={chip}
                            label={chip}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(139,92,246,0.12)',
                              color: '#8b5cf6',
                              fontWeight: 600
                            }}
                          />
                        ))}
                      </Stack>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-18px',
                          right: '16px',
                          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: '50px',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          boxShadow: '0 10px 25px rgba(236,72,153,0.4)'
                        }}
                      >
                        Limited
                      </Box>
                    </Box>
                  </Box>

                  {/* Animated Badge */}
                  <Box sx={{
                    position: 'absolute',
                    top: { xs: '20px', sm: '30px' },
                    right: { xs: '20px', sm: '40px' },
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { transform: 'scale(1) rotate(0deg)' },
                      '50%': { transform: 'scale(1.05) rotate(2deg)' },
                      '100%': { transform: 'scale(1) rotate(0deg)' }
                    }
                  }}>
                    <Box sx={{ 
                      background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 800,
                      fontSize: '1.5rem',
                      lineHeight: 1,
                      mr: 1
                    }}>50+</Box>
                    <Box sx={{ 
                      color: '#4b5563',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>Unique Flavors</Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Party Hall Section */}
      <Box component="section" id="party" sx={{ 
        py: { xs: 10, md: 12 },
        background: 'linear-gradient(135deg, #f8fbff 0%, #fdf2ff 80%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 1
          }}>
            <Typography 
              variant="h2" 
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Party Hall
            </Typography>
            <Typography 
              variant="h6" 
              component="p"
              sx={{
                color: '#4b5563',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.7
              }}
            >
              Make your special occasions unforgettable with our premium party hall, perfect for all your celebrations
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
            {partyExperiences.map((event, index) => (
              <Grid item xs={12} md={6} lg={3} key={event.title}>
                <Box 
                  sx={{
                    height: '100%',
                    background: event.gradient,
                    borderRadius: '28px',
                    p: 3.5,
                    boxShadow: '0 35px 75px -45px rgba(15,23,42,0.35)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    position: 'relative',
                    overflow: 'hidden',
                    opacity: 0,
                    animation: 'fadeInUp 0.8s forwards',
                    animationDelay: `${index * 0.15}s`,
                    '@keyframes fadeInUp': {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.25,
                      mixBlendMode: 'screen',
                      zIndex: 0
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.55) 100%)',
                      zIndex: 0
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 28px 55px -35px rgba(0,0,0,0.4)`
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '18px',
                      background: 'rgba(255,255,255,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      color: 'white',
                      mb: 3,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {event.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      mb: 1,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '0.95rem',
                      mb: 1.5,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {event.tagline}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.92)',
                      lineHeight: 1.7,
                      mb: 3,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {event.description}
                  </Typography>
                  <Grid container spacing={1} sx={{ mb: 2, position: 'relative', zIndex: 1 }}>
                    {event.tags.map(tag => (
                      <Grid item key={tag}>
                        <Chip 
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            color: 'white',
                            fontWeight: 600,
                            borderRadius: '999px',
                            fontSize: '0.8rem'
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ 
            textAlign: 'center', 
            mt: 6,
            position: 'relative',
            zIndex: 1
          }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(45deg, #8b5cf6 30%, #ec4899 90%)',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
                textTransform: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(139, 92, 246, 0.6)',
                  background: 'linear-gradient(45deg, #7c3aed 30%, #db2777 90%)',
                }
              }}
            >
              Book Your Event
            </Button>
          </Box>

          {/* Decorative Elements */}
          <Box 
            sx={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              filter: 'blur(60px)',
              zIndex: 0
            }}
          />
          <Box 
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              filter: 'blur(80px)',
              zIndex: 0
            }}
          />
        </Container>
      </Box>

      {/* Milkshakes Section */}
      <Box component="section" id="menu" sx={{
        py: { xs: 8, md: 12 },
        background: '#050b1d',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'relative' }}>
                <Typography 
                  sx={{ 
                    textTransform: 'uppercase',
                    letterSpacing: 4,
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    mb: 2
                  }}
                >
                  Milkshake Theory
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    lineHeight: 1.2,
                    background: 'linear-gradient(45deg, #f472b6, #c084fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Whipped to velvet. Served with swagger.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                  Our milkshakes borrow cues from mixology—layered textures, smoked garnishes, and premium toppings. Grab a spoon or a straw and sip straight from the dream.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    px: 4,
                    py: 1.3,
                    borderRadius: '40px',
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: '0 15px 35px -15px rgba(236,72,153,0.6)'
                  }}
                  href="https://www.clover.com/online-ordering/scooptheory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Drink List
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Grid container spacing={3}>
                  {milkShakes.map((shake, index) => (
                    <Grid item xs={12} sm={6} key={shake.name}>
                      <Box
                        sx={{
                          borderRadius: '18px',
                          p: 3,
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          minHeight: '170px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1.5,
                          transition: 'transform 0.3s ease, border-color 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            borderColor: 'rgba(236,72,153,0.4)'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}. {shake.name}
                          </Typography>
                          {shake.badge && (
                            <Chip 
                              label={shake.badge}
                              size="small"
                              sx={{
                                background: 'rgba(244, 114, 182, 0.15)',
                                color: '#f472b6',
                                fontWeight: 600
                              }}
                            />
                          )}
                        </Box>
                        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>
                          {shake.vibe}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                  }}
                >
                  {[
                    'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=900&q=80',
                    'https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80'
                  ].map((img, idx) => (
                    <Box
                      key={img}
                      component="img"
                      src={img}
                      alt={idx === 0 ? 'Milkshake art' : 'Dessert garnish'}
                      sx={{
                        width: { xs: '100%', sm: 'calc(50% - 8px)' },
                        borderRadius: '18px',
                        objectFit: 'cover',
                        height: { xs: 220, sm: 200 },
                        boxShadow: '0 25px 45px -30px rgba(0,0,0,0.45)',
                        border: '1px solid rgba(255,255,255,0.08)'
                      }}
                    />
                  ))}
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box component="section" id="about" sx={{ 
        py: { xs: 8, md: 12 },
        background: '#fff9f4'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ letterSpacing: 3, textTransform: 'uppercase', color: '#f97316', fontWeight: 600, mb: 2 }}>
                Our Story
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, color: '#0f172a', mb: 4 }}>
                From one curious question to a family-run scoop haven.
              </Typography>
              <Stack spacing={3}>
                {storyParagraphs.map((paragraph, idx) => (
                  <Typography key={idx} sx={{ color: '#475569', lineHeight: 1.8 }}>
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 4 }}>
                <Box>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#ec4899' }}>2024</Typography>
                  <Typography sx={{ color: '#475569', fontWeight: 600 }}>Doors opened</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#8b5cf6' }}>10k+</Typography>
                  <Typography sx={{ color: '#475569', fontWeight: 600 }}>Families served</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 40px 80px -45px rgba(249,115,22,0.45)'
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Family enjoying ice cream"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '16px',
                    p: 2.5,
                    maxWidth: '260px',
                    boxShadow: '0 20px 40px -25px rgba(0,0,0,0.35)'
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: '#0f172a' }}>“Can we open an ice cream place?”</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.9rem', mt: 1 }}>
                    — the spark from our son that started Scoop Theory.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Signature Flights Section */}
      <Box component="section" id="signature" sx={{ py: { xs: 8, md: 12 }, background: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography sx={{ letterSpacing: 4, textTransform: 'uppercase', color: '#94a3b8', fontWeight: 600, mb: 2 }}>
              Theory Signature
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#0f172a' }}>
              Flavor flights inspired by the Scoop Theory lab.
            </Typography>
            <Typography sx={{ color: '#475569', mt: 2, maxWidth: '600px', mx: 'auto' }}>
              Curated from our experimental sheets—layered textures, botanical infusions, and nostalgic desserts spun into photo-ready scoops.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {signatureFlights.map(flight => (
              <Grid item xs={12} md={6} key={flight.title}>
                <Box
                  sx={{
                    borderRadius: '24px',
                    background: 'white',
                    p: 4,
                    boxShadow: '0 20px 45px -30px rgba(15,23,42,0.25)',
                    border: `1px solid ${flight.color}30`,
                    minHeight: '230px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <Stack direction="row" spacing={1.5}>
                    {flight.tags.map(tag => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: `${flight.color}15`,
                          color: flight.color,
                          fontWeight: 600
                        }}
                      />
                    ))}
                  </Stack>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
                    {flight.title}
                  </Typography>
                  <Typography sx={{ color: '#475569', lineHeight: 1.7 }}>
                    {flight.description}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{ 
                      alignSelf: 'flex-start',
                      textTransform: 'none',
                      fontWeight: 600,
                      color: flight.color
                    }}
                  >
                    Taste this flight →
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box>
                  <Typography sx={{ letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, mb: 1 }}>
                    Contact
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, lineHeight: 1.2 }}>
                    Let’s plan your next scoop celebration.
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                  Book tastings, reserve the party hall, or chat about custom pints. Our team replies within a scoop-hour.
                </Typography>
                <Stack spacing={2}>
                  {[
                    { label: 'Call us', value: '+1 (555) 012-4567', href: 'tel:+15550124567' },
                    { label: 'Email', value: 'hello@scooptheory.com', href: 'mailto:hello@scooptheory.com' },
                    { label: 'Visit', value: '214 Scoop Avenue, Palm Street' }
                  ].map((item) => (
                    <Box key={item.label} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                        {item.label}
                      </Typography>
                      {item.href ? (
                        <Button
                          component="a"
                          href={item.href}
                          sx={{ color: '#f472b6', justifyContent: 'flex-start', px: 0 }}
                        >
                          {item.value}
                        </Button>
                      ) : (
                        <Typography sx={{ fontWeight: 600 }}>{item.value}</Typography>
                      )}
                    </Box>
                  ))}
                </Stack>
                <Grid container spacing={3}>
                  {[
                    { title: 'Hours', detail: 'Mon - Sun · 10 AM - 11 PM' },
                    { title: 'Private Events', detail: 'Book at least 10 days ahead' }
                  ].map(card => (
                    <Grid item xs={12} sm={6} key={card.title}>
                      <Box
                        sx={{
                          borderRadius: '20px',
                          p: 3,
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        <Typography sx={{ fontWeight: 700 }}>{card.title}</Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.75)', mt: 1 }}>
                          {card.detail}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      px: 4,
                      py: 1.2,
                      borderRadius: '40px',
                      fontWeight: 600
                    }}
                  >
                    Schedule a tasting
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.4)',
                      color: 'white',
                      px: 4,
                      py: 1.2,
                      borderRadius: '40px',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255,255,255,0.08)'
                      }
                    }}
                  >
                    Download brochure
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: 360,
                  position: 'relative',
                  boxShadow: '0 45px 90px -55px rgba(15,23,42,0.8)'
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1500534314311-916215183ab7?auto=format&fit=crop&w=1200&q=80"
                  alt="Ice cream shop interior"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    background: 'rgba(3,7,18,0.75)',
                    borderRadius: '18px',
                    p: 2.5,
                    width: 220,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>Live Scoop Board</Typography>
                  <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
                    Pistachio honeycomb, Ruby velvet cheesecake, Mango basil gelato.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;