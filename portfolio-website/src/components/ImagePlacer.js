import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from "@mui/material";

function ImagePlacer({Items}) {
    return(
        <Box sx={{ width: "100vw", height: "100vh", overflowY: 'scroll', pt:6}}>
        <ImageList sx={{width: "100%"}} variant="masonry" cols={3} gap={8}>
            {Items.map((item) =>(
                <ImageListItem key={item.img}>
                    <img
                     srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                     src={`${item.img}?w=248&fit=crop&auto=format`}
                     alt={item.title}
                     loading="lazy"
                   />
                </ImageListItem>
            ))}
        </ImageList>
        </Box>

    );
}

export default ImagePlacer;