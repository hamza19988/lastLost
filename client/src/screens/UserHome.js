import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const posts = [
  {
    id: "1",
    title: "aaaaaaaa ",
    image: require("../../assets/images/logo.png"),
    description:
      "Packtec VisualCX Platform powered by Grypp, stands out as a new digital technology solution.",
  },
  {
    id: "2",
    title: "Packtec  Green Achievements",
    image: require("../../assets/images/logo.png"),
    description:
      "Packtec Earns awards from EcoVadis, Ecological Blue Flag Program, and for Greenhouse Gas emission reduction.",
  },
  {
    id: "3",
    title: "Packtec Ranked",
    image: require("../../assets/images/logo.png"),
    description:
      "Company also Ranked Tenth in Best Workplaces in Latin America NEWARK, Calif., Oct. 13, 2022 (GLOBE NEWSWIRE) — Packtec Corporation (Nasdaq: CNXC), a leading global provider.",
  },
  {
    id: "4",
    title: "Packtec HR Software",
    image: require("../../assets/images/logo.png"),
    description:
      "Best in Biz Awards recognize Packtec for maximizing the impact of wellness ",
  },
  {
    id: "5",
    title: "Packtec Wins Environmental Program of the Year",
    image: require("../../assets/images/logo.png"),
    description:
      "Best in Biz Awards recognizes Packtec’ One Packtec, One Earth Sustainability Program For a second year.",
  },
];

const screenWidth = Dimensions.get("window").width;

const UserHome = () => {
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <Image source={item.image} style={styles.postImage} />
        <View style={styles.postTextContainer}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>News</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  postTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5,
  },
  postDescription: {
    color: "#777",
    fontSize: 12,
  },
  absenceContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  absenceHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  chartContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default UserHome;
