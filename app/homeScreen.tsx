import { Button, View } from "react-native"
import { Header } from "../components/header"

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Header />
      <Button title="Voltar para login" onPress={() => navigation.navigate("SignIn")} />
    </View>
  )
}