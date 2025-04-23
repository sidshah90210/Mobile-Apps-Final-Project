# Mobile-Apps-Final-Project
This is our Mobile Applications end of year final project idea:


## 🎵 SoundSync – Your Personalized Spotify Listening Insights  

SoundSync connects to **Spotify's API** to analyze your listening habits, provide personalized insights, and generate smart recommendations based on your evolving music taste. It also includes **playlist management** and **music taste comparison** features.

### 🚀 Features & Functionality  

#### 🎧 Listening Habit Insights  
- Tracks **daily, weekly, and monthly** listening trends.  
- Displays **most listened-to tracks, artists, and genres**.  
- Graphs **listening patterns** to visualize taste evolution.  

#### 🔥 Music Recommendations  
- Suggests **similar songs & artists** based on listening history.  
- Identifies **potential new favorites** using Spotify's recommendation engine.  
- Predicts **genre shifts** and helps discover fresh music.  

#### 📝 Playlist Enhancement  
- Allows adding **recommended tracks** directly to Spotify playlists.  
- Organizes playlists based on **listening habits** (e.g., Morning Upbeat Playlist).  
- Analyzes how **playlists evolve** over time.  

#### 🎶 User Comparison & Compatibility  
- Compares **music taste between accounts** (friends, couples).  
- Calculates a **similarity score** based on shared songs & artists.  
- Displays a **comparison graph** showing overlap in musical preferences.  

---

### 🛠️ Technologies & Libraries  

Built using **React Native** and integrated with **Spotify’s Web API**, featuring:

- **Authentication:** [`react-native-app-auth`](https://github.com/FormidableLabs/react-native-app-auth) (OAuth 2.0 for Spotify login).  
- **Data Fetching:** `axios` or `fetch` (for API calls).  
- **Charts & Graphs:** [`react-native-chart-kit`](https://github.com/indiespirit/react-native-chart-kit), [`victory-native`](https://formidable.com/open-source/victory/) (for listening trends).  
- **Storage:** `SQLite` or `Firebase` (for long-term tracking).  
- **Background Sync:** [`react-native-background-fetch`](https://github.com/transistorsoft/react-native-background-fetch) (for automated data updates).  

---

### 💡 Challenges & Considerations  
- **Spotify doesn’t store long-term listening history**, so SoundSync starts tracking from the moment an account is linked.  
- **API rate limits** may affect frequent requests—batch processing is required.  
- **User privacy** should be ensured, especially for taste comparison features.  

---

### 🔥 Unique Selling Point  
Unlike **Spotify’s built-in stats**, **SoundSync** provides:  
✅ **Deeper, long-term tracking** of music habits.  
✅ **Personalized trends** tailored to listening behavior.  
✅ **Interactive comparisons** for shared music preferences.  

🎶 **Turn data into discovery – explore your music taste like never before!** 🚀  
