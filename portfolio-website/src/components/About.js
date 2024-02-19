import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";

function About() {
    return(
        <><><Navbar /></>
        <Container maxWidth = "lg">
            <Box sx={{display: 'flex', justifyContent: 'right', alignItems:'right',
             bgcolor: '#cfe8fc', height: '100vw'}}>
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
