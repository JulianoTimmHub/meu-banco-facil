import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ButtomTab = ({
  focused,
  size,
  color,
  icon,
  iconOutline
 }: any) => {
  return (
    <Ionicons
      name={focused ? icon : iconOutline}
      size={size}
      color={color}
      style={focused ? style.iconOutline : style.icon}
    />
  );
}

const style = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
  iconOutline: {
    backgroundColor: 'rgba(13, 110, 253, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  }
});