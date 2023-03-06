import React from "react";
import BaseView from "./base-view";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../../assets/images/logo.png";
import * as Animatable from "react-native-animatable";

const Savoir = (props) => {
  return (
    <BaseView>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={{ padding: 40 }}>
          Packtec is a major Company , recognized by many as a place where
            amazing careers begin.{"\n"}
            Whether you are at the start of your profession or you are starting
            a 180 degree turn, we offer you real opportunities to develop and
            deepen your knowledge through our career plans.{"\n"}
            We believe in continuous training and through the various
            possibilities at Concentrix we support you in your growth because
            our employees are indisputably our wealth and our pillar to move
            forward!
          </Text>
          <Text style={{ padding: 40, color: "#003366" }}>
            Adresse : 16 Rue des Métiers, Tunis 2035{"\n"}
            Téléphone : +216 71 942 661{"\n"}
            Création : 1976{"\n"}
            Nom officiel : Packtec-TUN{"\n"}
          </Text>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.navigation.pop()}
          style={{
            backgroundColor: "#003366",
            height: 50,
            width: "50%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            position: "absolute",
            bottom: 80,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              borderRadius: 25,
            }}
          >
            Return
          </Text>
        </TouchableOpacity>
      </View>
    </BaseView>
  );
};

export default Savoir;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 1,
    backgroundColor: "#009387",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  logo: {
    width: "90%",
    height: 150,
    borderRadius: 10,
    alignSelf: "center",
  },
 
});
