import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ImagePlacer(Items) {
    return(
        <ImageList sx={{width: 500, height: 450}} variant="woven" cols={3} gap={8}>
            {Items.map((item) =>(
                <ImageListItem key={item.img}>
                    <img
                     srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                     src={`${item.img}?w=161&fit=crop&auto=format`}
                     alt={item.title}
                     loading="lazy"
                   />
                </ImageListItem>
            ))}
        </ImageList>

    );
}

export default ImagePlacer;