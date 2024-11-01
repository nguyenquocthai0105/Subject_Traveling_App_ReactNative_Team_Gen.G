import { useState } from "react";
import { FlatList, Image } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from "./includes/Footer";
const FavoriteScreen = () => {
  const routed = useRoute();
  const [buttonFooterState, setButtonFooterState] = useState(
    routed.params?.buttonFooterState || "Favorites"
  );
  const [favoriteList, setFavoriteList] = useState(
    routed.params?.favoriteList || []
  );
  const navigation = useNavigation();
  const toggleFavorite = (id) => {
    const list = favoriteList.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    );
    setFavoriteList(list);
    const item = list.find((item) => item.id === id);
    setFavoriteList((prev) =>
      item.isSelected ? prev.filter((item) => item.id !== id) : [...prev, item]
    );
  };
  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 20 }}>
        <TouchableOpacity
          style={{
            marginVertical: 20,
            position: "absolute",
            zIndex: 1,
            right: 20,
            backgroundColor: "white",
            height: 40,
            width: 40,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            toggleFavorite(item.id);
          }}
        >
          <AntDesign
            name={item.isSelected ? item.icon1 : item.icon}
            size={20}
            color={item.isSelected ? "red" : "grey"}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: item.image }}
            style={{ width: 350, height: 350, borderRadius: 10 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Entypo name="star" size={15} color="#ebd067" />
              <Text>{item.evaluated}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text>{item.type}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>${item.price}</Text>
              <Text style={{ color: "grey" }}>/night</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="#afbdc4" />
        </TouchableOpacity>

        <Text style={{ color: "#afbdc4", fontSize: 20, fontWeight: "bold" }}>
          Favorites
        </Text>
        <TouchableOpacity>
          <AntDesign name="bars" size={30} color="#afbdc4" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Places you liked
        </Text>
      </View>
      <View style={{ flex: 7 }}>
        <FlatList
          data={favoriteList}
          renderItem={renderItem}
          contentContainerStyle={{ alignItems: "center" }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Footer
        buttonFooterState={buttonFooterState}
        setButtonFooterState={setButtonFooterState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});

export default FavoriteScreen;
