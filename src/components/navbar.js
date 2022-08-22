import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import razmardlogo from "../images/razmard.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Twitter, Instagram, YouTube, Album } from "@mui/icons-material/";


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const socialas = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socials {
            instagram
            soundcloud
            twitter
            youtube
          }
        }
      }
    }
  `);

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        color="primary"
        elevation={3}
        sx={{ alignItems: "center" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box
              noWrap
              component="div"
              sx={{
                alignContent: "center",
                display: { xs: "none", md: "flex" },
                p: 1,
                pt: 1.5,
              }}
              xs="none"
            >
              <Link to="/">
                <img src={razmardlogo} alt="razmard" width="234" />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/about/">
                    <Typography textAlign="center">About</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/music/">
                    <Typography textAlign="center">Music</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/portfolio/">
                    <Typography textAlign="center">Portfolio</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/blog/">
                    <Typography textAlign="center">Blog</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link to="/">
                <img src={razmardlogo} alt="razmard" width="234" />
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box sx={{ p: 1 }}>
                <Button
                  component={Link}
                  to="/about"
                  onClick={handleCloseNavMenu}
                  sx={{ display: "inline-block", alignContent: "center", m: 1 }}
                  color="white"
                  size="large"
                >
                  ABOUT
                </Button>
              </Box>
              <Box sx={{ p: 1 }}>
                <Button
                  component={Link}
                  to="/music"
                  onClick={handleCloseNavMenu}
                  sx={{ display: "inline-block", alignContent: "center", m: 1 }}
                  color="white"
                  size="large"
                >
                  Music
                </Button>
              </Box>
              <Box sx={{ p: 1 }}>
                <Button
                  component={Link}
                  to="/portfolio"
                  onClick={handleCloseNavMenu}
                  sx={{ display: "inline-block", alignContent: "center", m: 1 }}
                  color="white"
                  size="large"
                >
                  PORTFOLIO
                </Button>
              </Box>
              <Box sx={{ p: 1 }}>
                <Button
                  component={Link}
                  to="/blog"
                  onClick={handleCloseNavMenu}
                  sx={{ display: "inline-block", alignContent: "center", m: 1 }}
                  color="white"
                  size="large"
                >
                  BLOG
                </Button>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Socials">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MoreVertIcon fontSize="large" color="white" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  component="a"
                  href={socialas.site.siteMetadata.socials.twitter}
                  onClick={handleCloseUserMenu}
                >
                  <ListItemIcon>
                    <Twitter fontSize="medium" color="primary" />
                  </ListItemIcon>

                  <ListItemText primary="Twitter" />
                </MenuItem>
                <MenuItem
                  component="a"
                  href={socialas.site.siteMetadata.socials.soundcloud}
                  onClick={handleCloseUserMenu}
                >
                  <ListItemIcon>
                    <Album fontSize="medium" color="primary" />
                  </ListItemIcon>

                  <ListItemText primary="Soundcloud" />
                </MenuItem>
                <MenuItem
                  component="a"
                  href={socialas.site.siteMetadata.socials.youtube}
                  onClick={handleCloseUserMenu}
                >
                  <ListItemIcon>
                    <YouTube fontSize="medium" color="primary" />
                  </ListItemIcon>

                  <ListItemText primary="YouTube" />
                </MenuItem>
                <MenuItem
                  component="a"
                  href={socialas.site.siteMetadata.socials.instagram}
                  onClick={handleCloseUserMenu}
                >
                  <ListItemIcon>
                    <Instagram fontSize="medium" color="primary" />
                  </ListItemIcon>

                  <ListItemText primary="Instagram" />
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default Navbar;
