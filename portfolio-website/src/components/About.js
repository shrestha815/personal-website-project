import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import example from '../assets/About.jpg';

function About() {
    return(
        <>
        <Navbar />
        {/* keep everything in a grid */}
        {/* <Container disableGutters maxWidth = "xl" sx={{m:1,pt:8}}>
            <Box disableGutters sx={{mt: 8,ml:10,display: 'flex',flexGrow: 1, justifyContent: 'flex-start', alignItems:'normal',
             bgcolor: '#FFFFFF', height: '100vh', width: '100vw'}}>
                <Typography
                variant="h3">
                     About
                </Typography>
                <Box disableGutters sx={{mt:16, display:'flex', flexGrow: 1, justifyContent: 'flex-start', alignItems:'inherit'}}>
                    <img src={example} alt="AboutpagePortrait" className={styles.image} />
                </Box>
            </Box>
        </Container> */}
        <Grid sx={{flexGrow:1, m:1, pt:5, height:'100vh',width:'100vw'}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={0.5} columns={16}>
                  <Grid item xs justifyContent="center">  
                    <Typography variant="h2" sx={{fontSize:'40px',pt:5,pb:8}}>
                        About
                    </Typography>
                    <img src={example} alt="AboutpagePortrait" style={{width: '43vw'}} loading="lazy"/>
                  </Grid>
                  <Grid item xs={8.8}>
                    <Paper sx={{flexGrow:1, height: '100vh', width: '50vw',
                            backgroundColor: "#D9D9D9"
                            }}>
                        <Typography variant="body1" sx={{fontSize: '24px',pl:2,pr:2,pt:12, textAlign:"left"}}>
                            Safal Shrestha is a portrait photographer based in the US,
                            Well experienced in portriature, Safal conveys emotion through his pictures all of which are shot on film. 
                        </Typography>

                    </Paper>
                  </Grid>
                </Grid>
            </Grid>

        </Grid>
        </>
    );
}
export default About;
