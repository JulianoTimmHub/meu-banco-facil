import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useAuthContext } from "@/src/hooks/contexts/useAuthContext.hook";

import styled from "styled-components/native";

export const Header = () => {
  const { user } = useAuthContext();

  return (
    // <View style={styles.container}>
    <HeaderView>
      <Text style={styles.userName}>Olá, {user?.username}</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.userIcon}>
        <Feather name="user" size={27} color="#fff" />
      </TouchableOpacity>
    </HeaderView>
  )
}

const HeaderView = styled.View`
  background-color: ${props => props.theme.background};
  min-height: 40%;
  padding-top: 40px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d6efd',
    minHeight: '40%',
    paddingTop: 40,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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