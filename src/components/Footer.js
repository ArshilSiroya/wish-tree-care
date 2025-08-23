import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        color: 'white',
        py: { xs: 6, md: 8 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Wish Tree Care
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9 }}>
              {`Professional care services providing compassionate support for individuals and families.
              We're committed to enhancing the quality of life for our clients through personalized care.`}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Located in the heart of Clyde, Melbourne, serving our local community with dedication and compassion.
            </Typography>
          </Grid>
          
          {/* Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                NDIS Support Services
              </Link>
              <Link href="#" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Home Care Packages (HCP)
              </Link>
              <Link href="#" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Commonwealth Home Support (CHSP)
              </Link>
              <Link href="#" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Personal Care
              </Link>
              <Link href="#" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Domestic Assistance
              </Link>
            </Box>
          </Grid>
          
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  <strong>Email:</strong>
                </Typography>
                <Link 
                  href="mailto:info@wishtreecare.com.au" 
                  color="inherit" 
                  sx={{ 
                    opacity: 0.9, 
                    textDecoration: 'none', 
                    '&:hover': { opacity: 1 },
                    fontSize: '0.9rem'
                  }}
                >
                  info@wishtreecare.com.au
                </Link>
              </Box>
              
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  <strong>Location:</strong>
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Clyde, Melbourne, VIC
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  <strong>Service Areas:</strong>
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Clyde, Cranbourne, Berwick, Pakenham, and surrounding areas
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 5, borderColor: 'rgba(255,255,255,0.2)' }} />
        
        {/* Bottom Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
            © {new Date().getFullYear()} Wish Tree Care. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {`Providing compassionate care services across Melbourne's South East`}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer 