import React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";

function Home(){
    return(
        <><Navbar />
        <Container disableGutters maxWidth = 'xl'>
            <Box disableGutters sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100vw', height: '100vh'}} >
                <Typography variant="h4">Welcome</Typography>
                <Typography variant="body2">
                    Selected Works
                </Typography>
            </Box>
        </Container>
        
        </>
    );
}

export default Home;