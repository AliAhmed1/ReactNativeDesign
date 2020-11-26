import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';


const { widthOf } = Dimensions.get('window');


export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View horizontal={false} style={styles.top}>
        <Image style={styles.image} source={require('./assets/home/Boy.png')}>
        </Image>

        <Text style={styles.name}><b>Welcome Back <br></br>Mikataj</b></Text>

        <Image style={styles.search} source={require('./assets/home/search.png')} />

        <Image style={styles.start} source={require('./assets/home/start.png')} />

      </View>

      <View style={styles.course}>
        <Text style={styles.courseText}> courses in progress</Text>

        <Image style={styles.pic} source={require('./assets/home/pic1.png')}></Image>
        <Image style={styles.pic} source={require('./assets/home/pic2.png')}></Image>
        <Image style={styles.pic} source={require('./assets/home/pic3.png')}></Image>

      </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow : "hidden"
  },
  top: {
    backgroundColor: "#F18C8E",
    width: "100%",
    height: 280,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    resizeMode: "cover",

  },
  image: {
    resizeMode: "contain",
    top: 30,
    left: 110,
    width: 313,
    height: 300,
    position: "absolute"
  },
  name: {
    alignItems: "center",
    paddingTop: 80,
    fontSize: 28,
    color: 'white',
    marginLeft: 20
  },
  search: {
    width: widthOf * 0.8,
    height: 45,
    resizeMode: "contain",
    padding: 10,
    marginBottom: 15,
    marginTop: 15
  },
  start: {
    width: widthOf * 0.8,
    height: 120,
    resizeMode: "contain",
  },
  course: {
    marginTop: 80,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  courseText: {
    marginLeft: 20,
    fontSize: 15
  },
  pic: {
    flex: 1,
    marginTop: 10,
    width: widthOf * 0.8,
    height: 70,
    resizeMode: widthOf > 500 ? "cover" : "contain",
    marginLeft: 30,
    marginRight: 30,
  }
});
