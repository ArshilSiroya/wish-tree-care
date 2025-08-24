"use client";

import { Box, Container, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import ndisSupport from "../../../public/images/general/NDIS.jpg";
import homeCare from "../../../public/images/general/Home-care.jpg";
import homeSupport from "../../../public/images/general/home-support.jpg";
import agedCare from "../../../public/images/general/aged-care.jpg";
import personalCare from "../../../public/images/general/personal-care.jpg";
import socialServices from "../../../public/images/general/social-service.jpg";
import transport from "../../../public/images/general/transport-service.jpg";
import gardening from "../../../public/images/general/Gardening.jpg";
import domesticAssistance from "../../../public/images/general/domestic-assistance.jpg";
import mealPreparation from "../../../public/images/general/Meal-preparation.jpg";
import staffingServices from "../../../public/images/general/staffservice.jpg";
import servicesbanner from "../../../public/images/hero/services.jpg";
const ServicesPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F6F6F6",
      }}
    >
      {/* Hero Section - Our Services */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "300px", sm: "350px", md: "490px" },
        }}
      >
        {/* Navigation positioned on top of hero section */}
        <Box
          sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}
        >
          <Navigation />
        </Box>

        {/* Hero Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${servicesbanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center -50px",
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
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            px: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
              textAlign: "center",
              color: "white",
              lineHeight: 1.2,
              // textShadow: '0 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            Our Services
          </Typography>
        </Box>
      </Box>

      {/* Main Content 1 - NDIS */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                src={ndisSupport}
                alt="NDIS Support Services"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // pl: { xs: 0, md: 4 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                NDIS Support Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Comprehensive NDIS support services for participants including
                personal care and community participation.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our NDIS support services are designed to help participants
                achieve their goals and live more independently. We provide
                personalized support plans that include personal care, community
                participation, social activities, and skill development.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Main Content 2 - HCP */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Image - Always on top for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src={homeCare}
                alt="Home Care Packages"
                width={500}
                height={400}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Text Content - Always below image for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                pl: { xs: 0, md: 19 },
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "100%" },
                }}
              >
                HCP (Home Care Packages)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Tailored home care packages providing comprehensive support for
                daily living and personal care needs.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our Home Care Packages are designed to provide comprehensive
                support for older Australians who want to remain living
                independently in their own homes. We work closely with you to
                develop a personalized care plan.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 3 - CHSP */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                src={homeSupport}
                alt="CHSP Support Services"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // pl: { xs: 0, md: 4 },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                CHSP (Commonwealth Home Support Programme)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Entry-level support services to help older people live
                independently at home and in their community.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                The CHSP provides entry-level support services to help older
                people maintain their independence and continue living at home.
                Our services are designed to be flexible and responsive to your
                changing needs.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 4 - Aged Care */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Image - Always on top for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src={agedCare}
                alt="Aged Care Services"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Text Content - Always below image for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                pl: { xs: 0, md: 19 },
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Aged Care Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Specialized care services designed to meet the unique needs of
                elderly individuals and their families.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our aged care services are specifically designed to meet the
                unique needs of elderly individuals and their families. We
                understand that aging can bring various challenges, and our
                compassionate caregivers are trained to provide the highest
                quality of care.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 5 - Personal Care */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                src={personalCare}
                alt="Personal Care Services"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // pl: { xs: 0, md: 4 },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Personal Care Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Compassionate personal care services including bathing,
                dressing, grooming, and mobility assistance.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our personal care services focus on helping you maintain your
                personal hygiene and appearance with dignity and respect. Our
                caregivers are trained to provide sensitive, professional care
                that promotes your independence.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 6 - Social Services */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Image - Always on top for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src={socialServices}
                alt="Social Services & Companionship"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Text Content - Always below image for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                pl: { xs: 0, md: 19 },
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Social Services & Companionship
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Social support and companionship services to enhance quality of
                life and community engagement.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                We understand that social connection is vital for mental and
                emotional well-being. Our social services and companionship
                programs are designed to reduce isolation, enhance quality of
                life, and help you stay connected to your community.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 7 - Transport */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                src={transport}
                alt="Transport Services"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "400px",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // pl: { xs: 0, md: 4 },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Transport Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Safe and reliable transport services for medical appointments,
                shopping, and community activities.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                {`Our transport services provide safe, reliable, and comfortable transportation for all your needs. Whether you're heading to medical appointments, shopping, social activities, or community events, our drivers are trained to provide assistance.`}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 8 - Gardening */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Image - Always on top for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src={gardening}
                alt="Gardening & Outdoor Maintenance"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Text Content - Always below image for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                pl: { xs: 0, md: 19 },
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Gardening & Outdoor Maintenance
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Professional gardening and outdoor maintenance services to keep
                your property beautiful and well-maintained.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our gardening and outdoor maintenance services help keep your
                property looking beautiful and well-maintained throughout the
                year. Our experienced gardeners understand the local climate and
                can provide seasonal care.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 9 - Domestic Assistance */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                src={domesticAssistance}
                alt="Domestic Assistance"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // pl: { xs: 0, md: 4 },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Domestic Assistance
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Comprehensive domestic support including cleaning, laundry, and
                household management services.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our domestic assistance services help you maintain a clean,
                organized, and comfortable home environment. We understand that
                keeping up with household tasks can become challenging, and our
                professional cleaners are here to help.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 10 - Meal Preparation */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Image - Always on top for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src={mealPreparation}
                alt="Meal Preparation & Nutrition"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Text Content - Always below image for mobile/tablet */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                pl: { xs: 0, md: 19 },
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Meal Preparation & Nutrition
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Nutritious meal preparation and cooking services tailored to
                dietary requirements and preferences.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our meal preparation and nutrition services ensure you receive
                healthy, delicious meals that meet your dietary requirements and
                preferences. We work with nutritionists and dietitians to create
                meal plans that support your health goals.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 11 - Staffing Services */}
      <Box sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 },marginBottom:"100px" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 0 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                src={staffingServices}
                alt="Staffing Services"
                width={300}
                height={300}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Changed from 500px to 400px  for mobile view
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                // pl: { xs: 0, md: 4 },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                  color: "text.primary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Staffing Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  mb: { xs: 2, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Professional staffing solutions providing qualified and
                experienced caregivers for your specific needs.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Our staffing services provide qualified, experienced, and
                compassionate caregivers who are carefully matched to your
                specific needs and preferences. We conduct thorough background
                checks and provide ongoing training.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ServicesPage;
