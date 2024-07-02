import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type SignInForm = {
  email: string,
  password: string
}

export const SignIn = ({ navigation }: any) => {
  const schema = yup.object({
    email: yup.string().required("Informe seu e-mail"),
    password: yup.string().required("Informe sua senha")
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleSignIn = (data: SignInForm) => {
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
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="E-mail"
              />
            )}
          />
          {errors.email && <Text style={styles.inputError}>{errors.email?.message}</Text>}
        </View>
        <View style={styles.inputArea}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Senha"
              />
            )}
          />
          {errors.password && <Text style={styles.inputError}>{errors.password?.message}</Text>}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignIn)}
          activeOpacity={0.8}
        >
          <Text style={styles.signInMessage}>Acessar</Text>
        </TouchableOpacity>
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
    height: "40%",
    backgroundColor: "#0d6efd",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeMessage: {
    color: "#fff",
    fontSize: 20
  },
  form: {
    height: "60%",
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
    color: "#ff0000",
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#0d6efd",
    alignItems: "center"
  },
  signInMessage: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  }
})
