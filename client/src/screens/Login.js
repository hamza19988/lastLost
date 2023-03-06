import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Animated,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logoAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    if (email === "user" && password === "user") {
      navigation.navigate("User");
    } else if (email === "admin" && password === "admin") {
      navigation.navigate("Admin");
    } else if (email === "manager" && password === "manager") {
      navigation.navigate("Manager");
    } else if (email === "transport" && password === "transport") {
      navigation.navigate("Transporteur");
    }else {
      Alert.alert("Error", "Invalid email or password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/logo.png")}
        style={[styles.logo, { opacity: logoAnim }]}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginBottom: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  buttonContainer: {
    width: "80%",
    height: 40,
    marginTop: 20,
    marginBottom: 200,
  },
  button: {
    flex: 1,
    backgroundColor: "#003366",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});

export default Login;
