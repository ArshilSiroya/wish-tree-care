"use client";

import { Box, Container, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import ndisSupport from "../../../public/images/general/Care-and-support-2.jpg";
import homeCare from "../../../public/images/general/Home-care.jpg";
import homeSupport from "../../../public/images/general/home-support.jpg";
import agedCare from "../../../public/images/general/care.jpg";
import personalCare from "../../../public/images/general/personal-care.jpg";
import socialServices from "../../../public/images/general/social.png";
import transport from "../../../public/images/general/transport.jpg";
import gardening from "../../../public/images/general/gardening3.jpg";
import domesticAssistance from "../../../public/images/general/Domestic.jpg";
import domesticAssistance2 from "../../../public/images/general/domestic-assistance-2.jpg";
import cleaning from "../../../public/images/general/cleaning2.jpg";
import mealPreparation from "../../../public/images/general/cooking4.jpg";
import Equipment from "../../../public/images/general/equipment.jpg";
import modification from "../../../public/images/general/modification2.jpg";
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
            backgroundPosition: "center ",
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

      {/* Main Content 1 - Care and Support Service */}
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
                alt="Care and Support Service"
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
                Care Coordination
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
                Our care and support services are designed to help individuals
                achieve their goals and live more independently. We provide
                personalized support plans that include personal care, community
                participation, social activities, allied health and skill
                development.
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
                Comprehensive care and support services including personal care
                and community participation.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 2 - Meal Preparation & Nutrition */}
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
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  objectFit: "cover",
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

      {/* Main Content 3 - Gardening & Outdoor Maintenance */}
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
                src={gardening}
                alt="Gardening & Outdoor Maintenance"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
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

      {/* Main Content 4 - Cleaning (text left, image right) */}
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
            {/* Left Side - Text Content */}
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
                Cleaning
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
                Professional cleaning services to keep your home spotless and
                comfortable.
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
                Our cleaning services help you maintain a clean, organized, and
                healthy home environment. We offer regular housekeeping and deep
                cleaning tailored to your needs.
              </Typography>
            </Box>

            {/* Right Side - Image */}
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
                src={cleaning}
                alt="Cleaning"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 5 - Personal Care Services */}
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
                src={agedCare}
                alt="Personal Care Services"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
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

      {/* Main Content 6 - Transport Services (text left, image right) */}
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
            {/* Left Side - Text Content */}
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
                Community Transport
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

            {/* Right Side - Image */}
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
                src={transport}
                alt="Transport Services"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Domestic Assistance */}
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
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
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
                professional team is here to help.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 7 - Respite Care */}
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
                alt="Respite Care"
                width={500}
                height={400}
                style={{
                  width: "100%",
                  maxWidth: "400px",
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
                Respite Care
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
                Temporary care to give primary caregivers a break while ensuring
                your loved one continues to receive quality support.
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
                Our respite care services provide short-term relief for family
                carers, so you can rest, attend to personal matters, or simply
                recharge. We match you with experienced carers who understand
                your loved one&apos;s needs and maintain their routine and
                wellbeing.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Equipment & Technology (image left, text right) */}
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
                src={Equipment}
                alt="Equipment & Technology"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
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
                Equipment & Technology
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
                Guidance and access to mobility aids, assistive technology and
                equipment to support safe, independent living at home.
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
                We help you find and use the right equipment and technology for
                your needs—from mobility aids and daily living aids to
                communication and safety devices—so you can stay safe and
                connected at home.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Minor Home Modifications (text left, image right) */}
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
            {/* Left Side - Text Content */}
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
                Minor Home Modifications
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
                Safe home adjustments and small changes to support mobility,
                access and independence in your own home.
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
                We help with minor home modifications—from grab rails and
                ramps to better lighting and access—so your home remains safe
                and easy to navigate. Our team can guide you on what changes
                will make the biggest difference for you.
              </Typography>
            </Box>

            {/* Right Side - Image */}
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
                src={modification}
                alt="Minor Home Modifications"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
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
                src={socialServices}
                alt="Social Support"
                width={400}
                height={400}
                style={{
                  width: "400px",
                  // maxWidth: "400px",
                  height: "400px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
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
                  width: { xs: "100%", md: "90%" },
                }}
              >
                Social Support
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
                Social support services to enhance quality of life and community
                engagement.
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
                emotional well-being. Our social support programs are designed
                to reduce isolation, enhance quality of life, and help you stay
                connected to your community.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content 9 - Domestic Assistance (text left, image right) */}
    

      {/* Main Content 11 - Staffing Services */}
      <Box
        sx={{ flex: 1, pt: { xs: 4, sm: 6, md: 8 }, marginBottom: "100px" }}
      ></Box>

      <Footer />
    </Box>
  );
};

export default ServicesPage;
