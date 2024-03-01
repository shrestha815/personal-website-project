import React from "react";
import Navbar from "./navbar.js";
import { Box,Grid, Container, Paper,Typography } from "@mui/material";
import ContactImg from "../assets/Contact.jpg"
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: responsiveFontSizes({
      fontSize: 16, // Set your base font size here (recommended: 16px)
    }),
  });
  
function Contact() {
    return(
        <>
        <Navbar />
        <Grid sx={{flexGrow:1, m:1, pt:5, height:'100vh',width:'100vw'}} container spacing={0}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={0} columns={16}>
                  <Grid item xs ={8.8} justifyContent="center">  
                        <Paper sx={{flexGrow:1, height: '100vh', width: '50vw',
                                backgroundColor: "#D9D9D9"
                                }}>
                                    <Typography variant="h1" sx={{fontSize: '40px',pl:2,pt:5,pb:0}}>
                                        Contact Information
                                    </Typography>
                                    <Typography variant="h3" sx={{fontSize:'35.68px',flexGrow:1,pl:2,pt:5, textAlign:"left"}}>
                                     Looking to reach out?
                                     <br/> 
                                     Create a booking with me?
                                    </Typography>
                                    <Typography variant="body1" sx={{fontSize: '24px', flexGrow:1,pl:2,pt:5, textAlign:"left"}}>
                                    For inquiries and more information please email here safalshrestha@loremipsum.com
                                    <br/>
                                    <br/>
                                    Instagram: @shresthasafal
                                    <br/>
                                    <br/>
                                    All images in this website are owned by Safal Shrestha. Use, Sale or Distribution of any images without consent will result in legal consequences and fines.
                                    </Typography>
                        </Paper>
                  </Grid>
                  <Grid item xs sx={{pt:8}}>
                    {/* <Typography component= "div" sx={{pt:20}}></Typography> */}
                    <img src={ContactImg} alt="ContactPageImage" style={{width: '43vw'}} loading="lazy"/>
                  </Grid>
                </Grid>
            </Grid>

        </Grid>
        </>
    
    );
}

export default Contact;