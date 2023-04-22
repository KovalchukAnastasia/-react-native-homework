import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.icon}> */}
        <MaterialIcons
          name="logout"
          size={24}
          color="black"
          style={styles.icon}
        />
        {/* </TouchableOpacity> */}
        <Text style={styles.title}>Posts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    width: "100%",
    height: 44,
    flexDirection: "row",
    marginTop: 44,
    paddingVertical: 11,
    justifyContent: "center",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 17,
    fontFamily: "roboto-medium",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 20,
  },
});
