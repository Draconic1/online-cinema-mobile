import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import MovieScreen from "./screens/MovieScreen";
import React from "react";
import { Provider } from "react-redux";
import {store} from "./components/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Кинотеатр Бауманец' component={Home} />
          <Stack.Screen name='Movie' component={MovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

