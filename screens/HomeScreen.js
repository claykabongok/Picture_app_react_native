import * as WebBrowser from "expo-web-browser";
import * as React from "react";

import axios from "axios";

import {
  Image,
  Platform,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import ViewImage from "../screens/ViewImage";
import Constants from "expo-constants";
const numCol = 3;
const { width, height } = Dimensions.get("window");

const equalWidth = width / numCol;

export default function HomeScreen({ navigation }) {
  const [loading, setloading] = React.useState(true);
  const [pictures, setPictures] = React.useState([]);

  React.useEffect(() => {
    setloading(true);
    const api = "https://pixabay.com/api/";
    const key = "your key";

    axios({
      method: "GET",
      url: `${api}?key=${key}&image_type=photo&per_page=40`,
    })
      .then((res) => {
        setPictures(res.data.hits);

        setloading(false);
      })
      .catch((e) => {
        setloading(false);
      })
      .finally(() => setloading(false));
  }, []);
  const pictures_render_item = ({ item }) => {
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
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={pictures}
          renderItem={pictures_render_item}
          keyExtractor={(item) => item.id}
          numColumns={numCol}
        />
      )}
    </View>
  );
}
// }

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: 170,
    width: equalWidth - 2.5,
    margin: 1,
  },
});
