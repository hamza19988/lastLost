import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Purple
        strokeWidth: 2,
      },
      {
        data: [93, 93, 93, 93, 93, 93],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red
        strokeWidth: 2,
      },
    ],
  };

  // Sample data for the flat list
  const listData = [
    { week: 'Week 1', accuracy: '89%', aht: '2:35' },
    { week: 'Week 2', accuracy: '93%', aht: '2:20' },
    { week: 'Week 3', accuracy: '91%', aht: '2:30' },
    { week: 'Week 4', accuracy: '87%', aht: '2:40' },
  ];

  // Render item for the flat list
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.week}</Text>
      <View style={styles.listItemDetails}>
        <Text style={styles.listItemDetail}>Accuracy: {item.accuracy}</Text>
        <Text style={styles.listItemDetail}>AHT: {item.aht}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Week</Text>
      <View style={styles.indicatorsContainer}>
        <View style={styles.indicator}>
          <Text style={styles.indicatorTitle}>Accuracy</Text>
          <Text style={styles.indicatorValue}>89%</Text>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.indicatorTitle}>AHT</Text>
          <Text style={styles.indicatorValue}>2:35</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={350}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#f5f5f5',
            backgroundGradientTo: '#f5f5f5',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <Text style={styles.listTitle}>Last 4 Weeks</Text>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  indicator: {
    alignItems: 'center',
  },
  indicatorTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  indicatorValue: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  listContainer: {
    width: '100%',
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemDetail: {
    fontSize: 14,
    color: '#555',
  },
});


export default DashboardScreen;
