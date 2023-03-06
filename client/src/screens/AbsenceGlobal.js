import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const AbsenceGlobal = () => {
  const absenceData = {
    labels: ["Week1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        data: [3, 2, 1, 4, 5],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // red
        strokeWidth: 2, // optional
      },
    ],
  };

  const tableData = [
    { employee: "Ahmed Ben Ahmed", absences: 3 },
    { employee: "Mohamed Ben Mohamed", absences: 2 },
    { employee: "Hassan Ben Ali", absences: 4 },
    { employee: "Fatima Ben Mahmoud", absences: 1 },
    { employee: "Samir Ben Slimane", absences: 0 },
    { employee: "Riadh Ben Hamza", absences: 2 },
    { employee: "Amina Ben Amor", absences: 5 },
    { employee: "Ali Ben Hassen", absences: 1 },
    { employee: "Nadia Ben Salem", absences: 2 },
    { employee: "Mouna Ben Youssef", absences: 3 },
    { employee: "Zineb Ben Nasri", absences: 0 },
    { employee: "Aymen Ben Jemaa", absences: 1 },
  ];

  const renderItem = ({ item }) => {
    const totalAbsences = tableData.reduce((acc, curr) => acc + curr.absences, 0);
    const percentage = Math.round((item.absences / totalAbsences) * 100);

    return (
      <View style={styles.row}>
        <Text style={styles.column}>{item.employee}</Text>
        <Text style={[styles.column, styles.rightAlign]}>{item.absences}</Text>
        <Text style={[styles.column, styles.rightAlign]}>{percentage}%</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <LineChart
          data={absenceData}
          width={350}
          height={200}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
      <SafeAreaView style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={[styles.column, styles.header]}>Employee</Text>
          <Text style={[styles.column, styles.header, styles.rightAlign]}>
            Absences
          </Text>
          <Text style={[styles.column, styles.header, styles.rightAlign]}>
            Absences %
          </Text>
        </View>
        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  chartContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  tableContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "90%",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  column: {
    flex: 1,
  },
  rightAlign: {
    textAlign: "right",
  },
  header: {
    fontWeight: "bold",
  },
  list: {
    marginTop: 8,
  },
});

export default AbsenceGlobal;
