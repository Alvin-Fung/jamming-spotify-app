var client_id = 'be14b06a1d904f64a78c523bedd02a33';
var redirect_uri = 'http://localhost:3000/';

const Spotify = {
    // Place holder for access token
    accessToken: '',

    // Method for access token retrieval
    getAccessToken() {
        // Checks if it's set
        if (accessToken) {
            return accessToken;
        } else {
            // Otherwise, it will attempt to retrieve it from the URL
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
            if (accessTokenMatch && expiresInMatch) {
                // Need some logic here that extracts the access token from the URL
                // Probably also need to have a way of storing it and returning
                // As well as handling for it if there is no token found

            } else {
                console.error('Access token was not found in URL');
            }
        }
    },
};

export default Spotify;
