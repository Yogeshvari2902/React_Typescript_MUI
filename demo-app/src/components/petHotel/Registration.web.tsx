import React from "react";
import RegistrationController from './RegistrationController.web'
import { TextField, Typography, Checkbox, Grid, InputAdornment, withStyles } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styles } from "../CreateCustomer.web";
import { colors } from "@mui/material";

const CssTextField = withStyles({
    root: {
      
      '& .MuiInput-underline:after': {
        borderBottomColor: '#54A7C9',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#CBD5E1',
          borderRadius:"8px"
        },
        
        '&.Mui-focused fieldset': {
          borderColor: '#54A7C9',
          borderWidth:"2px",
          borderRadius:"8px"
        },
      },
    },
  })(TextField);
const gridStyle = {
    backgroundColor: 'lightblue'
};
export class Registration extends RegistrationController{
    render () {
        const {
            confirmPassword,
            checkboxTrue,
            showPassword,
            showYourPassword,
        }=this.state

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
                                    <label style={styless.labelsEmailPassword as React.CSSProperties}>
                                        Email
                                    </label>
                                    <br />
                                    <CssTextField
                                        style={styless.inputEmailPassword as React.CSSProperties}
                                        type="email"
                                        placeholder="   Your email"
                                        variant="outlined"
                                        data-test-id="email-change"
                                    />
                                     <label style={styless.labelsEmailPassword as React.CSSProperties}>
                                        Password
                                    </label>
                                    <br />
                                    <CssTextField
                                        style={styless.inputEmailPassword as React.CSSProperties}
                                        type="password"
                                        placeholder="   Your Password"
                                        variant="outlined"
                                        data-test-id="-password_change"
                                    />
                                     <label style={styless.labelsEmailPassword as React.CSSProperties}>
                                        Confirm Password
                                    </label>
                                    <br />
                                    <CssTextField
                                        style={styless.inputEmailPassword as React.CSSProperties}
                                        type="password"
                                        placeholder="   Confirm Password"
                                        variant="outlined"
                                        data-test-id="confirm_password"
                                    />
                                    <div>
                                        <Checkbox
                                        data-test-id="checkBoxCheck"
                                        checked={checkboxTrue}
                                        inputProps={{ "aria-label": "checkbox with default color" }}
                                        color="default"
                                        />
                                        <label
                                            style={{
                                                color:"#64748B",
                                                font:"inter",
                                                fontFamily:"inter",
                                                textTransform:"none"
                                            }}
                                        >
                                            I agree {" "}
                                            <span>Privacy Policy</span>
                                        </label>
                                    </div>
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
    },
    labelsEmailPassword: {
        color: "#334155",
        fontWeight: 700,
        font: "inter",
        textTransform: "none",
        fontFamily: "inter",
    },
    inputEmailPassword: {
        width: "100%",
        height: "40px",
        marginBottom: "40px",
        borderRadius: "5px",
        fontSize: "14px",
        marginTop: "5px",
        fontWeight: 400,
      },
  };