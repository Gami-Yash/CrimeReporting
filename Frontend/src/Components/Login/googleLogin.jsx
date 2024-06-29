import React from 'react';
import { GoogleLogin } from 'react-google-login';

// Assuming you've set up an.env.local file correctly and added your client ID there
const clientID = "186323848512-q3mbqm3nkph6ab885oj4fnnh1m279q76.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("Login Successful : ", res.profileObj.email);
        
    };

    const onFailure = (res) => {
        console.log("Login Failed : ", res);
        // Handle failed login here, e.g., show an error message
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'} // Corrected typo
                isSignedIn={true} // Corrected typo
            />
        </div>
    );
}

export default Login;
