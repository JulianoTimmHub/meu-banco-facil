import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export const Header = () => {
  const [user, setUser] = useState("Juliano");

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Olá, {user}</Text>
      <TouchableOpacity activeOpacity={0.9} style={styles.userIcon}>
        <Feather name="user" size={27} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d6efd',
    minHeight: '40%',
    paddingTop: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  userName: {
    padding: 20,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  userIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    padding: 15,
    margin: 15
  }
});