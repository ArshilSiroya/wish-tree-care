"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  Stack,
} from "@mui/material";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroImage from "../../public/images/hero/happy-old-woman.jpg";
import AboutImage from "../../public/images/team/our-team.jpg";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ElderlyRoundedIcon from "@mui/icons-material/ElderlyRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import YardRoundedIcon from "@mui/icons-material/YardRounded";
import CleaningServicesRoundedIcon from "@mui/icons-material/CleaningServicesRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";

const HomePage = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "850px",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Hero Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${HeroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
              zIndex: 1,
            },
          }}
        >
          <Navigation />

          {/* Hero Content - Title and Subtitle */}
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: 2,
              height: "65%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 25,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "2.5rem", lg: "3.5rem" },
                  lineHeight: 1.2,
                  width: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: { xs: 3, md: 4 },
                }}
              >
                Compassionate Care, Anytime, Anywhere
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "1.25rem", md: "1.5rem", lg: "1.4rem" },
                  lineHeight: 1.4,
                  opacity: 0.95,
                  // textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                {`Trusted caregivers dedicated to your loved ones' comfort, safety, and well-being`}
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* About Section */}
      <Box sx={{ pt: { xs: 6, md: 17 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              // width: '100%'
            }}
          >
            {/* Left Side - Team Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // minWidth: 0,
                // maxWidth: { xs: '100%', md: '50%' },
                pr: { md: 3 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    borderRadius: "30px",
                    overflow: "hidden",
                    display: "inline-block",
                    width: { xs: "100%", md: "120%" },
                    // marginLeft: '-25%',
                    maxWidth: "1200px",
                  }}
                >
                  <Image
                    src={AboutImage}
                    alt="Our Team"
                    width={1500}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "450px",
                      objectFit: "fill",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Right Side - Dummy Text */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                minWidth: 0,
                pl: { md: 3 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1.6,
                  mt: { xs: 7, md: 0 },
                  textAlign: { xs: "center", md: "left" },
                  // color: 'primary.main',
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                About Wish Tree Care
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                  mb: 3,
                  fontWeight: 400,
                  textAlign: { xs: "center", md: "left" },
                  // color: 'text.secondary',
                }}
              >
                At Wish Tree Care, we believe that every individual deserves to
                live with dignity, comfort, and independence. Our dedicated team
                of compassionate caregivers is committed to providing
                exceptional care services that enhance the quality of life for
                our clients and their families.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ pt: { xs: 6, md: 17 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 6,
              fontSize: { xs: "2rem", md: "3rem" },
              textAlign: "center",
              // color: 'primary.main'
            }}
          >
            Our Services
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Row 1 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <AccessibilityNewRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  NDIS
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Comprehensive NDIS support services for participants including
                  personal care and community participation.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <HomeRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  HCP
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Tailored home care packages providing comprehensive support
                  for daily living and personal care needs.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <SupportRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  CHSP
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Entry-level support services to help older people live
                  independently at home and in their community.
                </Typography>
              </Box>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <ElderlyRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Aged Care
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Specialized care services designed to meet the unique needs of
                  elderly individuals and their families.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <PersonRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Personal Care
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Compassionate personal care services including bathing,
                  dressing, grooming, and mobility assistance.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  //  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <GroupsRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Social Services
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Social support and companionship services to enhance quality
                  of life and community engagement.
                </Typography>
              </Box>
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <DirectionsCarRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Transport
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Safe and reliable transport services for medical appointments,
                  shopping, and community activities.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 4,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <YardRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Gardening
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Professional gardening and outdoor maintenance services to
                  keep your property beautiful and well-maintained.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  //    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <CleaningServicesRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Domestic Assistance
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Comprehensive domestic support including cleaning, laundry,
                  and household management services.
                </Typography>
              </Box>
            </Grid>

            {/* Row 4 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    // height: 190,
                    borderRadius: "20%",
                    // opacity: 0.1,
                    bgcolor: "#e9f4fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",

                      // bgcolor: '#268CED',
                      mt: 1,
                    }}
                  >
                    <RestaurantRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Meal Preparation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Nutritious meal preparation and cooking services tailored to
                  dietary requirements and preferences.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  p: 4,
                  height: "300px",
                  width: "300px",
                  // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  // '&:hover': {
                  //   transform: 'translateY(-8px)',
                  //   boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  // },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 90,
                    borderRadius: "20%",
                    bgcolor: "#e9f4fd",
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      mt: 1,
                      opacity: 1,
                    }}
                  >
                    <PeopleAltRoundedIcon
                      fontSize="large"
                      style={{ color: "#268CED", opacity: 1 }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  Staffing Services
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  Professional staffing solutions providing qualified and
                  experienced caregivers for your specific needs.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;
