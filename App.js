import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import ViewImage from "./screens/ViewImage";
import ViewImageCat from './screens/ViewCatScreen';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <StatusBar barStyle="light-content" backgroundColor="#89103D" />
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          >
            
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{
                headerStyle: {
                  backgroundColor: "#89103D",
                },
                headerTintColor: "#fff",
                
              }}
            />
            <Stack.Screen
              name="ViewImage"
              component={ViewImage}
              options={{
                title: "Image details",
                headerStyle: {
                  backgroundColor: "#89103D",
                },
                headerTintColor: "#fff",

                // headerTitleStyle: {
                //   fontWeight: 'bold',
                // },
              }}
            />
             <Stack.Screen
              name="ViewImageCat"
              component={ViewImageCat}
              options={{
                title: "View Images by Categories",
                headerStyle: {
                  backgroundColor: "#89103D",
                },
                headerTintColor: "#fff",

              
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
});
