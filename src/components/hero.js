import * as React from "react";
import Socials from "./socials";
import {
  Container,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "gatsby";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CollectionsIcon from "@mui/icons-material/Collections";

const Hero = () => {
  return (
    <Container>
      <Box sx={{ alignItems: "center", mt: 1 }}>
        <Grid container>
          <Grid
            item
            container
            xs={12}
            md={6}
            sx={{ justifyContent: "center", m: "auto", p: 2 }}
          >
            <Grid
              item
              sx={{ display: "block", justifyContent: "center", my: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                <Typography color="primary" variant="h1">Hi, I am RAZMARD</Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", mb: 3, fontWeight: "600" }}
              >
                Music Producer/Visual Artist
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ display: "block", justifyContent: "center", mb: 5 }}
            >
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                I make high vibrational music and visual art to feel human.
              </Typography>
            </Grid>
            <Grid
              item
              container
              sx={{ display: "block", justifyContent: "center", my: 2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "primary.main",
                  fontWeight: "600",
                }}
              >
                check out what I do:
              </Typography>
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item xs={4} md={3} sx={{ m: 2, justifyContent: "center" }}>
                  <Button
                    component={Link}
                    to="/music"
                    variant="outlined"
                    size="large"
                    endIcon={<LibraryMusicIcon />}
                    sx={{margin: "auto"}}
                  >
                    Music
                  </Button>
                </Grid>
                <Grid item xs={4} md={3} sx={{ m: 2, justifyContent: "center"  }}>
                  <Button
                    component={Link}
                    to="/portfolio"
                    variant="outlined"
                    size="large"
                    endIcon={<CollectionsIcon />} 
                    sx={{margin: "auto"}}
                  >
                    Art
                  </Button>
                </Grid>
              </Grid>
              <Grid container sx={{ justifyContent: "center" }}>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  you can find me on these social media apps:
                </Typography>
                <Socials />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6} sx={{ justifyContent: "center" }}>
            <Tooltip title="My Latest Work" placement="left" arrow>
            <Card
              elevation={6}
              sx={{
                borderRadius: 3,
                textAlign: "center",
                color: "white",
              }}
            >
              <CardMedia>
                <iframe
                  width="444"
                  height="666"
                  frameBorder="0"
                  src="https://www.youtube.com/embed/bEDzquElQQc?vq=hd1080p&autoplay=1&controls=0&loop=1&modestbranding=1&playlist=bEDzquElQQc"
                  allowFullScreen
                ></iframe>
              </CardMedia>
              
              <CardContent container sx={{ justifyContent: "center" }}>
                <Typography variant="h3" sx={{ color: "primary.main" }}>
                  Where I Belong
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  honoring the divine realms of humanity
                </Typography>
              </CardContent>
              <CardActions sx={{}}>
                <Button
                  component={Link}
                  to="/portfolio/cosmic-water-lady"
                  size="small"
                  sx={{ alignContent:"left", mx: 2 }}
                >
                  Details
                </Button>
                <Button
                  href="https://foundation.app/@razmard/immx2/1"
                  size="small"
                  sx={{ alignContent:"right",mx: 2 }}
                >
                  Buy on Foundation
                </Button>
              </CardActions>
            </Card>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
