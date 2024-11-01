import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Vietnam",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      name: "Japan",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      name: "USA",
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      name: "France",
      image: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      name: "Brazil",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 6,
      name: "India",
      image: "https://picsum.photos/200/300?random=6",
    },
    {
      id: 7,
      name: "Australia",
      image: "https://picsum.photos/200/300?random=7",
    },
    {
      id: 8,
      name: "Canada",
      image: "https://picsum.photos/200/300?random=8",
    },
  ]);

  const [selectedId, setSelectedId] = useState(1); // Trạng thái để theo dõi mục đã chọn

  const renderItem = ({ item }) => {
    const borderColor = selectedId === item.id ? "#41cbda" : "white"; // Đổi màu viền dựa trên mục đã chọn

    return (
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={{
            borderWidth: 5,
            borderColor,
            borderRadius: 10,
            marginVertical: 5,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 150, height: 150, borderRadius: 5 }}
          />
        </TouchableOpacity>
        <Text style={{ color: selectedId === item.id ? "black" : "grey" }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          top: 50,
          marginBottom: 30,
        }}
      >
        <AntDesign
          name="close"
          size={24}
          color="grey"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          flex: 4,
          borderWidth: 1,
          borderColor: "#cecfd1",
          borderRadius: 10,
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>
          Where to?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={{ position: "absolute", top: 13, left: 10 }}
          />
          <TextInput
            placeholder="Search"
            style={{
              height: 50,
              flex: 1,
              borderWidth: 1,
              paddingLeft: 40,
              fontSize: 20,
              borderRadius: 10,
            }}
          />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ marginTop: 20 }}
          horizontal
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#cecfd1",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 20, color: "#cecfd1" }}>When</Text>
          <Text style={{ fontSize: 20 }}>Add time</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#cecfd1",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 20, color: "#cecfd1" }}>Where</Text>
          <Text style={{ fontSize: 20 }}>Select location</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2 }}></View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#cecfd1",
        }}
      >
        <Text style={{ color: "#cecfd1", fontSize: 20 }}>Clear all</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "#41cbda",
            borderRadius: 10,
            paddingLeft: 30,
            paddingRight: 20,
            height: 50,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="search1"
            size={24}
            color="white"
            style={{ left: -10 }}
          />
          <Text style={{ fontSize: 20, color: "white" }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;
