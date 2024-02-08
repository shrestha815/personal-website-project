import React, { useEffect} from "react";
import { Link, useLocation} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
//import './NavStyle.css';
import { createTheme } from '@mui/material/styles';
import { Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

//Change Lato to EB Garmond 
const theme = createTheme({
    typography: {
      fontFamily: [
        'EB Garamond',
        'sans-serif',
      ],
    },
  });

const Navbar=() => {
    return (
       <React.Fragment>
            <AppBar sx={{background: '#181818'}}>
                <Toolbar style={{justifyContent: 'center'}}>
                    <ThemeProvider theme={createTheme}>
                        <Typography>
                            Safal Shrestha
                            <Tabs variant="standard" textColor='#FFFFFF' style={{textAlign:'left'}}>
                                <Tab label="Home">

                                </Tab>
                            </Tabs>
                        </Typography>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
       </React.Fragment>
    );
};

export default Navbar;