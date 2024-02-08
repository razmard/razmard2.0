import * as React from "react";
import Layout from "../components/layout";
import razmardgreen from "../images/razmardgreen.svg";
import { Box, Grid, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Razmard">
      <Seo
        title="About"
        description="Producing High Vibration Music"
        image="/images/Dreamer-#4113.png"
      />
      <Grid container xs={12} sx={{ justifyContent: "center" , mt:3}}>
      
          <Grid
            container
            xs={12}
            md={6}
            sx={{ justifyContent: "center", m: "auto", my:3 }}
          >
            <img src={razmardgreen} alt="razmard" width="400" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ justifyContent: "center" }}>
            <Typography color="primary" variant="h3">
              Who?
            </Typography>
            <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
              Self Taught Music Producer / Visual Artist
            </Typography>
            <Typography color="primary" variant="h3">
              What?
            </Typography>
            <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
              I make surreal art and folk-fusion music inspired by eastern
              wisdom schools from Sufism all the way to Zen Buddhism.
            </Typography>
            <Typography color="primary" variant="h3">
              Why?
            </Typography>
            <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
              I create to express my inner worlds, inspire others to look deeper
              inside and celebrate being alive and ultimately to feel human
            </Typography>
          </Grid>
          <Grid>
          <Typography variant="h4" color="primary" sx={{mt:3}}>
          Origins</Typography>
          <Typography variant="body1" align="justify">

Born to a working class family living in Tehran, I spent my childhood in the different fantasy worlds of animated TV series and Japanese anime. I was drawn to drawing from a young age and was scribbling on any piece of paper I saw which sometimes turned out to be my sister's high school diploma. I continued drawing during my teenage years by taking some extra curricular courses and discovered pen and ink style which fascinated me even more.

I started music after I graduated high school, I got an electric guitar and started teaching myself by watching tutorials. I started experimenting with FL studio when I was 19 and it soon became one of my favorite pastimes.
</Typography>
<Typography variant="h4" color="primary" sx={{mt:3}}>Going the Corporate Way</Typography>
<Typography variant="body1" align="justify">
I stopped all my artistic endeavors after my second year studying software engineering to make time for a part time job in the IT Industry. I soon discovered the value of knowledge in the IT field and could see that I could do without a university degree for a while, I got my associates degree instead of a bachelor's and quit university to work full time as an system admin. I got some Cisco and Microsoft IT professional certificates while working as a full time IT Manager. I then went back to school again to finish my degree this time I majoring in Computer Network Engineering.

I got severely depressed by the corporate environment after working in the field for around 4 years and quit my job as an IT Manager in an ICT firm back in mid 2018 to find my way in life and finish university all together.
</Typography>
<Typography variant="h4" color="primary" sx={{mt:3}}>
Finding The Way, DIY Attitude</Typography>
<Typography variant="body1" align="justify">
Now that I had some money saved up, I could finish my degree while figuring out how to make a living.In the next three years I started self educating and doing some freelance jobs to stay afloat, I quit at 25 and gave myself 5 years to experiment to find my IKIGAI a Japanese concept I had become familiar with back then.the things I did along the way taught me important things that would help me in the future. I started doing different things including

    Tattoo Art: my first intuition was to make money out of drawing and teaching myself to become a tattoo artist,was a safe bet cause tattoos were becoming more and more popular in where I lived. I invested a lot of time into learning drawing, which would really help me out in the future. Also the tattoos I gave myself are pretty sweet.

    Writing: my good grasp of English landed me a job as a part time writer for some technical websites. that made me read up on story telling, Seo and how to write in general.

    Animating: I dabbled with content creation, trying to make an educational animated internet video series about Persian mythology. this was a dream of mine since I was a kid and obsessed with anime. Producing the series alone made me learn how to animate with after effects and I learned about basics of character design and drawing in Illustrator, how to speak properly for a video and project management. Since it was too much work I was burnt out rather quick.

    UI/UX Design and Development: Since I knew some coding from my school years I thought about combining graphic design and development and make websites, I learnt how to code enough to make a running website work which helped me make this website that you are reading these stuff on right now. also I spent a lot of time learning the basics of design and the design process and human-centric design, these made me have a better outlook on how humans work and how to design and make things for human beings.

The things I did were fun for a while and taught me a lot but they were not my IKGAI so I kept going and experimenting.Little did I know back then that I was going to become a full time artist, something I had dreamt of since childhood but never considering it due to financial concerns.
</Typography>
<Box container sx={{justifyContent: "center", m:2, my:6}}>
    <StaticImage src="../images/jazzcafe.jpg" alt="courtesy of jazzcafe"/>
    <Typography variant="subtitle1" align="center">a sign I saw at a jazz cafe</Typography>
</Box>
<Typography variant="h4" color="primary" sx={{mt:3}}>The Moment of Transformation</Typography>
<Typography variant="body1" align="justify">
I went to a concert in a small cafe in Tehran back in 2019, the summer before Covid hit Iran, there I had kind of a transformational experience while listening to a great performance by a jazz band and an Iranian Dotar player. There was a huge shift in my consciousness, in a moment of pure bliss I felt first hand the transformational power of art in a live setting (artistic performance is really limited where I lived and never had I noticed such power stemming from one instrument) I decided to pursue art not concerning myself with the financial aspects, and the neon sign in the cafe certainly helped. It read make smart choices in your life, but only the "make art your life" part was on.</Typography>
<Typography variant="h4" color="primary" sx={{mt:3}}>At (In) The Moment</Typography>
<Typography variant="body1" align="justify">
After that experience I started pursuing art full time, mostly focusing on my music, I have been creating a a lot of music and collaborating with different artists on the Web3 space. I am continuing to produce audiovisual/ works and music as NFTs on the etherum and tezos blockchains.
</Typography>
</Grid>
</Grid>
    </Layout>
  );
};

export default AboutPage;
