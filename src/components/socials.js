import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"; 
import {Grid, Tooltip} from "@mui/material";

//importing social media icons
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";
import Soundcloud from "../images/soundcloud.svg";
import Instagram from "../images/instagram.svg";

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
    <Grid container sx={{justifyContent: "center", mt:3}}>
      <Grid item xs={2}>
        <Tooltip title="Twitter">
        <a href={data.site.siteMetadata.socials.twitter}>
          <img src={Twitter} width="64" alt="Twitter"/>
          
        </a>
        </Tooltip>
      </Grid>
      <Grid xs={2}>
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
      </Grid>
    </Grid>
  );
};

export default Socials;

