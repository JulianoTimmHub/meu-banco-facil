import { StyleSheet, Text, View } from "react-native";
import { HeaderIcons } from "../icons/headerIcons";

export const HeaderGoals = ({ }) => {
  return (
    <View style={styles.container}>
      <HeaderIcons navigation={null} />
      <View style={styles.headerContainer}>
        <View style={styles.firstContent}>
          <Text style={styles.textValues}>Valor total</Text>
          <Text style={styles.totalValue}>R$ 4.000,00</Text>
        </View>
        <View style={styles.secondContent}>
          <View style={styles.secondContentValue}>
            <Text style={styles.textValues}>Valor ativo em metas</Text>
            <Text style={styles.activeValue}>R$ 3.200,00</Text>
          </View>
          <View style={styles.secondContentValue}>
            <Text style={styles.textValues}>Valor disponível</Text>
            <Text style={styles.availableValue}>R$ 800,00</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "35%",
    backgroundColor: "#0d6efd"
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 15,
    gap: 5
  },
  firstContent: {
    height: "100%",
    width: "45%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15
  },
  secondContent: {
    height: "100%",
    width: "55%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  secondContentValue: {
    height: "48%",
    width: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  totalValue: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 22
  },
  activeValue: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17
  },
  availableValue: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17
  },
  textValues: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 17
  },
});