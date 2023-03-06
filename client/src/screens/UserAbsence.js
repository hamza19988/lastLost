import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const UserAbsence = () => {
  const [totalAbsence, setTotalAbsence] = useState(5);
  const [justifiedAbsence, setJustifiedAbsence] = useState(4);
  const [nonJustifiedAbsence, setNonJustifiedAbsence] = useState(1);
  const [sumOfDelay, setSumOfDelay] = useState(10);

  const calculateDelay = () => {
    // code to calculate the sum of delay in hours
  };

  const adjustNonJustifiedAbsence = () => {
    // code to adjust the non-justified absence count if it passes 24 hours
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{totalAbsence}</Text>
        <Text style={styles.circleLabel}>Absences</Text>
      </View>
      <View style={styles.absenceContainer}>
        <View style={styles.justifiedAbsence}>
          <Text style={styles.absenceCount}>{justifiedAbsence}</Text>
          <Text style={styles.absenceLabel}>Justified Absences</Text>
        </View>
        <View style={styles.nonJustifiedAbsence}>
          <Text style={styles.absenceCount}>{nonJustifiedAbsence}</Text>
          <Text style={styles.absenceLabel}>N-Justified Absences</Text>
        </View>
      </View>
      <View style={styles.delayContainer}>
        <Text style={styles.delayCount}>{sumOfDelay}</Text>
        <Text style={styles.delayLabel}> Total Sum delay (hours)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 300,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  circleLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  absenceContainer: {
    width: 200,
    height: 100,
    flexDirection: "row",
    marginTop: 30,
    marginRight: 150,
  },
  justifiedAbsence: {
    alignItems: "center",
    backgroundColor: "#00AA00",
    padding: 10,
    borderRadius: 20,
    marginRight: 5,
  },
  nonJustifiedAbsence: {
    alignItems: "center",
    backgroundColor: "#AA0000",
    padding: 10,
    borderRadius: 20,
  },
  absenceCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  absenceLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  delayContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  delayCount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  delayLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#808080",
    
    
  },
});

export default UserAbsence;
