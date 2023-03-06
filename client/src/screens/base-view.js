import React from "react";
import * as Animatable from "react-native-animatable";
import { Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";

const BaseView = ({ children }) => {
  return (
    <Animatable.View
      animation={"slideInUp"}
      duration={400}
      delay={100}
      style={styles.baseView}
    >
      <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 0,
    backgroundColor: "white",
  },
});
export default BaseView;
