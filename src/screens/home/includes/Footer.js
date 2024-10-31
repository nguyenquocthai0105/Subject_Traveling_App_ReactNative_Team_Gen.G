import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Footer = ({ buttonFooterState, setButtonFooterState }) => {
  const navigation = useNavigation();
  const buttonFooter = [
    { name: "Search", icon: "search1" },
    { name: "Favorites", icon: "hearto" },
    { name: "Bookings", icon: "appstore-o" },
    { name: "Inbox", icon: "message1" },
    { name: "Profile", icon: "user" },
  ];
  const renderButtonFooter = ({ item }) => {
    const isSelected = item.name === buttonFooterState;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setButtonFooterState(item.name);
            if (item.name === "Favorites") {
              navigation.navigate("FavoriteScreen");
            }
          }}
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
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
  return (
    <View style={styles.footer}>
      <FlatList
        data={buttonFooter}
        renderItem={renderButtonFooter}
        keyExtractor={(item) => item.name}
        contentContainerStyle={[
          styles.buttonContainer,
          {
            position: "absolute",
            bottom: 0,
            paddingVertical: 20,
            borderTopWidth: 1,
            borderTopColor: "#cecfd1",
            width: "100%",
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default Footer;
