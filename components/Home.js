import React from "react";
import Logo from "../assets/logo.png";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Background from '../assets/background.jpg';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.image}>
        <View style={styles.home}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.logoText}>Education for Digital ERA</Text>
        </View>
      </ImageBackground>
      <View style={styles.secoundView}></View>
      <View style={styles.thirdView}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secoundView: {
    height: 100,
    backgroundColor: "#228efa",
  },
  thirdView: {
    height: 100,
    backgroundColor: "#a5ea34",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  home: {
    height: 560,
    alignItems: "center",
  },
  logo: {
    top: 70,
    width: 100,
    height: 100,
  },
  logoText: {
    top: 80,
    fontSize: 15,
    fontWeight: "600",
  },
});
