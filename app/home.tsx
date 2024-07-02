import { Button, Text, View } from "react-native"
import { SignIn } from "./signIn"
import { Header } from "./header"

export const Home = ({ navigation }: any) => {
  return (
    <View>
      <Header />
      <Button title="Voltar para login" onPress={() => navigation.navigate("SignIn")} />
    </View>
  )
}