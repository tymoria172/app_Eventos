import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from "../screens/SearchEvents";
import Home from "../screens/Home";
import { Animated, Dimensions, Platform, View } from "react-native";
import { useRef, useState } from "react";
import { House, MagnifyingGlass, Ticket, User } from "phosphor-react-native";
import SearchEvents from "../screens/SearchEvents";
import Profile from "../screens/Profile";
import Tickets from "../screens/Tickets";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const tabOffSetValue = useRef(new Animated.Value(0)).current;
  const keyboardVerticalOffset = Platform.OS === "ios" ? 0 : 0;
  let { width, height } = Dimensions.get("screen");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [bottomTabSize, setBottomTabSize] = useState(10);
  const [paddinBottom, setPaddinBottom] = useState(0);
  const [animatedView, setAnimatedView] = useState(10.5);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#494949",

        tabBarStyle: {
          backgroundColor: "#010101",
          height: height / bottomTabSize,
        },

        tabBarHideOnKeyboard: false,
      }}
      initialRouteName="welcome"
    >
      
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <House
                size={24}
                color={color}
                weight={focused ? "fill" : "regular"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="searchEvents"
        component={SearchEvents}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MagnifyingGlass
                size={24}
                color={color}
                weight={focused ? "fill" : "regular"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ticket
                size={24}
                color={color}
                weight={focused ? "fill" : "regular"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <User
                size={24}
                color={color}
                weight={focused ? "fill" : "regular"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
