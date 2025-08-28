import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ActivitiesProvider } from './context/ActivitiesContext';
import HomeScreen from './screens/HomeScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import ActivityDetails from './screens/ActivityDetails';
import NewActivityScreen from './screens/NewActivityScreen';
import MembersScreen from './screens/MembersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f3f4f6',
    primary: '#0ea5a4',
    card: '#ffffff',
    text: '#0f172a',
    border: '#e6e9ee',
  },
};

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Atividades" component={ActivitiesScreen} />
      <Tab.Screen name="Membros" component={MembersScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ActivitiesProvider>
      <NavigationContainer theme={MyTheme}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen name="App" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Detalhes" component={ActivityDetails} options={{ title: 'Detalhes da Atividade' }} />
          <Stack.Screen name="NovaAtividade" component={NewActivityScreen} options={{ title: 'Criar Atividade' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActivitiesProvider>
  );
}