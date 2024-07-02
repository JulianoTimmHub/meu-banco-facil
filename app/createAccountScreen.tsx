import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type CreateAccountForm = {
  username: string,
  email: string,
  password: string
}

export const CreateAccountScreen = ({ navigation }: any) => {  
  const schema = yup.object({
    username: yup.string().required("Informe seu nome"),
    email: yup.string().required("Informe seu e-mail"),
    password: yup.string().required("Informe sua senha")
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const createAccount = (data: CreateAccountForm) => {
    console.log(data)
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.createAccountTitleContainer}>
        <Text style={styles.createAccountTitle}>Registre sua conta</Text>
      </View>
      <View style={styles.form} >
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

        <TouchableOpacity
          onPress={handleSubmit(createAccount)}
          activeOpacity={0.8}
          style={styles.buttonCreateAccount}
        >
          <Text style={styles.createAccountMessage}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  createAccountTitleContainer: {
    height: "30%",
    width: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d6efd",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  createAccountTitle: {
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
  buttonCreateAccount: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#0d6efd",
    alignItems: "center"
  },
  createAccountMessage: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  },
});