import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import axios from "axios";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import ViewImage from "../screens/ViewImage";
import Constants from "expo-constants";
import SeacrhResultScreen from "./SearchResults";
export default function LinksScreen({ navigation }) {
  const [searchQuery, setsearchQuery] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const [images, setImages] = React.useState([]);

  function submitQuery(e) {
    setloading(true);

    const api = "https://pixabay.com/api/";
    const key = "your key";

    axios({
      method: "GET",
      url: `${api}?key=${key}&image_type=photo&per_page=40&q=${searchQuery}`,
    })
      .then((res) => {
        setImages(res.data.hits);

        setloading(false);
      })
      .catch((e) => {
        setloading(false);
        console.log(e);
      })
      .finally(() => setloading(false));
  }

  return (
  
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setsearchQuery}
        //onChange={onChangeSearch}
        onEndEditing={submitQuery}
        placeholder="Type Here..."
        value={searchQuery}
      />
      {loading && <ActivityIndicator />}

      {images != null ? (
        <SeacrhResultScreen results={images} navigation={navigation} />
      ) : (
        ""
      )}
    </View>
  );
}


