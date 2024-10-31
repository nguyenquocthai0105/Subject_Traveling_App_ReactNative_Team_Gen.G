import { useState } from "react";
import { FlatList, Image } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import Footer from "./includes/Footer";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [beach, setBeach] = useState([
    {
      id: 1,
      type: "Beach",
      name: "Ocean View Resort",
      evaluated: 4.5,
      price: 200,
      image: "https://picsum.photos/200/300?random=1",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 2,
      type: "Beach",
      name: "Sunny Sands Hotel",
      evaluated: 4.7,
      price: 150,
      image: "https://picsum.photos/200/300?random=2",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 3,
      type: "Beach",
      name: "Tropical Paradise",
      evaluated: 4.8,
      price: 250,
      image: "https://picsum.photos/200/300?random=3",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 4,
      type: "Beach",
      name: "Seaside Escape",
      evaluated: 4.6,
      price: 180,
      image: "https://picsum.photos/200/300?random=4",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 5,
      type: "Beach",
      name: "Coastal Retreat",
      evaluated: 4.9,
      price: 300,
      image: "https://picsum.photos/200/300?random=5",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
  ]);

  const [mountain, setMountain] = useState([
    {
      id: 6,
      type: "Mountain",
      name: "Mountain View Lodge",
      evaluated: 4.6,
      price: 220,
      image: "https://picsum.photos/200/300?random=6",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 7,
      type: "Mountain",
      name: "Alpine Retreat",
      evaluated: 4.8,
      price: 280,
      image: "https://picsum.photos/200/300?random=7",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 8,
      type: "Mountain",
      name: "Highland Cabin",
      evaluated: 4.7,
      price: 250,
      image: "https://picsum.photos/200/300?random=8",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 9,
      type: "Mountain",
      name: "Snowy Peaks Inn",
      evaluated: 4.9,
      price: 300,
      image: "https://picsum.photos/200/300?random=9",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 10,
      type: "Mountain",
      name: "Canyon View Resort",
      evaluated: 4.5,
      price: 190,
      image: "https://picsum.photos/200/300?random=10",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
  ]);

  const [camping, setCamping] = useState([
    {
      id: 11,
      type: "Camping",
      name: "Riverside Campground",
      evaluated: 4.6,
      price: 220,
      image: "https://picsum.photos/200/300?random=11",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 12,
      type: "Camping",
      name: "Forest Retreat",
      evaluated: 4.8,
      price: 280,
      image: "https://picsum.photos/200/300?random=12",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 13,
      type: "Camping",
      name: "Lakeside Camp",
      evaluated: 4.7,
      price: 250,
      image: "https://picsum.photos/200/300?random=13",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 14,
      type: "Camping",
      name: "Mountain Camp",
      evaluated: 4.9,
      price: 300,
      image: "https://picsum.photos/200/300?random=14",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
    {
      id: 15,
      type: "Camping",
      name: "Wilderness Camp",
      evaluated: 4.5,
      price: 190,
      image: "https://picsum.photos/200/300?random=15",
      icon: "hearto",
      icon1: "heart",
      isSelected: false,
    },
  ]);

  const [buttonState, setButtonState] = useState("Beach");
  const buttonName = [
    { name: "Beach", icon: "umbrella-beach" },
    { name: "Mountain", icon: "mountain" },
    { name: "Camping", icon: "campground" },
  ];
  const [buttonFooterState, setButtonFooterState] = useState("Search");

  const renderButton = ({ item }) => {
    const isSelected = item.name === buttonState;
    return (
      <View
        style={{
          flex: 1,
          borderBottomWidth: 5,
          borderBottomColor: isSelected ? "#41cbda" : "#ebfdff",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 30,
          }}
          onPress={() => setButtonState(item.name)}
        >
          <FontAwesome5
            name={item.icon}
            size={20}
            color={isSelected ? "#41cbda" : "grey"}
            style={{ marginBottom: 5 }}
          />
          <Text style={{ color: isSelected ? "#41cbda" : "grey" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
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
  const toggleFavorite = (id) => {
    if (buttonState === "Beach") {
      const newBeach = beach.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      setBeach(newBeach);
    } else if (buttonState === "Mountain") {
      const newMountain = mountain.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      setMountain(newMountain);
    } else {
      const newCamping = camping.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
      setCamping(newCamping);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Feather
            name="search"
            size={20}
            color="grey"
            style={{ position: "absolute", top: 15, left: 15, zIndex: 1 }}
          />
          <TextInput
            placeholder="Where do you want to stay?"
            style={{
              height: 50,
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "grey",
              paddingLeft: 40,
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={buttonName}
            renderItem={renderButton}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.buttonContainer}
          />
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={
            buttonState === "Beach"
              ? beach
              : buttonState === "Mountain"
              ? mountain
              : camping
          }
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ alignItems: "center" }}
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
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    flex: 2,
    backgroundColor: "#ebfdff",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  body: {
    flex: 7,
    backgroundColor: "white",
  },
});
export default HomeScreen;
