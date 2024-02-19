import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";

function About() {
    return(
        <><><Navbar /></>
        <Container disableGutters maxWidth = "xl">
            <Box disableGutters sx={{display: 'flex',flexGrow: 1, justifyContent: 'center', alignItems:'center',
             bgcolor: '#cfe8fc', height: '100vh', width: '100vw'}}>
                <Typography
                variant="h5">
                     About Page
                </Typography>
            </Box>
        </Container>
        </>
    );
}
export default About;
