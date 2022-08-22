import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"; 
import {Grid, Tooltip, Button, Link} from "@mui/material";

//importing social media icons

import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Socials = ({ twitter, instagram, soundcloud, spotify, youtube }) => {
    const data = useStaticQuery(graphql`
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

   
              




    <Grid container sx={{justifyContent: "center"}}>
      <Grid item xs={6} md={6}  sx={{ p: 1, justifyContent: "center" , m: "auto"  }}>
      <Tooltip title="Twitter">
      <Button
                    component={Link}
                    to={data.site.siteMetadata.socials.twitter}
                    variant="outlined"
                    size="large"
                    endIcon={<TwitterIcon/>}
                    sx={{margin: "auto"}}
                  >
                   Twitter
                  </Button>
                  </Tooltip>
        
       
      </Grid>
      <Grid item xs={6} md={6}  sx={{ p: 1, justifyContent: "center" , m: "auto"  }}>
      <Tooltip title="Youtube">
      <Button
                    component={Link}
                    to={data.site.siteMetadata.socials.youtube}
                    variant="outlined"
                    size="large"
                    endIcon={<YouTubeIcon/>}
                    sx={{justifyContent: "center" }}
                  >
                   Youtube
                  </Button>
                  </Tooltip>
        
       
      </Grid>
      <Grid item xs={6} md={6} sx={{p: 1, justifyContent: "center" , m: "auto"  }}>
      <Tooltip title="Instagram">
      <Button
                    component={Link}
                    to={data.site.siteMetadata.socials.instagram}
                    variant="outlined"
                    size="large"
                    endIcon={<InstagramIcon/>}
                    sx={{margin: "auto"}}
                  >
                   Instagram
                  </Button>
                  </Tooltip>
        
       
      </Grid>
      <Grid item xs={6} md={6} sx={{ p: 1, justifyContent: "center" , m: "auto"  }}>
      <Tooltip title="Soundcloud">
      <Button
                    component={Link}
                    to={data.site.siteMetadata.socials.instagram}
                    variant="outlined"
                    size="large"
                    endIcon={<LibraryMusicIcon/>}
                    sx={{margin: "auto"}}
                  >
                   Soundcloud
                  </Button>
                  </Tooltip>
        
       
      </Grid>
      {/* <Grid xs={2}>
      <Tooltip title="YouTube">
        <a href={data.site.siteMetadata.socials.youtube}>
          <img src={Youtube} width="64" alt="YouTube"/>
        </a>
        </Tooltip>
      </Grid>
      <Grid xs={2}>
      <Tooltip title="SoundCloud">
        <a href={data.site.siteMetadata.socials.soundcloud}>
          <img src={Soundcloud} width="64" alt="Soundcloud"/>
        </a>
        </Tooltip>
      </Grid>
      <Grid xs={2}>
      <Tooltip title="Instagram">
        <a href={data.site.siteMetadata.socials.instagram}>
          <img src={Instagram} width="64" alt="Instagram"/>
        </a>
        </Tooltip>
      </Grid> */}
    </Grid>
  );
};

export default Socials;

