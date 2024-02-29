import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";
import example from '../assets/About.jpg';
import styles from './media.css'

function About() {
    return(
        <>
        <Navbar />
        {/* keep everything in a grid */}
        <Container disableGutters maxWidth = "xl" sx={{m:1,pt:8}}>
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
        </Container>
        </>
    );
}
export default About;
