import React from "react";
import "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
          <Text style={[styles.title]}>Packtec - TUN</Text>
          <Text style={styles.text}>Sign in to your account</Text>
          <View style={styles.containerBtn}>
            <View style={styles.buttonHelp}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Savoir");
                }}
              >
                <LinearGradient
                  colors={["white", "white"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign1}>Learn More</Text>
                  <MaterialIcons
                    name="navigate-next"
                    color="#003366"
                    size={20}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <LinearGradient
                  colors={["white", "whitesmoke"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Start</Text>
                  <MaterialIcons
                    name="navigate-next"
                    color="#003366"
                    size={28}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    </>
  );
};

export default Welcome;
export const { height } = Dimensions.get("screen");
export const height_logo = height * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1.75,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#003366",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: 350,
    height: 300,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
  },
  text: {
    color: "whitesmoke",
    marginTop: 5,
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "15%",
  },
  signIn: {
    width: "85%",
    height: 60,
    width:144,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    marginRight:18,
  },
  textSign: {
    color: "#003366",
    fontWeight: "bold",
  },
  textSign1: {
    color: "#003366",
    fontWeight: "bold",
  },
});
