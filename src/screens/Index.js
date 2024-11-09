import React, { useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity>
        <Image source={require("../../assets/images/logo.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Index;