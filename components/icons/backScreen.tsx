import { Ionicons } from "@expo/vector-icons"

export const BackScreen = ({ navigation }: any) => {
  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="black"
      style={{ marginLeft: 10 }}
      onPress={() => navigation.goBack()}
    />
  )
}