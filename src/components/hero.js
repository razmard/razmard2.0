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

import NftLinks from "./nftlinks";

const Hero = () => {
  return (
    <Container>
      <Box sx={{ alignItems: "left", mt: 1 }}>
        <Grid container>
          <Grid
            item
            container
            xs={12}
            md={6}
            sx={{ justifyContent: "left", m: "auto", p: 2 }}
          >
            <Grid
              item
              sx={{ display: "block", justifyContent: "left", my: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: "left", my: 2 }}>
                <Typography color="primary" variant="h1">Hi, I am Razmard</Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", fontWeight: "600" }}
              >
                NFT 2D Motion Artist / Musician
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ display: "block", justifyContent: "left"}}
            >
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                Blessed to be alive , learning and creating, after teaching myself how to draw, animate and produce music, thanks to the internet, I set out to do one thing: channeling the uncouncious parts of mind into art. capturing the essence of trancsendence. <br/>
              </Typography>
            </Grid>
            <Grid
              item
              container
              sx={{ display: "block", justifyContent: "left", my: 2 }}
            >
              
              <Grid container sx={{ justifyContent: "left", my: 2 }}>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", my: 2, fontWeight: "600" }}
              >
                NFT Collections:
              </Typography>
                <NftLinks />
              </Grid>
              <Grid container sx={{ justifyContent: "left", my: 2 }}>
              <Typography
                variant="body1"
                sx={{ textAlign: "left", my: 2, fontWeight: "600" }}
              >
                Socials:
              </Typography>
                <Socials />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6} sx={{ justifyContent: "left" }}>
            <Tooltip title="My Latest Work" placement="left" arrow>
            <Card
              elevation={6}
              sx={{
                borderRadius: 3,
                textAlign: "left",
                color: "white",
              }}
            >
              <CardMedia>
                <iframe
                  title="where I belong NFT"
                  width="444"
                  height="666"
                  frameBorder="0"
                  src="https://www.youtube.com/embed/bEDzquElQQc?vq=hd1080p&autoplay=1&controls=0&loop=1&modestbranding=1&playlist=bEDzquElQQc"
                  allowFullScreen
                ></iframe>
              </CardMedia>
              
              <CardContent container sx={{ justifyContent: "left" }}>
                <Typography variant="h3" sx={{ color: "primary.main" }}>
                  Where I Belong
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
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
