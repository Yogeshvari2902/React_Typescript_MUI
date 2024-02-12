import React from "react";
import Grid from '@mui/material/Grid'; 
import RegistrationController from './RegistrationController.web'
import { TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styles } from "../CreateCustomer.web";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffcc',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const gridStyle = {
    backgroundColor: 'lightblue'
  };
export class Registration extends RegistrationController{
    render () {
        return(
            <>
                <Typography>Hello register</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container style={gridStyle} lg={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item style={styless.headMaingrid as React.CSSProperties}>
                                <Grid item style={styless.headSecondgrid as React.CSSProperties}>
                                    <Typography variant="h5" style={styless.head as React.CSSProperties}>
                                        Welcome to Pet Hotel
                                    </Typography>
                                    <TextField label="Enter Email"  error id="filled-error">
                                        Email
                                    </TextField>
                                    <br/>
                                    <TextField label="Enter Password">
                                        Password
                                    </TextField>
                                    <br/>
                                    <TextField label="Confirm Password">
                                        Confirm Password
                                    </TextField>
                                    <br/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}

const styless = {
    headMaingrid: {
      margin: "auto",
    },
    headSecondgrid: {
      maxWidth: "500px",
      borderBottomRightRadius: "45px",
      padding: "30px",
      backgroundColor: "rgba(255, 255, 255)",
      boxShadow: "0px 8px 32px 0px #4386A108, 0px 4px 8px 0px #4386A108",
    },
    head: {
      fontWeight: 700,
      marginBottom: "30px",
      color: "#334155",
      fontSize: "30px",
      textAlign: "left",
      font: "inter",
      textTransform: "none",
      fontFamily: "inter",
    }
  };