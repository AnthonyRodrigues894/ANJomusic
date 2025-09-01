import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { ProgressBar } from 'react-native-web';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={[styles.imageWrapper, styles.elevation]}>
          <Image
            source={require('./assets/img/silvinha.png')}
            style={styles.musicImage}
            />
        </View>

        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            Titulo da Musica
          </Text>
          <Text style={[styles.songContent, styles.songArtist]}>
            Autor da musica 
          </Text>
      </View>
    
      <View>
        <Slider
        style={styles.prpgressBar}
        value={10}
        minimumValue={0}
        maxmumValue={100}
        thumbTinColor='#FFD369'
        minimumTrackTintColor='ffd369'
        maximumTrackTintColor='#fff'
        onSlidingComplete={() => {}}
        />
        <View style={styles.progressLevelDuration}>
            <Text style={styles.progressLabelText}>00:00</Text>
            <Text style={styles.progressLabelText}>00:00</Text>
          </View>      
      </View>

      <View style={styles.musicControlContainer}>
        <TouchableOpacity>
          <Ionicons name='play-skip-back-outline' size={35} color="#FFD369" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name='pause-circle' size={75} color="#FFD369" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name='play-skip-forward-outline' size={35} color="#FFD369" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='repeat' size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='share-outline' size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='ellipsis-horizontal' size={30} color="#888888" />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E45',
    borderTopWidth: 1,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  imageWrapper: {
    width: 340,
    height: 360,
    marginVertical: 20,
  },
  elevation:{
    elevation: 5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84
  },
  musicImage:{
    width:'100%',
    height: '100%',
    borderRadius: 15
  },
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  },
  ProgressBar: {
    width: 350,
    height: 40,
    marginTop: 20,
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: 'fff',
    fontWeight: '500',
  },
  musicControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  }
});