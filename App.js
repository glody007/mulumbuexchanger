import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function MarketScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Market</Text>
    </View>
  );
}

function TransactionsScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Transactions</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MainStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Main' }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
}

function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Profile</Text>
    </View>
  );
}

function PayementScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Methode de paiement</Text>
    </View>
  );
}

function ParametresScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Parametres</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={ DarkTheme }>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="Methode de Paiement" component={PayementScreen} />
        <Drawer.Screen name="Parametres" component={ParametresScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
