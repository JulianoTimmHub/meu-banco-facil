import { HeaderGoals } from "@/components/goals/headerGoals"
import { BackScreen } from "@/components/icons/backScreen"
import { HeaderIcons } from "@/components/icons/headerIcons"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"

export const GoalScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView style={{ flex: 1}}> */}
        {/* <HeaderIcons navigation={navigation} /> */}
        <HeaderGoals />
        <View style={styles.body}>
          <Text>Teste</Text>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // justifyContent: "flex-start",
    // alignItems: "center"
  },
  body: {
    // width: "100%",
    flex: 1,
    backgroundColor: "#cacaca"
  }
});