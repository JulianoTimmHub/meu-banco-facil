import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Ionicons } from "@expo/vector-icons";
import { useAuthContext } from '../src/hooks/contexts/useAuthContext.hook';
import { SnackbarMessage } from "@/components/snackbar/snackbarMessage";
import { Loading } from "@/components/loading/loading";
import { useUserContext } from "@/src/hooks/contexts/useUserContext.hook";

export const SignInScreen = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const {
    signIn,
    signInResults: {
      isLoading,
      statusSignIn
    },
    resetAuthStatus
  } = useAuthContext();

  const {
    resetUserStatus
  } = useUserContext();

  const schema = yup.object({
    email: yup.string().required("Informe seu e-mail"),
    password: yup.string().required("Informe sua senha")
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const openRegisterUserScreen = () => {
    resetUserStatus();
    navigation.navigate("RegisterUser")
  }

  useEffect(() => {
    if (!isLoading && statusSignIn.color === 'success') {
      reset();
      navigation.navigate("BottomTabNavigator");
    }
  }, [isLoading, statusSignIn, navigation, reset]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.containerView, isLoading && styles.containerLoading]}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeMessage}>Bem vindo ao login</Text>
        </View>
        <View style={styles.form}>
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
          <View style={styles.buttonsCotainer}>
            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={handleSubmit(signIn)}
              activeOpacity={0.8}
            >
              <Text style={styles.signInMessage}>Acessar</Text>
            </TouchableOpacity>
            <View>
              <Text> Ou </Text>
            </View>
            <TouchableOpacity
              style={styles.buttonRegisterUser}
              onPress={() => openRegisterUserScreen()}
              activeOpacity={0.5}
            >
              <Text style={styles.RegisterUserMessage}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {!isLoading && statusSignIn.color !== "success" && (
        <SnackbarMessage
          status={statusSignIn}
          resetStatus={resetAuthStatus}
        />
      )}
      {isLoading && (
        <Loading />
      )}
    </SafeAreaView>
  );
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
  welcome: {
    height: "30%",
    width: "100%",
    backgroundColor: "#0d6efd",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeMessage: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 20
  },
  form: {
    height: "70%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
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
    fontSize: 15
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
  inputError: {
    padding: 15,
    borderRadius: 10,
    borderColor: "#ff0000",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 15
  },
  inputMessageError: {
    color: "#ff0000",
  },
  buttonsCotainer: {
    width: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  buttonSignIn: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#0d6efd",
    alignItems: "center"
  },
  signInMessage: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  },
  buttonRegisterUser: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#0d6efd",
    borderWidth: 2,
    alignItems: "center"
  },
  RegisterUserMessage: {
    color: "#0d6efd",
    fontSize: 15,
    fontWeight: "600"
  }
})
