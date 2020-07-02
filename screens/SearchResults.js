import React from "react";
import {
  Image,
  Platform,
  Button,
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import ViewImage from "../screens/ViewImage";
import Constants from "expo-constants";
const numCol = 3;
const { width, height } = Dimensions.get("window");

const equalWidth = width / numCol;

export default function SearchResults({ results, navigation }) {
  const _images_render_item = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ViewImage", {
            image: item,
          })
        }
      >
        <View>
          <Image source={{ uri: item.largeImageURL }} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={_images_render_item}
        keyExtractor={(item) => item.id}
        numColumns={numCol}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: equalWidth - 2.5,
    margin: 1,
  },
});
