import 'react-native-gesture-handler';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


import Home from '../screen/Home';
import Downloads from '../screen/Downloads';
import ProfileToEdit from '../screen/ProfileToEdit';
import More from '../screen/More';


const Tab = createBottomTabNavigator();


export const Tabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        backgroundColor: 'black',
        activeTintColor: 'white',
        style: {
          backgroundColor: '#1a1718',
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Downloads}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Em Breve"
        component={Downloads}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-play-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Downloads"
        component={Downloads}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="More"
        component={More}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
