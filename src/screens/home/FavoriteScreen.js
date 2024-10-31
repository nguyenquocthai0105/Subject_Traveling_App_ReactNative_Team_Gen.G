import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="left" size={30} color="#afbdc4" />
        </TouchableOpacity>

        <Text style={{ color: "#afbdc4", fontSize: 20, fontWeight: "bold" }}>
          Favorites
        </Text>
        <TouchableOpacity>
          <AntDesign name="bars" size={30} color="#afbdc4" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Places you liked
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  header: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default FavoriteScreen;
