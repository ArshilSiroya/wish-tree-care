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
  Link,
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
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PanToolIcon from "@mui/icons-material/PanTool";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import WorkIcon from "@mui/icons-material/Work";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import BuildIcon from "@mui/icons-material/Build";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const HomePage = () => {
  const theme = useTheme();
  const router = useRouter();

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const heroImages = [
    HeroImage4,
    // HeroImage,
    HeroImage1,
    HeroImage2,
    HeroImage3,
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
          height: { xs: "720px", xl: "950px" },
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
                  backgroundPosition: "top center",
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
                Compassionate Care delivered to your doorsteps
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
                {`Trusted caregivers to you and your loved ones' comfort, safety, and well-being`}
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
                About Wishtree Care
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                  mb: 2,
                  fontWeight: 400,
                  textAlign: { xs: "center", md: "left" },
                  // color: 'text.secondary',
                }}
              >
                At Wishtree Care, kindness and respect guide everything we do.
                We support people to live safely and independently at home. We
                listen, adapt and deliver care that makes a real difference.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                  mb: 3,
                  fontWeight: 400,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                To amplify that promise,{" "}
                <strong>Wishtree Care has partnered with Trilogy Care</strong>.
                Together, we turn approved funding into more care hours, more
                control and less complexity for every client. {`Trilogy Care's`}{" "}
                model keeps overheads low so more of your budget becomes real
                support.
              </Typography>

              {/* Trilogy Care Logo */}
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Link
                  href="https://trilogycare.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-block",
                    opacity: 0.9,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Image
                    src="/triology-care.svg"
                    alt="Trilogy Care - Partner"
                    width={200}
                    height={70}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </Box>

              {/* <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1.5,
                    fontSize: "1.1rem",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Contact Us
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1rem",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <strong>Trilogy Care:</strong>{" "}
                    <Link href="https://trilogycare.com.au" target="_blank" sx={{ color: "#268CED" }}>
                      trilogycare.com.au
                    </Link>{" "}
                    | 1300 459 190
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1rem",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <strong>Wishtree Care:</strong> 0452 196 648 |{" "}
                    <Link href="mailto:info@wishtreecare.com.au" sx={{ color: "#268CED" }}>
                      info@wishtreecare.com.au
                    </Link>
                  </Typography>
                </Box>
              </Box> */}

              <Button
                variant="contained"
                onClick={() =>
                  typeof window !== "undefined" &&
                  window.dispatchEvent(new CustomEvent("openContactModal"))
                }
                sx={{
                  mt: 2,
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
                Get the most out of your package now...ask us how!
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
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    // mb: 2,
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
                    Care & Support Coordination
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.6,
                    color: "text.secondary",
                    ml: { xs: 0, md: "80px" }, // Align with title text (60px icon + 16px gap + 12px)
                    maxWidth: { xs: "100%", md: "90%" },
                  }}
                >
                  {`Care coordination is about planning a person's care and support, and sharing information with everyone who helps to care for the person. Care coordination is something that your health care team may do after talking with you and the person you care for.`}
                </Typography>
              </Box>

              <Grid
                container
                spacing={2}
                rowSpacing={3.5}
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
                {[
                  {
                    name: "Assessing Physical & Mental Health",
                    icon: <HealthAndSafetyIcon />,
                    description:
                      "Comprehensive assessment of a person's physical and mental health needs",
                  },
                  {
                    name: "Educating & Supporting",
                    icon: <SchoolIcon />,
                    description:
                      "Educating and supporting the person and their carer",
                  },
                  {
                    name: "Community Care & Support",
                    icon: <GroupsIcon />,
                    description:
                      "Helping the person get community care and support services",
                  },
                  {
                    name: "Health Provider Coordination",
                    icon: <PhoneIcon />,
                    description:
                      "Talking with health and community care providers",
                  },
                  {
                    name: "Future Service Planning",
                    icon: <CalendarTodayIcon />,
                    description:
                      "Planning what services might be needed in the future",
                  },
                  {
                    name: "Allied Health",
                    icon: <MedicalServicesIcon />,
                    description:
                      "We help you reach out to right allied health who tailor make a plan that is in line with your health & life goals",
                  },
                  {
                    name: "Nursing",
                    icon: <LocalHospitalIcon />,
                    description:
                      "We look after your clinical needs by providing you access to prompt and reliable nursing service",
                  },
                  {
                    name: "Social Activity Groups",
                    icon: <GroupsRoundedIcon />,
                    description:
                      "Engaging social activities and group programs for community connection and wellbeing",
                  },
                ].map((service) => (
                  <Grid item xs={12} sm={4} key={service.name}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: 3,
                        p: 2.5,
                        minHeight: "140px",
                        width: "370px",
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
                          mb: 0.5,
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
                            fontSize: { xs: "1rem", md: "1.1rem" },
                          }}
                        >
                          {service.name}
                        </Typography>
                      </Box>
                      {/* Service Description */}
                      {service.description && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.5,
                            fontSize: "0.85rem",
                            pl: "64px",
                            flex: 1,
                          }}
                        >
                          {service.description}
                        </Typography>
                      )}
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

              <Grid
                container
                spacing={2}
                rowSpacing={3.5}
                sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
              >
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
                        p: 2.5,
                        minHeight: "140px",
                        width: "370px",
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
                          // mb: 0.0,
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
                            fontSize: { xs: "1rem", md: "1.1rem" },
                          }}
                        >
                          {service.name}
                        </Typography>
                      </Box>
                      {/* Service Description */}
                      {service.description && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.5,
                            fontSize: "0.85rem",
                            pl: "64px",
                            flex: 1,
                            mt: 0,
                          }}
                        >
                          {service.description}
                        </Typography>
                      )}
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
