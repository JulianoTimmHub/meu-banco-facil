import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import { BackScreen } from "./backScreen";

export const HeaderIcons = ({
  navigation
}: any) => {
  return (
    <View style={styles.container} >
      <View style={styles.leftIcons} >
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.5}>
          <Ionicons
            style={styles.icon}
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightIcons} >
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.5}>
          <Ionicons
            style={styles.icon}
            name="add"
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.5}>
          <Ionicons
            style={styles.icon}
            name="filter"
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingTop: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#cacaca"
  },
  leftIcons: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rightIcons: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconButton: {
    borderRadius: 20,
    // backgroundColor: "#000"
  },
  icon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
});