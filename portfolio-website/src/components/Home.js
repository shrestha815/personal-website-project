import * as React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";
import ImagePlacer from "./ImagePlacer.js";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed'
    }
];


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
                <ImagePlacer Items={itemData} />
            </Box>
        </Container>
        
        </>
    );
}

export default Home;