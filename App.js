import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";

// screen imports
import CreateAccount from "./src/screens/CreateAccount";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";

// navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabs = createBottomTabNavigator();

// Screen imports
import Profile from "./src/screens/Profile";
import Explore from "./src/screens/Explore";
import History from "./src/screens/History";
import Favourite from "./src/screens/Favourite";
import About from "./src/screens/About";
import Payment from "./src/screens/Payment";

// icon imports
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNavigatiorTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {},
        tabBarActiveTintColor: "#B53C43",
        tabBarInactiveTintColor: "#6b7280",
      })}
    >
      <BottomTabs.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name="explore"
                size={25}
                color={focused ? "#B53C43" : "#6b7280"}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <BottomTabs.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "3 00",
          },
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign
                name="heart"
                size={20}
                color={focused ? "#B53C43" : "#6b7280"}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />

      <BottomTabs.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Octicons
                name="history"
                size={20}
                color={focused ? "#B53C43" : "#6b7280"}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="account-circle"
                size={25}
                color={focused ? "#B53C43" : "#6b7280"}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};
// main code
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Create Account" component={CreateAccount} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              presentation: "modal",
            }}
          />
          <Stack.Screen
            component={BottomNavigatiorTabs}
            name="Home_Bottom_Navigation_Tabs"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}