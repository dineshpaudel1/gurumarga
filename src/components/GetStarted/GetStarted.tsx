import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type GetStartedNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const GetStarted = () => {
  const navigation = useNavigation<GetStartedNavigationProp>(); // Type the navigation hook

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.heading}>Online Education</Text>

      <Text style={styles.description}>
        We provide you a most convenient way of online education and
        professional skills.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started →</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By continuing, you agree to our{' '}
        <Text style={styles.link}>Terms & Condition</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 50,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#433BFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  footerText: {
    marginTop: 70,
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
  },
  link: {
    color: '#433BFF',
    textDecorationLine: 'underline',
  },
});

export default GetStarted;
