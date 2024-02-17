import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";

function Contact() {
    return(
        <><><Navbar /></>
        <Container maxWidth ="lg">
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', 
             bgcolor: '#cfe8fc',height: '100vh'}}>
                <Typography 
                variant="h5">
                    Something to look at
                </Typography>
            </Box>
        </Container>
        </>
    
    );
}

export default Contact;