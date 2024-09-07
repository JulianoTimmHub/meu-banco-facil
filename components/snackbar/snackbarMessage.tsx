import { useEffect, useState } from "react"
import { StyleSheet, Text } from "react-native";
import { Snackbar } from 'react-native-paper';

export const SnackbarMessage = ({ status, resetStatus }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (status.message)
      setOpen(true);
  }, [status.message, setOpen])

  const closeSnackbar = (): void => {
    setOpen(false);
    resetStatus();
  }

  return (
    <Snackbar
      visible={open}
      onDismiss={() => closeSnackbar()}
      duration={4000}
      style={
        status.color === "error" ? styles.errorColor :
          status.color === "success" ? styles.successColor :
            styles.defaultColor
      }
    >
      <Text style={styles.message}>
        {status.message}
      </Text>
    </Snackbar>
  )
}

const styles = StyleSheet.create({
  defaultColor: {
    backgroundColor: "transparent"
  },
  errorColor: {
    backgroundColor: "#ff0000"
  },
  successColor: {
    backgroundColor: "#28a745"
  },
  message: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  }
});