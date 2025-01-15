import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

interface HeaderProps {
  title: string;
  showNotification?: boolean;
}

const TopHeader: React.FC<HeaderProps> = ({ title, showNotification = true }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleNotificationPress = () => {
    navigation.navigate('NotificationScreen');
  };

  return (
    <View style={styles.headerContainer}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../../../assets/icons/backk.png')} 
          style={styles.backIcon} // Replace with your back icon image path
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Notification Button (conditionally rendered) */}
      {showNotification && (
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
          <Image
            source={require('../../../assets/icons/notification.png')} // Replace with your notification icon image path
            style={styles.notificationImage}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8', // Optional background color for clarity
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10, // Space between the title and buttons
  },
  notificationButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationImage: {
    width: 24,
    height: 24,
  },
});

export default TopHeader;
