import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './homeScreen';
import { AccountsScreen } from './accountsScreen';
import { GoalScreen } from './goalsScreen';
import { Ionicons } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import { StyleSheet } from 'react-native';
import { MenuScreen } from './menuScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: 80,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#ebe5e5"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Início',
          tabBarLabelStyle: styles.iconLabel,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
                style={focused ? styles.iconOutline : styles.icon}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Contas',
          tabBarLabelStyle: styles.iconLabel,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'copy' : 'copy-outline'}
                size={size}
                color={color}
                style={focused ? styles.iconOutline : styles.icon}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Goals"
        component={GoalScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Metas',
          tabBarLabelStyle: styles.iconLabel,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <SimpleLineIcons 
                name="graph"
                size={size}
                color={color}
                style={focused ? styles.iconOutline : styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Menu',
          tabBarLabelStyle: styles.iconLabel,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'menu' : 'menu-outline'}
                size={size}
                color={color}
                style={focused ? styles.iconOutline : styles.icon}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
  iconOutline: {
    backgroundColor: 'rgba(13, 110, 253, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  iconLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5
  }
});