// BottomTabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';

const HomeScreen: React.FC = () => (
  <View style={{ flex: 1 }}>
    <Text>Home</Text>
  </View>
);

const CourseScreen: React.FC = () => (
  <View style={{ flex: 1 }}>
    <Text>Course</Text>
  </View>
);

const OrderScreen: React.FC = () => (
  <View style={{ flex: 1 }}>
    <Text>Order</Text>
  </View>
);

const ProfileScreen: React.FC = () => (
  <View style={{ flex: 1 }}>
    <Text>Profile</Text>
  </View>
);


const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black', // Set active tab's text/icon color to yellow
        tabBarInactiveTintColor: 'black', // Inactive tab color
        tabBarStyle: { borderTopColor: 'white', borderTopWidth: 2 }, // Add yellow border when any tab is active
        tabBarIcon: ({ focused }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = require('../../../assets/icons/Home.png');
          } else if (route.name === 'Course') {
            iconPath = require('../../../assets/icons/Course.png');
          } else if (route.name === 'Order') {
            iconPath = require('../../../assets/icons/Order.png');
          }else if (route.name === 'Profile') {
            iconPath = require('../../../assets/icons/Profile.png');
          }

          return (
            <Image
              source={iconPath}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#433BFF' : '#464646', // Yellow icon when active
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
