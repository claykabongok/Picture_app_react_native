import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function LinksScreen({ route, navigation }) {
  const { image } = route.params;
  navigation.setOptions({ title: image.tags });

  return (
    <>
      <Image
        style={{ flex: 4, height: 250 }} 
        source={{ uri: image.largeImageURL }}
      />

      <View style={{ flex: 1, margin: 2, paddingTop: 2 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.imageInfoTextHeader}>Downloads</Text>
          </View>

          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoTextHeader}>Views</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoTextHeader}>Likes</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoTextHeader}>Favorites</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoTextHeader}>Comments</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoText}> {image.downloads}</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoText}>{image.views}</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoText}>{image.likes}</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoText}>{image.favorites}</Text>
          </View>
          <View
            style={{
              flex: 1,

              height: 50,
            }}
          >
            <Text style={styles.imageInfoText}>{image.comments}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, height: 50, margin: 2, flexDirection: "row" }}>
        <View style={{ flex: 1, margin: 2 }}>
          <Text style={styles.imageInfoTags}>Tags: {image.tags}</Text>
        </View>
      </View>
      <View style={{ flex: 2, height: 100, margin: 2, flexDirection: "row" }}>
        <View style={{ flex: 1, margin: 2 }}>
          <Image
            style={{
              height: 150,
              width: 150,
              borderWidth: 5,
              borderColor: "white",
              borderRadius: 100,
            }}
            source={{ uri: image.userImageURL }}
          />
        </View>
        <View style={{ flex: 1, margin: 2 }}>
          <Text
            style={{
              fontSize: 22,
              color: "#560018",
            }}
          >
            by: {image.user}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },

  imageInfoText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#89103D",
    textAlign: "center",
  },
  imageInfoTextHeader: {
    fontSize: 14,

    textAlign: "center",
  },
  imageInfoTags: {
    fontWeight: "600",
    fontSize: 18,
  },
});
