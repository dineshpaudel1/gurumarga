import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import TopHeader from "../../components/TopHeader/TopHeader";

interface Notification {
  id: string;
  type: "success" | "error";
  title: string;
  message: string;
  date: string;
}

const notificationsData: Notification[] = [
  {
    id: "1",
    type: "success",
    title: "Your Documents are Approved now",
    message: "Go to Profile to Update your Driving Information to Rent.",
    date: "1/24",
  },
  {
    id: "2",
    type: "error",
    title: "Your Information is not Updated",
    message: "Update your Driving Information to Rent Bikes and Scooters from Chalau.",
    date: "1/24",
  },
];

const NotificationScreen: React.FC = () => {
    const renderItem = ({ item }: { item: Notification }) => (
      
    <TouchableOpacity
      style={[
        styles.notificationItem,
        item.type === "success" ? styles.successBackground : styles.errorBackground,
      ]}
    >
      <View style={styles.iconContainer}>
        <Image
          source={
            item.type === "success"
              ? require("../../../assets/icons/tick.png") // Path to your success image
              : require("../../../assets/icons/tick.png") // Path to your error image
          }
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
      <Text style={styles.dateText}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <TopHeader title="Notification" showNotification={true} />
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
    color: "#333",
  },
  listContainer: {
    paddingBottom: 16,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    backgroundColor: "#ffffff",
  },
  successBackground: {
    backgroundColor: "#e9fbe9", // Light green for success
  },
  errorBackground: {
    backgroundColor: "#fbe9e9", // Light red for error
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  dateText: {
    fontSize: 12,
    color: "#999",
    alignSelf: "flex-start",
  },
});

export default NotificationScreen;
