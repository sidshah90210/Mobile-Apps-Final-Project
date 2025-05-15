import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Dimensions, TextInput, Image, Alert } from 'react-native';

import {SoundPlayer} from "react-native-sound-player";

let deviceHeight = Dimensions.get('window').height;

export default class App extends Component {
  state = {
    currentPage: 'Home',
    sound: null,
    playing: false,
    library: [],
    playlists: [
      { id: 1, name: 'Main', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOUA6JFXYBc_HelVwX1QMZHb-gqaAhqHkKg&s', songs: [] },
      { id: 2, name: 'Workout', cover: 'https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg', songs: [] },
    ],
    songs: [
      { id: 1, title: 'Meltdown', artist: 'Travis Scott', uri: "https://codehs.com/uploads/d60261dc51ae204bbae46424a8d3d834", pic: "https://cdn-images.dzcdn.net/images/cover/6c91e64b7157f1332a4f6b0de9e4c714/0x1900-000000-80-0-0.jpg" },
      { id: 2, title: 'Sweet Boy', artist: 'Malcom Todd', uri: "https://codehs.com/uploads/a81556a255de25a35bebf7dcceab6cc6", pic: "https://i.discogs.com/JftFkNELhXMpJKDd1uajmVqGy1fFZtScpG8hP5_1O-U/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMDI4/NjIzLTE3NDA2OTY0/OTctNDQ3Ny5qcGVn.jpeg" },
    ],
    newSongName: '',
    newArtist: '',
    newURL: '',
    newPic: '',
    count: 0,
  };

  navigate = (page) => this.setState({ currentPage: page });

  playSound = (song, song1) => {
      var song1 = new Audio(song.uri);
      if (this.state.count%2 == 0) {
      song1.play();
      this.state.count = this.state.count + 1;
      }
      
    
  };
  preview = (song, song1) => {
      var song1 = new Audio(song.uri);
      if (this.state.count%2 == 0) {
      song1.play();
      
      setTimeout( function() {song1.pause()}, 10000);
      }

  };
  increment = () => {
      this.state.count = this.state.count + 1;
};
  addToLibrary = (song) => {
    
    if (!this.state.library.some((s) => s.id === song.id)) {
      this.setState((prevState) => ({
        library: [...prevState.library, song],
      }));
    }
    
  };

  addSong = () => {
    const { newSongName, newArtist, newURL, newPic, songs } = this.state;
    if (!newSongName || !newArtist || !newURL) return Alert.alert('Missing fields', 'Please enter song name, artist, and URL');
    const newSong = {
      id: Date.now(),
      title: newSongName,
      artist: newArtist,
      uri: newURL,
      pic: newPic || 'https://via.placeholder.com/50',
    };
    this.setState({
      songs: [...songs, newSong],
      newSongName: '',
      newArtist: '',
      newURL: '',
      newPic: '',
    });
  };

  addToPlaylist = (playlistId, song) => {
    this.setState((prevState) => ({
      playlists: prevState.playlists.map((pl) =>
        pl.id === playlistId && !pl.songs.some((s) => s.id === song.id)
          ? { ...pl, songs: [...pl.songs, song] }
          : pl
      ),
    }));
  };

  renderSongCard = (song, allowPlaylist = true) => (
    <View key={song.id} style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.subtitle}>{song.artist}</Text>
          <Button title="Preview" onPress={() => this.preview(song)} />
          <Button title="Add to Library" onPress={() => this.addToLibrary(song)} />
          
          {allowPlaylist && this.state.playlists.map((pl) => (
            <Button key={pl.id} title={`Add to ${pl.name}`} onPress={() => this.addToPlaylist(pl.id, song)} />
            
          ))}
        </View>
        <Image source={{ uri: song.pic }} style={styles.albumArt} />
      </View>
    </View>
  );

  renderHome = () => (
    <ScrollView style={styles.scroll}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Song Title" style={styles.input} value={this.state.newSongName} onChangeText={(t) => this.setState({ newSongName: t })} />
        <TextInput placeholder="Artist" style={styles.input} value={this.state.newArtist} onChangeText={(t) => this.setState({ newArtist: t })} />
        <TextInput placeholder="Audio URL" style={styles.input} value={this.state.newURL} onChangeText={(t) => this.setState({ newURL: t })} />
        <TextInput placeholder="Album Pic URL (optional)" style={styles.input} value={this.state.newPic} onChangeText={(t) => this.setState({ newPic: t })} />
        <Button title="Add Song" onPress={this.addSong} />
      </View>

      {this.state.songs.map((song) => this.renderSongCard(song))}
    </ScrollView>
  );

  renderLibrary = () => (
    <ScrollView style={styles.scroll}>
      {this.state.library.length === 0 ? (
        <Text style={styles.empty}>No songs saved yet.</Text>
      ) : (
        this.state.library.map((song) => 
    <View key={song.id} style={styles.card}>
      <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{song.title}</Text>
              <Text style={styles.subtitle}>{song.artist}</Text>
              <Button title="Play" onPress={() => this.playSound(song)} />
            </View>
                <Image source={{ uri: song.pic }} style={styles.albumArt} />
        </View>
    </View>))}
    </ScrollView>
  );

  renderPlaylists = () => (
    <ScrollView style={styles.scroll}>
      {this.state.playlists.map((pl) => (
        <View key={pl.id} style={styles.card}>
          <Image source={{ uri: pl.cover }} style={{height: 70, width: 70, margin: 10, borderRadius: 8,}} />
          <Text style={styles.title}>{pl.name}</Text>
          {pl.songs.length === 0 ? <Text style={styles.subtitle}>No songs yet</Text> : (
            pl.songs.map(song => (
              <Text key={song.id} style={styles.subtitle}>• {song.title}</Text>
            ))
          )}
        </View>
      ))}
    </ScrollView>
  );


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          {this.state.currentPage === 'Home' && this.renderHome()}
          {this.state.currentPage === 'Library' && this.renderLibrary()}
          {this.state.currentPage === 'Playlists' && this.renderPlaylists()}
        </View>

        
        <View style={styles.navbar}>
          {['Home', 'Library', 'Playlists'].map((page) => (
            <TouchableOpacity key={page} onPress={() => this.navigate(page)}>
              <Text style={styles.navText}>{page}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  body: { flex: 1, padding: 10 },
  scroll: { marginVertical: 10 },
  card: {
    backgroundColor: '#222',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  subtitle: { color: '#aaa', marginTop: 5 },
  albumArt: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 10,
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  player: {
    height: deviceHeight / 12,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerText: { color: 'white', fontSize: 16 },
  navbar: {
    height: deviceHeight / 12,
    backgroundColor: '#1DB954',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  empty: { color: 'gray', textAlign: 'center', marginTop: 20 },
});
