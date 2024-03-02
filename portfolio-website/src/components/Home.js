import * as React from "react";
import Navbar from "./navbar.js";
import { Box, Container, Typography } from "@mui/material";
import ImagePlacer from "./ImagePlacer.js";
import image1 from "../assets/Home1.jpg";
import image2 from "../assets/Home2.jpg";
import image3 from "../assets/Home3.jpg";
import image4 from "../assets/Home4.jpg";
import image5 from "../assets/Home5.jpg";
import image6 from "../assets/Home6.jpg";

// import images in here 
const itemData = [
    {
        img: image1,
        title: 'h1'
    },
    {
        img: image2,
        title: 'h2'
    },
    {
        img: image3,
        title: 'h3'
    },
    {
        img: image4,
        title: 'h4'
    },
    {
        img: image5,
        title: 'h5'
    },
    {
        img: image6,
        title: 'h6'
    }
];


function Home(){
    return(
        <><Navbar />
        <Container sx={{flexGrow:1, m:1}}disableGutters maxWidth = 'xl'>
            <Typography variant="h1" sx={{fontWeight:'bold',fontSize: '35px',pt:8,textAlign:'center'}}>Welcome</Typography>
                <Box sx={{display: 'flex', justifyContent: 'left', alignItems: 'normal', pt:1, 
                   width: '100vw'}}>
                    <Typography variant="h2"sx={{fontWeight:'light',fontSize: '35px',textAlign:'left', pt:2}}>
                        Selected Works
                    </Typography>
                </Box>
                <ImagePlacer Items={itemData} />
        </Container>
        
        </>
    );
}

export default Home;