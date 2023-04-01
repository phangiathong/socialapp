import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "../context/authContext";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import { auth } from "../filebaseConfig";
import { onAuthStateChanged } from "@firebase/auth";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigatior } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import Activity from "../screens/Activity";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigatior();

const bottomTabScreen = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => {}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      // console.log(user);
    });
  }, []);

  if (user) {
    return (
      <Stack.Navigator
        defaultScreenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        defaultScreenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Register" component={Signup} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }
};

export default StackNavigator;
