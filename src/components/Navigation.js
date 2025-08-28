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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
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

  const handleNavigation = (path) => {
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 800,
          color: "primary.main",
          cursor: "pointer",
        }}
        onClick={() => handleNavigation("/")}
      >
        Wish Tree Care
      </Typography>
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
            onClick={() => handleNavigation(item.path)}
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
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 0,
              fontWeight: 800,
              cursor: "pointer",
              color: "white",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
            onClick={() => handleNavigation("/")}
          >
            Wish Tree Care
          </Typography>

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
                onClick={() => handleNavigation(item.path)}
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
    </AppBar>
  );
};

export default Navigation;
