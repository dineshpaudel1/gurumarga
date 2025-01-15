import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { RootStackParamList } from "../../../App"; // Import RootStackParamList

// Type the navigation prop for the Signup screen
type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const Signup = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>(); // Use the typed navigation hook

  // Navigate to Login screen when SignUp button is clicked
  const handleSignUp = () => {
    // Logic for SignUp can be added here (e.g., form validation, API calls, etc.)
    // After that, navigate to Login screen
    navigation.navigate("Login");
  };

  // Navigate to Login screen when Login link is clicked
  const handleLoginRedirect = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone number"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      {/* SignUp Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.loginButtonText}>SignUp</Text>
      </TouchableOpacity>

      {/* Register Section */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already Have an account? </Text>
        <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={styles.registerLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

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
    color: "#272727",
    fontSize: 14,
  },
  registerLink: {
    color: "#433BFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
