import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

const Opsscreen = () => {
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

  const pieData = [
    { name: "TTR1", absences: 178 },
    { name: "Live R1", absences: 220 },
    { name: "HVQ", absences: 26 },
    { name: "Gaming", absences: 38 },
  ];
 

  const renderPieChart = () => {
    const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F", "#581845", "#003366", "#2ECC71", "#8E44AD", "#F39C12"];

    const chartData = pieData.map((data, index) => ({
        name: data.name,
        absences: data.absences,
        color: colors[index % colors.length],
        legendFontColor: "#7F7F7F",
        legendFontSize: 13,
      }
      )
      );

      const productivityData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue
            strokeWidth: 2, // optional
          },
        ],
      };

        return (
        <PieChart
            data={chartData}
            width={350}
            height={200}
            chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 16,
          },
          hasLegend: true,
          legendFontSize: 15,
        }}
        accessor={"absences"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 10]}
        absolute
        hasLegend={true}
        legendFontSize={15}
        style={{
          borderRadius: 16,
        }}
        doughnut={true}
      />
    );
};



  return (
    <View style={styles.container}>
      
      <View style={styles.chartContainer}>
      <Text style={styles.title}>Ops Absence</Text>
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
        <Text style={styles.subtitle}>Lobs Details</Text>
        {renderPieChart()}
      </View>
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
    pieChartContainer: {
      marginTop: 40,
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
      width: "90%",
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 10,
    },
    donutCenterText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
  });
  
export default Opsscreen;
