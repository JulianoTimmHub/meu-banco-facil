import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "./signInScreen";
import { RegisterUserScreen } from "./registerUserScreen";
import { HomeScreen } from "./homeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { RootProvider } from "@/src/contexts/rootContext";
import { UserProvider } from "@/src/contexts/userContext";
import { AuthProvider } from "@/src/contexts/authContext";
import { BottomTabNavigator } from "./bottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <RootProvider>
      <AuthProvider>
        <UserProvider>
          <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RegisterUser"
                component={RegisterUserScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </AuthProvider>
    </RootProvider>
  );
}
