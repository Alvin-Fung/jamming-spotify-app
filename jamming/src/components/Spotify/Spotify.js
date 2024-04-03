var client_id = 'be14b06a1d904f64a78c523bedd02a33';
var redirect_url = 'http://localhost:3000/';
var url = window.location.href;

const Spotify = {
    // Place holder for access token
    accessToken: "",

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
            // Redirect URL
            const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}
            &response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_url}`;
            window.location = redirect;
            console.error('Access token was not found in URL');
        }
    },

    searchTracks(term) {
        const accessToken = Spotify.accessToken();
        console.log(accessToken);
        // Web app endpoint reference for searching tracks
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name
                }));
            });
    }
};

export default Spotify;
