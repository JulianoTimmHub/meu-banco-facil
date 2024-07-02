import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SignInForm = {
  email: string,
  password: string
}

export const SignInScreen = ({ navigation }: any) => {
  const schema = yup.object({
    email: yup.string().required("Informe seu e-mail"),
    password: yup.string().required("Informe sua senha")
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const signIn = (data: SignInForm) => {
    console.log(data)
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
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
              <TextInput
                style={errors.password?.message ? styles.inputError : styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Senha"
              />
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
            style={styles.buttonCreateAccount}
            onPress={() => navigation.navigate("CreateAccount")}
            activeOpacity={0.5}
          >
            <Text style={styles.createAccountMessage}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff"
  },
  welcome: {
    height: "30%",
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
  buttonCreateAccount: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#0d6efd",
    borderWidth: 2,
    alignItems: "center"
  },
  createAccountMessage: {
    color: "#0d6efd",
    fontSize: 15,
    fontWeight: "600"
  }
})
