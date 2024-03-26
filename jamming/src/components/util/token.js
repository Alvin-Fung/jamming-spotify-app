var client_id = 'CLIENT_ID';
var redirect_uri = 'http://localhost:3000/callback';

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
            // Need some logic here that extracts the access token from the URL
            // Probably also need to have a way of storing it and returning
            // As well as handling for it if there is no token found
        }
    }
}

export { Spotify };
