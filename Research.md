# How OAuth 2.0 Works

## User Authorization Request
- The app initiates an authentication request by redirecting the user to Spotify's authorization endpoint.
- The user is prompted to log in and approve requested permissions (like reading listening history and managing playlists).

## Authorization Code Exchange
- Once the user approves, Spotify redirects them back to our app with an **authorization code**.
- The app then exchanges this code for an **access token** by sending a request to Spotify’s token endpoint (along with the app’s client credentials).

## Access Token & API Requests
- The received access token lets our app make authorized API calls on behalf of the user.
- You can fetch their listening habits, playlists, or music preferences.

## Token Refresh Mechanism
- Since access tokens expire after a set period, our app will need to request a **refresh token**. I belive every 3600 seconds (1 hour).
- This refresh token allows our app to get a new access token without requiring the user to log in again.

Since we’re using [`react-native-app-auth`](https://github.com/FormidableLabs/react-native-app-auth), it will handle most of the OAuth flow, including token management.

## How to Get User's Top Items
- To retrieve information about a user's most listened-to artists and tracks using Spotify's API with PKCE, you can use the Get User's Top Items endpoint. Here's how it works:
- Endpoint: GET /me/top/{type}
- Parameters:
- type: Specify either "artists" or "tracks" to get the top artists or tracks.
- time_range: Choose the time frame for the data (e.g., short_term for ~4 weeks, medium_term for ~6 months, or long_term for ~1 year). Default is medium_term.
- limit: Set the number of items to return (default is 20, max is 50).
- offset: Specify the starting point for the items to return (default is 0).
- To access this data, you'll need to:
- Implement the PKCE flow to obtain an access token.
- Use the access token to call the /me/top/{type} endpoint with the required parameters.
- For playlists, you might need to use other endpoints like GET /me/playlists to fetch a user's playlists and analyze their content.
<br><br><br>
__________________________________________________________________________
### Documentation
- [How to Get The Authorization Code with PKCE Flow](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow#code-challenge)
- [How to Refresh Tokens](https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens)
- [How to Use The Access Tokens](https://developer.spotify.com/documentation/web-api/concepts/access-token)
- [How to get User's Top Items](https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks?)
