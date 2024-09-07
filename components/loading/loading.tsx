import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const Loading = ({ }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color="#0d6efd"
        size={60}
      />
      <Text style={styles.message}>Carregando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: 'absolute'
  },
  message: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: 'center'
  }
});