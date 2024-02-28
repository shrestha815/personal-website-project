import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";
import ImagePlacer from "./ImagePlacer.js";

    const itemData = [
        {
            img:'',
            title:'Me'
        }
    ];

function About() {
    return(
        <>
        <Navbar />
        <Container disableGutters maxWidth = "xl" sx={{m:1,pt:8}}>
            <Box disableGutters sx={{mt: 2,display: 'flex',flexGrow: 1, justifyContent: 'flex-start', alignItems:'initial',
             bgcolor: '#FFFFFF', height: '100vh', width: '100vw'}}>
                <Typography
                variant="h5">
                     About
                </Typography>
                <ImagePlacer />
            </Box>
        </Container>
        </>
    );
}
export default About;
