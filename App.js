// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
// import AccountTypeSelection from './src/Login/AccountTypeSelection';
// import UserLoginScreen from './src/Login/UserLoginScreen';
// import AdminLoginScreen from './src/Login/UserLoginScreen';


// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="AccountTypeSelection">
//         {/* Account type selection */}
//         <Stack.Screen
//           name="AccountTypeSelection"
//           component={AccountTypeSelection}
//           options={{ headerShown: false }}
//         />
//         {/* Login screen */}
//         <Stack.Screen
//           name="UserLoginScreen"
//           component={UserLoginScreen}
//           options={{ headerShown: false }}
//         />
//         {/* Admin registration screen */}
//         <Stack.Screen
//           name="AdminLoginScreen"
//           component={AdminLoginScreen}
//           options={{ headerShown: false }}
//         />
//         {/* Main app screen */}
//         <Stack.Screen
//           name="BottomTabNavigator"
//           component={BottomTabNavigator}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen/SplashScreen';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import AccountTypeSelection from './src/Login/AccountTypeSelection';
import UserLoginScreen from './src/Login/UserLoginScreen';
// import AdminLoginScreen from './src/Login/AdminLoginScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* Splash screen */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {/* Account type selection */}
        <Stack.Screen
          name="AccountTypeSelection"
          component={AccountTypeSelection}
          options={{ headerShown: false }}
        />
        {/* Login screens */}
        <Stack.Screen
          name="UserLoginScreen"
          component={UserLoginScreen}
          options={{ headerShown: false }}
        />
        {/* Login screens Admin */}
        {/* <Stack.Screen */}
        {/* //   name="AdminLoginScreen" */}
        {/* //   component={AdminLoginScreen} */}
        {/* //   options={{ headerShown: false }} */}
        {/* // />

        {/* Main app screen */}
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
