"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const navItems = [
    { name: "About Us", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "#" },
    // { name: 'Contact Us', path: '#' },
  ];

  const isActivePage = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path;
  };

  const handleNavigation = (path, itemName) => {
    if (itemName === "Careers") {
      setCareersModalOpen(true);
      setMobileOpen(false);
      return;
    }
    if (path === "/") {
      router.push(path);
    } else if (path === "#") {
      // Stay on same page for placeholder links
      setMobileOpen(false);
    } else {
      router.push(path);
    }
    setMobileOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, message: "", type: "success" });

    // Simulate form submission
    setTimeout(() => {
      // Show success message
      setAlert({
        show: true,
        message: "Thank you! Your inquiry has been submitted. We'll contact you soon.",
        type: "success",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });

      setLoading(false);

      // Close modal after 2 seconds
      setTimeout(() => {
        setCareersModalOpen(false);
        setAlert({ show: false, message: "", type: "success" });
      }, 2000);
    }, 500);
  };

  const handleCloseModal = () => {
    setCareersModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });
    setAlert({ show: false, message: "", type: "success" });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          my: 2,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => handleNavigation("/")}
      >
        <Image
          src="/wishtree-Logo.png"
          alt="Wish Tree Care"
          width={150}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",  
          alignItems: "center",
        }}
      >
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            onClick={() => handleNavigation(item.path, item.name)}
            sx={{
              bgcolor: isActivePage(item.path) ? "primary.main" : "transparent",
              color: isActivePage(item.path) ? "white" : "inherit",
              borderRadius: 1,
              mx: 1,
              mb: 0.5,
              width: "50%",
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                textAlign: "center",
                "& .MuiTypography-root": {
                  fontWeight: 600,
                  fontSize: "1.1rem",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        color: "white",
        borderBottom: "none",
        position: "relative",
        zIndex: 20,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0 } }}>
          {/* Logo */}
          <Box
            sx={{
              flexGrow: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => handleNavigation("/")}
          >
            <Image
              src="/Frame-2147227068.png"
              alt="Wish Tree Care"
              width={180}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Navigation Links - Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              flexGrow: 1,
              justifyContent: "center",
              mx: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                onClick={() => handleNavigation(item.path, item.name)}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  px: 2,
                  py: 0.6,
                  borderRadius: 2,
                  color: isActivePage(item.path) ? "#000000" : "white",
                  bgcolor: isActivePage(item.path) ? "#ffffff" : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              marginLeft: "auto", // This pushes the menu button to the right
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Contact Us Button - Desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="contained"
              onClick={() => handleNavigation("")}
              sx={{
                bgcolor: "white",
                color: "#000000",
                px: 3,
                py: 1,
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "grey.100",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: "white",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Careers Modal */}
      <Dialog
        open={careersModalOpen}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 0,
            // pt: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Careers Inquiry
          </Typography>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              color: "text.secondary",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ pt: 0, pb: 2, px: 3 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                mt: 0,
                pt: 0,
                color: "text.secondary",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              If you would like to join our team as a care giver and help residents achieve their life goals, please fill this form
            </Typography>
            {alert.show && (
              <Alert severity={alert.type} sx={{ mb: 3 }}>
                {alert.message}
              </Alert>
            )}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
                <TextField
                  required
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
              </Box>
              <TextField
                required
                name="address"
                label="Address"
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={3}
                variant="outlined"
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleCloseModal} color="inherit">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: "#268CED",
                "&:hover": { bgcolor: "#1a6fc0" },
                px: 3,
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit"
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </AppBar>
  );
};

export default Navigation;
