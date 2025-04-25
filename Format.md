# This will be the format of SoundSycn

## **First Page:** Authentication
- We will be using the PKCE Flow to get our Authorization Code (Code Verifier, Code Challenge, Requesting User Auth, and Requesting Access Token)
- There will be button ⅓ from the bottom of the window that says “Login Using Spotify”
- This button will redirect you to the Spotify authorization server login page by updating the window.location object value
- The user will be allowed to grant permission to the SoundSync application
- If the user accepts the requested permissions, the OAuth service redirects the user back to the URL specified in the redirect_uri field
- The application is now given the authorization code that can be exchanged for an access token
- After the user accepts the authorization request of the previous step, we can exchange the authorization code for an access token. We must send a POST request to the /api/token endpoint with the following parameters: grant_type, code, redirect_uri, client_id, and code_verifier


## **Home Page:** Consists of basic info on the User’s music preference
- User’s favorite genres
- Favorite Artists
- Recently Played Artists
- Top Albums

## **Personalized Page:** Contains personalized information for the User
- Recommended songs
- Recommended artists
- Recommended similar genres
- Dive into new music (a playlist based on recommendations)
- Listening Patterns (more details - visual representation - on statistics page)

## **Comparison Page:** Compares the user with another user
- Will we need to authorize another user on the same app to grab data on them? Or can we grab data on this if they also use the SoundSync app? For example, if there is a mutual following between the two users on the app, can we grab data on both of them?
- Shows the similarity percentage between two users
- Shows the artists that both the users listen to
- Shows the artists that the other user listens to that you don’t listen to
- Creates a combined playlist based on the listening patterns of both users

## **Statistics Page:** Displayed the statistic that the user wants to see from a drop down box
- Has a drop down box at the top and shows an empty graph at the from mid - bottom page at first
- Based on the drop down selection, data is added to the graph
- Statistics:
  - Date vs. Time Listened (Histogram)
  - Favorite Genres (Pie Chart)
  - Favorite Artists (Pie Chart)
  - New Suggested Tracks vs. Similarity to Recorded Music Taste (Bar Graph)
  - New Suggested Artists vs. Similarity to Recorded Music Taste (Bar Graph)
  - New Suggested Genres vs. Similarity to Recorded Music Taste (Bar Graph)
