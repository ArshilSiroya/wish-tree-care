"use client";

import {
  Toolbar,
  Typography,
  Button,
  Box,
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
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { smoothScrollToId } from "../utils/smoothScroll";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [contactAlert, setContactAlert] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const navItems = [
    { name: "About Us", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "#" },
    // { name: 'Contact Us', path: '#' },
  ];

  const isActivePage = (path, itemName) => {
    if (itemName === "Careers" || path === "#") {
      return false;
    }
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path;
  };

  const scrollToAboutSection = () => {
    smoothScrollToId("about");
    window.history.replaceState(null, "", "/");
  };

  const handleNavigation = (path, itemName) => {
    if (itemName === "Careers") {
      setCareersModalOpen(true);
      setMobileOpen(false);
      return;
    }
    if (itemName === "About Us") {
      if (pathname === "/") {
        scrollToAboutSection();
      } else {
        sessionStorage.setItem("scrollToAbout", "1");
        router.push("/");
      }
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

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setAlert({
          show: true,
          message: data.message || "Something went wrong. Please try again.",
          type: "error",
        });
        setLoading(false);
        return;
      }

      setAlert({
        show: true,
        message:
          "Thank you! Your inquiry has been submitted. We'll contact you soon.",
        type: "success",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });
      setLoading(false);

      setTimeout(() => {
        setCareersModalOpen(false);
        setAlert({ show: false, message: "", type: "success" });
      }, 4000);
    } catch (err) {
      setAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
      setLoading(false);
    }
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

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    setContactAlert({ show: false, message: "", type: "success" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactFormData),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setContactAlert({
          show: true,
          message: data.message || "Something went wrong. Please try again.",
          type: "error",
        });
        setContactLoading(false);
        return;
      }

      setContactAlert({
        show: true,
        message:
          "Thank you! Your message has been sent. We'll get back to you soon.",
        type: "success",
      });
      setContactFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setContactLoading(false);

      setTimeout(() => {
        setContactModalOpen(false);
        setContactAlert({ show: false, message: "", type: "success" });
      }, 4000);
    } catch (err) {
      setContactAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
      setContactLoading(false);
    }
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
    setContactFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setContactAlert({ show: false, message: "", type: "success" });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Listen for open-contact-modal events (e.g. from "Get the most out of your package" button)
  useEffect(() => {
    const openContact = () => setContactModalOpen(true);
    window.addEventListener("openContactModal", openContact);
    return () => window.removeEventListener("openContactModal", openContact);
  }, []);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          my: 2,
          px: 2,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleNavigation("/");
        }}
      >
        <Image
          src="/Group-2.png"
          alt="Wish Tree Care"
          width={180}
          height={56}
          style={{ objectFit: "contain", width: "100%", maxWidth: 200, height: "auto" }}
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
            onClick={(e) => {
              e.stopPropagation();
              handleNavigation(item.path, item.name);
            }}
            sx={{
              bgcolor: isActivePage(item.path, item.name)
                ? "rgba(0, 0, 0, 0.08)"
                : "#ffffff",
              color: "#000000",
              border: isActivePage(item.path, item.name)
                ? "none"
                : "1px solid #eeeeee",
              boxShadow: isActivePage(item.path, item.name)
                ? "none"
                : "0 1px 3px rgba(0, 0, 0, 0.06)",
              "&:hover": {
                bgcolor: isActivePage(item.path, item.name)
                  ? "rgba(0, 0, 0, 0.1)"
                  : "#ffffff",
              },
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
                  fontWeight: isActivePage(item.path, item.name) ? 700 : 600,
                  fontSize: "1.1rem",
                  color: "#000000",
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem
          onClick={(e) => {
            e.stopPropagation();
            setContactModalOpen(true);
            setMobileOpen(false);
          }}
          sx={{
            bgcolor: "white",
            color: "#000000",
            borderRadius: 1,
            mx: 1,
            mb: 0.5,
            width: "50%",
            border: "1px solid #e0e0e0",
            "&:hover": {
              bgcolor: "grey.100",
            },
          }}
        >
          <ListItemText
            primary="Contact Us"
            sx={{
              textAlign: "center",
              "& .MuiTypography-root": {
                fontWeight: 600,
                fontSize: "1.1rem",
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          bgcolor: "transparent",
          py: { xs: 1.5, md: 2 },
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            width: "100%",
            mx: "auto",
            bgcolor: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#1f2937",
            borderRadius: { xs: 28, md: "50px" },
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
            px: { xs: 1.5, sm: 2.5, md: 3 },
            pointerEvents: "auto",
          }}
        >
          <Toolbar
            disableGutters
            sx={{ minHeight: { xs: 60, md: 76 }, gap: 1 }}
          >
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
                width={200}
                height={70}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "auto",
                }}
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
                  onClick={() => handleNavigation(item.path, item.name)}
                  sx={{
                    textTransform: "none",
                    fontWeight: isActivePage(item.path, item.name) ? 600 : 700,
                    fontSize: "0.95rem",
                    px: 2,
                    py: 0.6,
                    borderRadius: "50px",
                    color: isActivePage(item.path, item.name)
                      ? "#000000"
                      : "#ffffff",
                    bgcolor: isActivePage(item.path, item.name)
                      ? "#ffffff"
                      : "transparent",
                    boxShadow: isActivePage(item.path, item.name)
                      ? "0 2px 8px rgba(0, 0, 0, 0.12)"
                      : "none",
                    "&:hover": {
                      bgcolor: isActivePage(item.path, item.name)
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.1)",
                      color: isActivePage(item.path, item.name)
                        ? "#000000"
                        : "#ffffff",
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
                onClick={() => {
                  setContactModalOpen(true);
                }}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#000000",
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  borderRadius: "50px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                  transition: "background-color 0.2s ease",
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          slotProps: {
            backdrop: {
              sx: {
                backgroundColor: "rgba(0,0,0,0.2)",
                backdropFilter: "none",
              },
            },
          },
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
              If you would like to join our team as a care giver and help
              residents achieve their life goals, please fill this form
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

      {/* Contact Us Modal */}
      <Dialog
        open={contactModalOpen}
        onClose={handleCloseContactModal}
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
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>
          <IconButton
            onClick={handleCloseContactModal}
            sx={{
              color: "text.secondary",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleContactSubmit}>
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
              Have a question or want to get in touch? Fill out the form below
              and we&apos;ll get back to you as soon as we can.
            </Typography>
            {contactAlert.show && (
              <Alert severity={contactAlert.type} sx={{ mb: 3 }}>
                {contactAlert.message}
              </Alert>
            )}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  value={contactFormData.firstName}
                  onChange={handleContactInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  value={contactFormData.lastName}
                  onChange={handleContactInputChange}
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
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
                <TextField
                  required
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  value={contactFormData.phone}
                  onChange={handleContactInputChange}
                  sx={{ flex: 1 }}
                  variant="outlined"
                />
              </Box>
              <TextField
                required
                name="message"
                label="Message"
                value={contactFormData.message}
                onChange={handleContactInputChange}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={handleCloseContactModal} color="inherit">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={contactLoading}
              sx={{
                bgcolor: "#268CED",
                "&:hover": { bgcolor: "#1a6fc0" },
                px: 3,
              }}
            >
              {contactLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit"
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Navigation;
