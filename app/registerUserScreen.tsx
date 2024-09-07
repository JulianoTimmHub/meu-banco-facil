import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserContext } from '../src/hooks/contexts/useUserContext.hook';
import { SnackbarMessage } from "@/components/snackbar/snackbarMessage";
import { Loading } from "@/components/loading/loading";

export const RegisterUserScreen = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const {
    registerUser,
    registerResults: {
      isLoading,
      statusRegister
    },
    resetUserStatus
  } = useUserContext();

  const schema = yup.object({
    username: yup.string().required("Informe seu nome"),
    email: yup.string().required("Informe seu e-mail"),
    password: yup.string().required("Informe sua senha")
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (statusRegister.color === 'success')
      reset();
  }, [statusRegister, reset])

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerView, isLoading && styles.containerLoading]}>
        <View style={styles.RegisterUserTitleContainer}>
          <Text style={styles.RegisterUserTitle}>Registre sua conta</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputArea}>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={errors.username?.message ? styles.inputError : styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Usuário"
                />
              )}
            />
            {errors.username && <Text style={styles.inputMessageError}>{errors.username?.message}</Text>}
          </View>
          <View style={styles.inputArea}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={errors.email?.message ? styles.inputError : styles.input}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="E-mail"
                />
              )}
            />
            {errors.email && <Text style={styles.inputMessageError}>{errors.email?.message}</Text>}
          </View>
          <View style={styles.inputArea}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[styles.viewPassword, errors.password && styles.viewPasswordError]}>
                  <TextInput
                    style={styles.inputPassword}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Senha"
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    style={styles.iconPassword}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {
                      showPassword ?
                        <Ionicons name="eye-off" color="#0d6efd" size={25} />
                        :
                        <Ionicons name="eye" color="#0d6efd" size={25} />
                    }
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.password && <Text style={styles.inputMessageError}>{errors.password?.message}</Text>}
          </View>

          <TouchableOpacity
            onPress={handleSubmit(registerUser)}
            activeOpacity={0.8}
            style={styles.buttonRegisterUser}
          >
            <Text style={styles.RegisterUserMessage}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!isLoading && statusRegister && (
        <SnackbarMessage
          status={statusRegister}
          resetStatus={resetUserStatus}
        />
      )}
      {isLoading && (
        <Loading />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  containerLoading: {
    opacity: 0.2
  },
  RegisterUserTitleContainer: {
    height: "30%",
    width: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d6efd",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  RegisterUserTitle: {
    fontWeight: "500",
    fontSize: 20,
    color: "#fff"
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    height: '70%',
    width: '100%'
  },
  inputArea: {
    width: "80%"
  },
  input: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#bbbbbb",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 15,
    width: "100%"
  },
  viewPassword: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#bbbbbb",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  inputPassword: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center"
  },
  iconPassword: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center"
  },
  inputError: {
    padding: 15,
    borderRadius: 10,
    borderColor: "#ff0000",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 15,
    width: "100%"
  },
  viewPasswordError: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#ff0000",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  inputMessageError: {
    color: "#ff0000"
  },
  buttonRegisterUser: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#0d6efd",
    alignItems: "center"
  },
  RegisterUserMessage: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  },
});