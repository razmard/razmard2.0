import * as React from "react";
import Navbar from "../components/navbar";
import Footer from "./footer";
import { Container,CssBaseline } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
    <Navbar />
    <CssBaseline>
    <Container sx={{my:2}}>
    

      

          <main>
            {children}
          </main>
          
    </Container>
    </CssBaseline>
    <Footer/>
    </div>
  );
};

export default Layout;
