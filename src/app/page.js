"use client";

import { useState, useEffect } from "react";
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
import HeroImage1 from "../../public/images/hero/Hero1.jpg";
import HeroImage2 from "../../public/images/hero/Hero2.jpg";
import HeroImage3 from "../../public/images/hero/Hero3.jpg";
import HeroImage4 from "../../public/images/hero/Hero4.jpg";
import HeroImage from "../../public/images/hero/happy-old-woman.jpg";
import AboutImage from "../../public/images/team/our-team.svg";
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
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const HomePage = () => {
  const theme = useTheme();
  const router = useRouter();

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const heroImages = [
    HeroImage,
    HeroImage1,
    HeroImage2,
    HeroImage3,
    HeroImage4,
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % heroImages.length;
        // When looping back to 0, disable transition temporarily
        if (nextIndex === 0) {
          setIsTransitioning(false);
        }
        return nextIndex;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Re-enable transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Calculate translation for sliding effect
  const getTranslateX = () => {
    return -currentImageIndex * 100;
  };

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
          height: { xs: "740px", xl: "1140px" },
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

        {/* Hero Background Image Carousel */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          }}
        >
          {/* Image Container with Sliding Effect */}
          <Box
            sx={{
              display: "flex",
              height: "100%",
              transform: `translateX(${getTranslateX()}%)`,
              transition: isTransitioning
                ? "transform 0.8s ease-in-out"
                : "none",
            }}
          >
            {heroImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  minWidth: "100%",
                  flexShrink: 0,
                  height: "100%",
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
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
              />
            ))}
          </Box>
        </Box>

        {/* Navigation Layer */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
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
                mt: { xs: 25, xl: 29 },
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

          {/* Carousel Indicators */}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1.5,
              zIndex: 2,
            }}
          >
            {heroImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{
                  width: currentImageIndex === index ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    currentImageIndex === index
                      ? "#ffffff"
                      : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              />
            ))}
          </Box>
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
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  px: 3,
                  py: 0.8,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: 2,
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                Contact Us
              </Button>
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

          {/* Combined Services Section - Side by Side */}
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* Support Coordination Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #e9f4fd 0%, #c8e3f8 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(38, 140, 237, 0.2)",
                  }}
                >
                  <AssignmentIcon
                    fontSize="large"
                    style={{ color: "#268CED" }}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Support Coordination
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
                {[
                  {
                    name: "Physiotherapy",
                    icon: <AssignmentIcon />,
                    description:
                      "Professional physiotherapy services for improved mobility and rehabilitation",
                  },
                  {
                    name: "Massage Therapy",
                    icon: <AssignmentIcon />,
                    description:
                      "Therapeutic massage for relaxation and pain relief",
                  },
                  {
                    name: "Podiatry",
                    icon: <AssignmentIcon />,
                    description: "Expert foot care and podiatry services",
                  },
                  {
                    name: "Occupational Therapy",
                    icon: <AssignmentIcon />,
                    description:
                      "Comprehensive occupational therapy assessments and support",
                  },
                  {
                    name: "Nutritional Management",
                    icon: <AssignmentIcon />,
                    description:
                      "Personalized nutritional guidance and meal planning",
                  },
                  {
                    name: "Direct Care Services",
                    icon: <AssignmentIcon />,
                    description:
                      "Compassionate direct care for daily living support",
                  },
                  {
                    name: "Home Maintenance",
                    icon: <AssignmentIcon />,
                    description: "Home maintenance and safety modifications",
                  },
                  {
                    name: "Delivered Meals",
                    icon: <AssignmentIcon />,
                    description: "Nutritious meals delivered to your doorstep",
                  },
                  {
                    name: "Gardening",
                    icon: <AssignmentIcon />,
                    description:
                      "Professional gardening and outdoor maintenance",
                  },
                  {
                    name: "Equipment & Aides",
                    icon: <AssignmentIcon />,
                    description:
                      "Assistance with mobility aids and home equipment",
                  },
                ].map((service) => (
                  <Grid item xs={12} sm={4} key={service.name}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: 3,
                        p: 3,
                        height: "160px",
                        width: "370px",
                        // minHeight: "180px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid rgba(38, 140, 237, 0.1)",
                        "&:hover": {
                          boxShadow: "0 8px 24px rgba(38, 140, 237, 0.25)",
                          transform: "translateY(-8px)",
                          "&::before": {
                            transform: "scaleX(1)",
                          },
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background:
                            "linear-gradient(90deg, #268CED 0%, #1a6fc0 100%)",
                          transform: "scaleX(0)",
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      {/* Icon and Title in Same Line */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #e9f4fd 0%, #c8e3f8 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(38, 140, 237, 0.2)",
                            flexShrink: 0,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#1a1a1a",
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                          }}
                        >
                          {service.name}
                        </Typography>
                      </Box>
                      {/* Service Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          fontSize: "0.9rem",
                          flex: 1,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Personalised Care Section */}
            <Grid item xs={12} md={6} sx={{ marginTop: "50px" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #e9f4fd 0%, #c8e3f8 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(38, 140, 237, 0.2)",
                  }}
                >
                  <PersonOutlineIcon
                    fontSize="large"
                    style={{ color: "#268CED" }}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#1a1a1a",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Personalised Care
                </Typography>
              </Box>

              <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
                {[
                  {
                    name: "Personal Care",
                    icon: <PersonRoundedIcon />,
                    description:
                      "Compassionate personal care services including bathing and grooming",
                  },
                  {
                    name: "Cleaning",
                    icon: <CleaningServicesRoundedIcon />,
                    description:
                      "Professional cleaning services to keep your home spotless",
                  },
                  {
                    name: "Domestic Assistance",
                    icon: <HomeRoundedIcon />,
                    description:
                      "Comprehensive domestic support and household management",
                  },
                  {
                    name: "Respite Care",
                    icon: <ElderlyRoundedIcon />,
                    description:
                      "Temporary care to give primary caregivers a break",
                  },
                  {
                    name: "Social Support",
                    icon: <GroupsRoundedIcon />,
                    description: "Social engagement and companionship services",
                  },
                  {
                    name: "Meal Preparation Help",
                    icon: <RestaurantRoundedIcon />,
                    description:
                      "Assistance with meal planning and preparation",
                  },
                  {
                    name: "Community Transport",
                    icon: <DirectionsCarRoundedIcon />,
                    description: "Safe and reliable transportation services",
                  },
                ].map((service) => (
                  <Grid item xs={12} sm={4} key={service.name}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: 3,
                        p: 3,
                        height: "160px",
                        width: "370px",
                        // minHeight: "180px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid rgba(38, 140, 237, 0.1)",
                        "&:hover": {
                          boxShadow: "0 8px 24px rgba(38, 140, 237, 0.25)",
                          transform: "translateY(-8px)",
                          "&::before": {
                            transform: "scaleX(1)",
                          },
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background:
                            "linear-gradient(90deg, #268CED 0%, #1a6fc0 100%)",
                          transform: "scaleX(0)",
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      {/* Icon and Title in Same Line */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #e9f4fd 0%, #c8e3f8 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(38, 140, 237, 0.2)",
                            flexShrink: 0,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#1a1a1a",
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                          }}
                        >
                          {service.name}
                        </Typography>
                      </Box>
                      {/* Service Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.6,
                          fontSize: "0.9rem",
                          flex: 1,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          textOverflow: "ellipsis",
                          width: "100%",
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
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
