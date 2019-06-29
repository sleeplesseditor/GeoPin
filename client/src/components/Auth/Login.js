import React, { useContext } from "react";
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
import { oAuthClientId } from '../config';
import Typography from "@material-ui/core/Typography";
import Background from '../../media/background3.jpg';
import Context from '../../context';
import { ME_QUERY } from '../../graphql/queries';
import { BASE_URL } from "../../client";

const Login = ({ classes }) => {
    const { dispatch } = useContext(Context)
    const onSuccess = async googleUser => {
        try {
            const idToken = googleUser.getAuthResponse().id_token;
            const client = new GraphQLClient(BASE_URL, {
                headers: { authorization: idToken }
            })
            const { me } = await client.request(ME_QUERY);
            dispatch({ type: "LOGIN_USER", payload: me })
            dispatch({ type: "IS_LOGGED_IN", payload: googleUser.isSignedIn() })
        } catch(err) {
            onFailure(err);
        }
    }
    
    const onFailure = err => {
        console.error("Error Logging In", err);
        dispatch({ type: "IS_LOGGED_IN", payload: false });
    }

  return (
    <div className={classes.root}>
        <div className={classes.loginBox}>
            <div className={classes.loginHeading}>    
                <Typography
                    component="h1"
                    variant="h3"
                    gutterBottom
                    noWrap
                    style={{ color: "rgb(255,255,255)" }}
                >
                    Welcome
                </Typography>
                <GoogleLogin 
                    clientId={oAuthClientId} 
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    isSignedIn={true}
                    buttonText="Login with Google"
                    theme="dark"
                />
                <Typography
                    component="h3"
                    variant="h5"
                    style={{ 
                        color: "rgb(255,255,255)",
                        margin: "25px",
                        textAlign: "center"
                    }}
                >
                    Share Photos About Your Favourite Local Spots
                </Typography>
            </div>
        </div>
    </div>
  );
};

const styles = {
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  },
  loginBox: {
    background: 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7))',
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  loginHeading: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  }
};

export default withStyles(styles)(Login);