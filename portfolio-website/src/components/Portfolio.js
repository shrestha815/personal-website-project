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
        title: 'Mai'
    },
    {
        img: image3,
        title: 'Mai'
    },
    {
        img: image4,
        title: 'Mai'
    },
    {
        img: image5,
        title: 'Mai'
    },
    {
        img: image6,
        title: 'Mai'
    },
    {
        img: image7,
        title: 'Mai'
    },
    {
        img: image8,
        title: 'Mai'
    },
    {
        img: image9,
        title: 'Mai'
    },
    {
        img: image10,
        title: 'Mai'
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