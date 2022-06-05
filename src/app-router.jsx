import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Components/home";
import { UserDetails } from "./Components/user-details";



const Navigator = createNativeStackNavigator();

export const AppRouter = () => (
  <NavigationContainer>
    <Navigator.Navigator>
      
      <Navigator.Screen           
        name="Home"
        component={Home}
      />
        <Navigator.Screen
        name="Profile"
        component={UserDetails}
      />
      
    </Navigator.Navigator>
  </NavigationContainer>
);
