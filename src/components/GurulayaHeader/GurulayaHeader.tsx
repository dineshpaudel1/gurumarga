import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

const Header: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleUserProfilePress = () => {
    navigation.navigate('Profile'); // Navigate to the Profile screen
  };

  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen'); // Navigate to the Notification screen
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Image source={require('../../../assets/logo.png')} style={styles.logoImage} /> */}
        <Text style={styles.logo}>Guru<Text style={styles.logoword}>-Laya</Text></Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleNotificationPress}>
          <Image source={require('../../../assets/icons/notification.png')} style={styles.icon1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUserProfilePress}>
          <Image source={require('../../../assets/icons/Profile.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon1: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    },
    logo: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "poppins",
        color:"#000"
    },
    logoword: {
        color:"#433BFF",
    }
});

export default Header;
