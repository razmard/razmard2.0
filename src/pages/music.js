import React from "react";
import Layout from "../components/layout";
import { Card, CardMedia, Grid, Typography, Box} from "@mui/material"

const Music = () => {
  return (
    <Layout>
        <Grid container>
        <Grid  item xs={12} md= {6}   sx={{justifyContent: "center", m: "auto",p:2}}>
            <Typography variant="h2" sx={{color: "primary.main", textAlign: "center", pb:3 }}>Producing High Vibration Music</Typography>
  
            <Typography variant="body" align="justify-left">Music production has been my passion eversince I was a teenager. I started focusing on music production back in 2020 and never looked back. I taught myself to play a few instruments mainly guitar and keyboard which opened up a huge oppurtunity for my music. then I focused on incorprating Iranian folk instruments like the <a href="https://en.wikipedia.org/wiki/Tanbur" alt="Tanbur">Tanbur</a> and <a href="https://en.wikipedia.org/wiki/Setar" alt="Setar">Setar</a> to my music. You can listen to the stuff on soundcloud by pressing play in the box</Typography>
        </Grid>
        <Grid item xs={12} md= {6}>
        <Card sx={{borderRadius: 4, p:0, m:0}}>
            <CardMedia>
      <iframe
        width="100%"
        height="777"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1425650836&color=%23558301&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      </CardMedia>
      </Card>
      </Grid>
      </Grid>
    </Layout>
  );
};

export default Music;