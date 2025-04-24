# How OAuth 2.0 Works

## User Authorization Request
- The app initiates an authentication request by redirecting the user to Spotify's authorization endpoint.
- The user is prompted to log in and approve requested permissions (like reading listening history and managing playlists).

## Authorization Code Exchange
- Once the user approves, Spotify redirects them back to your app with an **authorization code**.
- The app then exchanges this code for an **access token** by sending a request to Spotify’s token endpoint (along with the app’s client credentials).

## Access Token & API Requests
- The received access token lets your app make authorized API calls on behalf of the user.
- You can fetch their listening habits, playlists, or music preferences.

## Token Refresh Mechanism
- Since access tokens expire after a set period, your app will need to request a **refresh token**. I belive every 3600 seconds (1 hour).
- This refresh token allows your app to get a new access token without requiring the user to log in again.

Since we’re using [`react-native-app-auth`](https://github.com/FormidableLabs/react-native-app-auth), it will handle most of the OAuth flow, including token management.
