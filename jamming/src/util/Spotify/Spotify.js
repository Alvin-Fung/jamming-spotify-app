var clientID = "be14b06a1d904f64a78c523bedd02a33";
var redirectURI = "http://localhost:3000";
let accessToken = "";

const Spotify = {
    // Method for access token retrieval
    getAccessToken() {
        // Checks if it's set
        if (accessToken) return accessToken;

        // Otherwise, it will attempt to retrieve it from the URL
        var url = window.location.href;
        const accessTokenMatch = url.match(/access_token=([^&]*)/);
        const expiresInMatch = url.match(/expires_in=([^&]*)/);

        // If they are both found in the URL, then it gets stored
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // This actuall sets the access token to expire at the value for expiration time
            window.setTimeout(() => this.accessToken = "", expiresIn + 1000);
            window.history.pushState("Access Token", null, "/");
            return accessToken;

        } else {
            // Redirect URL
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
            console.error('Access token was not found in URL');
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        console.log(accessToken);
        // Web app endpoint reference for searching tracks
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            //Authoriziation parameter for the user's access token in the implicit grant flow request format
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (!jsonResponse) {
                    console.log("Response error.");
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            });
    },

    savePlaylist(playlistName, trackURIs) {
        // Default variables
        if (!playlistName || !trackURIs) return Promise.reject("Access token not found!");
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userID;

        // Fetches the current user's  ID
        return fetch(`https://api.spotify.com/v1/me`, { headers: headers, })
            .then((response) => response.json())
            .then((jsonResponse) => {
                userID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ name: playlistName }),
                })
                    //Converting response into a JSON
                    .then((response) => response.json())
                    .then(jsonResponse => {
                        const playlistID = jsonResponse.id;
                        return fetch(
                            `https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                            headers: headers,
                            method: "POST",
                            body: JSON.stringify({ uris: trackURIs }),
                        }
                        );
                    })
            });
    },
};

export { Spotify };
