var client_id = 'be14b06a1d904f64a78c523bedd02a33';
var redirect_uri = 'http://localhost:3000/';
var url = window.location.href;

const Spotify = {
    // Place holder for access token
    accessToken: '',

    // Method for access token retrieval
    getAccessToken() {
        // Checks if it's set
        if (this.accessToken) {
            return this.accessToken;
        }
        // Otherwise, it will attempt to retrieve it from the URL
        const accessTokenMatch = url.match(/access_token=([^&]*)/);
        const expiresInMatch = url.match(/expires_in=([^&]*)/);

        // If they are both found in the URL, then it gets stored
        if (accessTokenMatch && expiresInMatch) {
            this.accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // Callback function 
            window.setTimeout(() => this.accessToken = '', expiresIn + 1000);
            window.history.pushState('Access Token', null, '/');

            return this.accessToken;
        } else {
            console.error('Access token was not found in URL');
        }
    },
};

export default Spotify;
