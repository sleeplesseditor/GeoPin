import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
      primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[700]
      },
      secondary: {
        light: blueGrey[300],
        main: blueGrey[500],
        dark: blueGrey[700]
      }
    },
    typography: {
      useNextVariants: true
    }
  });
  
  function withRoot(Component) {
    function WithRoot(props) {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      );
    }
  
    return WithRoot;
  }
  
  export default withRoot;