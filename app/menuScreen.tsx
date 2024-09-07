import { ThemeModal } from "@/components/modal/themeModal";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Modal, Text, SafeAreaView, TouchableOpacity } from "react-native"
import styled, { ThemeProvider } from "styled-components/native"

export const MenuScreen = ({ }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={{ opacity: openModal ? 0.2 : 1}}>
        <Menu>
          <MenuTopic>Preferências</MenuTopic>
          <MenuOption
            activeOpacity={0.7}
            onPress={() => setOpenModal(true)}
          >
            <MenuText>Tema do sistema</MenuText>
            <Ionicons
              name="sunny"
              size={22}
            />
            <Modal
              visible={openModal}
              animationType="fade"
              transparent={true}
              onRequestClose={() => setOpenModal(false)}
            >
              <ThemeModal handleClose={handleClose} />
            </Modal>
          </MenuOption>
        </Menu>
      </ThemeProvider>
    </SafeAreaView>
  )
}

const Menu = styled.View`
  height: 100%;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color:  #fff;
  opacity: ${props => props.theme.opacity};
`;

const MenuTopic = styled.Text`
  font-weight: 500;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const MenuText = styled.Text`
  /* font-weight: 500; */
`;

const MenuOption = styled.TouchableOpacity`
  background-color: #ece5e5;
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;