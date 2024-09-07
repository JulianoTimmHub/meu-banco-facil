import { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Checkbox } from 'react-native-paper';
import styled from "styled-components/native";

export const ThemeModal = ({ handleClose }: any) => {
  const [selectedOption, setSelectedOption] = useState('light');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        onPress={handleClose}
      />
      <ModalBody>
        <ModalTitle>Modos</ModalTitle>
        <ModalOptions>
          <ModalOption>
            <Checkbox
              color="#0d6efd"
              status={selectedOption === 'light' ? 'checked' : 'unchecked'}
              onPress={() => {
                setSelectedOption('light');
              }}
            />
            <ModalOptionText>Claro</ModalOptionText>
          </ModalOption>
          <ModalOption>
            <Checkbox
              color="#0d6efd"
              status={selectedOption === 'dark' ? 'checked' : 'unchecked'}
              onPress={() => {
                setSelectedOption('dark');
              }}
            />
            <ModalOptionText>Escuro</ModalOptionText>
          </ModalOption>
        </ModalOptions>
      </ModalBody>
    </SafeAreaView>
  )
}

const ModalBody = styled.View`
  background-color: #fff;
  height: 170px; 
  width: 80%;
  border-radius: 30px;
  padding: 10px;
  z-index: 10;
  elevation: 1;
`;
 
const ModalTitle = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
`;

const ModalOption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const ModalOptions = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ModalOptionText = styled.Text`
  font-size: 19px;
  margin-left: 15px;
`;