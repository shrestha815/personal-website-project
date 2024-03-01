import React from "react";
import Navbar from "./navbar.js";
import { Box,Grid, Container, Paper,Typography } from "@mui/material";
import ContactImg from "../assets/Contact.jpg"
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';


  
function Contact() {
    return(
        <>
        <Navbar />
        <Grid sx={{flexGrow:1, mr:8, pt:5, height:'100vh',width:'100vw'}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={0.5} columns={16}>
                  <Grid item xs ={8} justifyContent="center">  
                        <Paper sx={{flexGrow:1, height: '100vh', width: '50vw',
                                backgroundColor: "#D9D9D9"
                                }}>
                                    <Typography variant="h1" sx={{fontSize: '40px',pt:5,pb:2}}>
                                        Contact Information
                                    </Typography>
                                    <Typography variant="h3" sx={{fontSize:'30px',pl:2,pt:5, textAlign:"left"}}>
                                     Looking to reach out?
                                     <br/> 
                                     Create a booking with me?
                                    </Typography>
                                    <Typography variant="body1" sx={{fontSize: '24px',pl:2,pt:5, textAlign:"left"}}>
                                    For inquiries and more information please email here safalshrestha@loremipsum.com
                                    <br/>
                                    Instagram: @shresthasafal
                                    <br/>
                                    All images in this website are owned by Safal Shrestha. Use, Sale or Distribution of any images without consent will result in legal consequences and fines.
                                    </Typography>
                        </Paper>
                  </Grid>
                  <Grid justifyContent="center"item xs ='8'>
                  {/* <Typography variant="h2" sx={{fontSize:'40px',pt:5,pb:8}}> </Typography> */}
                    <Box> 
                      <br/> 
                      <br/>
                      <br/>
                    </Box>
                    <Box sx={{my:'10',display: 'flex', justifyContent: 'center'}}>
                      <img src={ContactImg} alt="ContactPageImage" style={{width: '43vw'}} loading="lazy"/>
                    </Box>
                  </Grid>
                </Grid>
            </Grid>

        </Grid>
        </>
    
    );
}

export default Contact;