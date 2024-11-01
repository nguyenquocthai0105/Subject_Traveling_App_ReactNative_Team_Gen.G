import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "../screens/home/HomeScreen";
import FavoriteScreen from "../screens/home/FavoriteScreen";
import BookingScreen from "../screens/home/BookingScreen";
import InboxScreen from "../screens/home/InboxScreen";
import ProfileScreen from "../screens/home/ProfileScreen";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Favorites":
              iconName = "hearto";
              break;
            case "Bookings":
              iconName = "appstore-o";
              break;
            case "Inbox":
              iconName = "message1";
              break;
            case "Profile":
              iconName = "user";
              break;
            default:
              iconName = "home";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#41cbda",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Bookings" component={BookingScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
