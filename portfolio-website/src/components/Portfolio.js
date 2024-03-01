import React from "react";
import Navbar from "./navbar.js";
import { Box, Container,Typography } from "@mui/material";
import ImagePlacer from "./ImagePlacer.js";
import image1 from "../assets/mai.jpg";
import image2 from "../assets/aastha.jpg";
import image3 from "../assets/mai2.jpg";
import image4 from "../assets/Aryan.jpg";
import image5 from "../assets/Aki.jpg";
import image6 from "../assets/aki2.jpg";
import image7 from "../assets/Zoe.jpg";
import image8 from "../assets/simran.jpg";
import image9 from "../assets/nachi.jpg";
import image10 from "../assets/manika.jpg";

const itemData = [
    {
        img: image1,
        title: 'Mai'
    },
    {
        img: image2,
        title: 'Aastha'
    },
    {
        img: image3,
        title: 'Mai'
    },
    {
        img: image4,
        title: 'Aryan'
    },
    {
        img: image5,
        title: 'Aki'
    },
    {
        img: image6,
        title: 'Aki'
    },
    {
        img: image7,
        title: 'Zoe'
    },
    {
        img: image8,
        title: 'Simran'
    },
    {
        img: image9,
        title: 'Nachi'
    },
    {
        img: image10,
        title: 'Manika'
    },
   
];

function Portfolio(){
    return(
        // yet to add another image list here 
        <><Navbar />
         <Container sx={{flexGrow:1, m:1}}disableGutters maxWidth = 'xl'>
            <ImagePlacer Items={itemData} />
        </Container>
        
        {/* <Container disableGutters maxWidth ='xl' sx={{display:'flex',flexGrow:1, justifyContent:"center"}}>
            <ImagePlacer Items={itemData} />
        </Container> */}
        </>
    );
};

export default Portfolio;