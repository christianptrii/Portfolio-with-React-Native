import React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import PortfoliosScreen from './screens/PortfoliosScreen';
import TestimonialsScreen from './screens/TestimonialsScreen';
import ContactScreen from './screens/ContactScreen';

const Tabs = AnimatedTabBarNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tabs.Navigator
        tabBarOptions={{
          activeBackgroundColor:'#a425ff'
        }}
        appearance={{
          tabBarBackground: '#1C1427'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Services':
                iconName = 'person';
                break;
              case 'Portfolio':
                iconName = 'briefcase';  // Adjust icon if needed
                break;
              case 'Testimonials':
                iconName = 'chatbox';
                break;
              case 'Contact':
                iconName = 'call';
                break;
              default:
                iconName = 'home';
            }
    
            return <Ionicons name={iconName} size={size || 24} color={focused ? color : '#a425ff'} />;
          },
        })}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Services" component={ServicesScreen} />
        <Tabs.Screen name="Portfolio" component={PortfoliosScreen} />
        <Tabs.Screen name="Testimonials" component={TestimonialsScreen} />
        <Tabs.Screen name="Contact" component={ContactScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
