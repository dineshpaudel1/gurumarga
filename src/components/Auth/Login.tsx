import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { RootStackParamList } from "../../../App"; // Import the interface
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>; // Correctly type for Login screen

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>(); // Type the navigation hook

  // Handle Login Button Press
  const handleLogin = () => {
    // After login, navigate to the BottomTabNavigation screen
    navigation.navigate("BottomTabNavigation"); // Navigate to BottomTabNavigation
  };

  // Handle Create Account Button Press
  const handleCreateAccount = () => {
    navigation.navigate('SignUp'); // Navigate to SignUp screen
  };

  // Handle Register Button Press (Navigate to SignUp screen)
  const handleRegister = () => {
    navigation.navigate('SignUp'); // Navigate to SignUp screen
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
      />
      <TextInput
        style={styles.input1}
        placeholder="Enter Password"
        placeholderTextColor="#ccc"
        secureTextEntry
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

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
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
  registerButton: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "#433BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  registerButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
});
