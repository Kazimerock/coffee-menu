import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FavoritesScreen from "./components/FavoritesScreen";
import OrderScreen from "./components/OrderScreen";

export default function App() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={false}
        initialRouteName="Home"
        activeColor="brown"
        inactiveColor="white"
        barStyle={{ height: 70, backgroundColor: "#C68B59"}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Likes"
          component={FavoritesScreen}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarLabel: "Order",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shopping-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
