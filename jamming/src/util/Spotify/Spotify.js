var clientID = 'be14b06a1d904f64a78c523bedd02a33';
var redirectURI = 'http://localhost:3000/';
var url = window.location.href;
let accessToken = '';

const Spotify = {
    // Method for access token retrieval
    getAccessToken() {
        // Checks if it's set
        if (accessToken) {
            return accessToken;
        }

        // Otherwise, it will attempt to retrieve it from the URL
        const accessTokenMatch = window.Location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        // If they are both found in the URL, then it gets stored
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // Callback function 
            window.setTimeout(() => this.accessToken = '', expiresIn + 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;

        } else {
            // Redirect URL
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}
            &response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
            console.error('Access token was not found in URL');
        }
    },

    searchTracks(term) {
        const accessToken = Spotify.getAccessToken();
        console.log(accessToken);
        // Web app endpoint reference for searching tracks
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            });
    }
};

export { Spotify };
