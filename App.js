import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, LogBox  } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DarkTheme, useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Actions from './components/Actions'
import  Paires from './components/Paires'
import Transactions from './components/Transactions'
import Market from './components/Market'


LogBox.ignoreLogs(['Reanimated 2', 'Remote debugger']);

function HomeScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={{ height: 80 }}>

      </View>
      <View>
        <Actions/>
      </View>
      <View>
        <Paires/>
      </View>
    </ScrollView>
  );
}

function MarketScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Market/>
    </View>
  );
}

function TransactionsScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Transactions/>
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
        options={{ title: 'MCapital' }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarLabel: 'Marché',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="swap-horizontal" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={size} />
          ),
        }}
        />
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
