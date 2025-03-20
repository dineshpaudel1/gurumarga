import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Profile: undefined;
  ClientInformation: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  // Handlers for navigation
  const handleNavigation = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };




  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarWrapper}>
          {/* Profile Avatar Image */}
          <Image
            source={require('../../../assets/Profileicon/profile.png')}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.profileName}>Dinesh Paudel</Text>
        <Text style={styles.profileName}>Iam currently live in Nepal</Text>
        <Text style={styles.phoneNumber}>9847503434</Text>
      </View>

      {/* Info Cards */}
      <View style={{ width: '90%', marginLeft: 20 }}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ClientInformation')}
          >
            <View style={styles.iconLabel}>
              <Image source={require('../../../assets/Profileicon/infof.png')} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>My Information</Text>
                <Text style={styles.cardSubtitle}>View your personal details</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    width: '100%',
  },
  profileContainer: {
    alignItems: 'center',
  },
  avatarWrapper: {},
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: '#EAEAEA',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});

export default Profile;
