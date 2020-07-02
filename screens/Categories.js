import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "fashion",
            })
          }
        >
          <Text style={styles.categoryText}>Fashion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "nature",
            })
          }
        >
          <Text style={styles.categoryText}>Nature</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "science",
            })
          }
        >
          <Text style={styles.categoryText}>Science</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "people",
            })
          }
        >
          <Text style={styles.categoryText}>People</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "travel",
            })
          }
        >
          <Text style={styles.categoryText}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "buildings",
            })
          }
        >
          <Text style={styles.categoryText}>Buildings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ViewImageCat", {
              category: "places",
            })
          }
        >
          <Text style={styles.categoryText}>Places</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    margin: 2,
  },
  contentContainer: {
    paddingTop: 15,
  },

  categoryContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    margin: 2,
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#89103D",
    textAlign: "center",
  },
});
