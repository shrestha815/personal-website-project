import * as React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";
import ImagePlacer from "./ImagePlacer.js";

// import images in here 
const itemData = [
    {
        img: '../assets/About.jpg',
        title: 'Bed'
    }
];


function Home(){
    return(
        <><Navbar />
        {/* margins to be added and image placer needs fixing */}
        <Container sx={{flexGrow:1, m:1}}disableGutters maxWidth = 'xl'>
            <Box component='span' disableGutters sx={{display: 'flex', justifyContent: 'left', alignItems: 'normal', pt:10, 
            width: '100vw', height: '100vh'}} >
                <Typography variant="h1" sx={{textAlign:'left'}}>Welcome</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'normal', pt:10, 
                   width: '100vw'}}>
                    <Typography variant="h2"sx={{textAlign:'left', pt:2}}>
                        Selected Works
                    </Typography>
                </Box>
            </Box>
            <ImagePlacer Items={itemData} />
        </Container>
        
        </>
    );
}

export default Home;