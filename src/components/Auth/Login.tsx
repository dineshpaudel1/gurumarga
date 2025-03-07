import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios"; // Import Axios
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // State for input fields
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAcessToken] = useState("");

  // Handle Login Button Press
  const handleLogin = async () => {
    try {
      // Make API request
      const response = await axios.post("http://10.0.2.2:8080/auth/login", {
        username,
        password
      });
      const { accessToken } = response.data;
      console.log(response.data)

      if (accessToken) {
        // Store the accessToken in AsyncStorage (or SecureStorage for better security)
        await AsyncStorage.setItem("accessToken", accessToken);

        // Navigate to BottomTabNavigation screen after successful login
        navigation.navigate("BottomTabNavigation");
      } else {
        Alert.alert("Login Failed", "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
    console.log(accessToken);
  };


  // Handle Create Account Button Press
  const handleCreateAccount = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number or email"
        placeholderTextColor="#ccc"
        value={username}
        onChangeText={(text) => setuserName(text)}
      />
      <TextInput
        style={styles.input1}
        placeholder="Enter Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Section */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>New User? </Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.registerLink}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  input: {
    width: 350,
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  input1: {
    width: 350,
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  forgotPassword: {
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 220,
  },
  loginButton: {
    width: 350,
    height: 50,
    backgroundColor: "#433BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 40,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    marginBottom: 80,
  },
  registerText: {
    color: "#666",
    fontSize: 14,
  },
  registerLink: {
    color: "#FF0000",
    fontSize: 14,
    fontWeight: "bold",
  },
});
