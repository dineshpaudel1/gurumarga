import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

const Header: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen'); // Navigate to the Notification screen
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../../assets/nobglogo.png')} style={styles.logoImage} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleNotificationPress}>
          <Image source={require('../../../assets/icons/notification.png')} style={styles.icon} />
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
    width: 50,
    height: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    width: 25,
    height: 25,

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
