import * as React from "react";
import {Grid, Tooltip, Button, Link} from "@mui/material";

//importing social media icons
import CategoryIcon from '@mui/icons-material/Category';
import AlbumIcon from '@mui/icons-material/Album';

const NftLinks = () => {
  

  return (

<Grid container sx={{justifyContent: "center"}}>
<Grid item xs={6} md={6}  sx={{ p: 1, justifyContent: "center" , m: "auto"  }}>
<Tooltip title="Animated Audiovisual 1/1s">
<Button
              component={Link}
              href="https://foundation.app/@razmard"
              variant="outlined"
              size="large"
              endIcon={<CategoryIcon/>}
              sx={{margin: "auto"}}
            >
             Foundation
            </Button>
            </Tooltip>
  
 
</Grid>
<Grid item xs={6} md={6}  sx={{ p: 1, justifyContent: "center" , m: "auto"  }}>
<Tooltip title="Music Nfts and Stills">
<Button
              component={Link}
              href="https://objkt.com/profile/tz1hQCLusVds3SvDqYJM6W2hRuxSFnS7ojrE/created"
              variant="outlined"
              size="large"
              endIcon={<AlbumIcon/>}
              sx={{margin: "auto"}}
            >
             Objkt
            </Button>
            </Tooltip>
  
 
</Grid>
</Grid>
  );
};

export default NftLinks;