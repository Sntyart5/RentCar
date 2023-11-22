import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreateCar } from "./CreateCar";
import { ListCars } from "./ListCars";
import { ReturnCar } from "./ReturnCar";
import {MaterialIcons}from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false, 
          tabBarInactiveTintColor: 'red', 
          tabBarActiveTintColor: 'orange', 
          tabBarActiveBackgroundColor: 'black',
        }}
      >
        <Tab.Screen
          name="CreateCar"
          component={CreateCar}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="home"
                size={size}
                color={focused ? color : 'red'} // Cambia el color si está activo o inactivo
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={ListCars}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="settings"
                size={size}
                color={focused ? color : 'red'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ReturnCar}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="chat"
                size={size}
                color={focused ? color : 'red'}
              />
            ),
          }}
        />

      </Tab.Navigator>
    );
  }