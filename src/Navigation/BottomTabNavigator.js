// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../HomeScreen/MainScreen';
// import GamesNearbyScreen from '../GamesNearbyScreen/GamesNearbyScreen';
// import HistoryScreen from '../HistoryScreen/HistoryScreen';
// import NotificationsScreen from '../NotificationsScreen/NotificationsScreen';
// import AccountScreen from '../AccountScreen/AccountScreen';
// import FutsalListScreen from '../Football/FutsalListScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// export default function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false, // Hides the header for all screens
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Booking History') {
//             iconName = focused ? 'time' : 'time-outline';
//           } else if (route.name === 'Games Nearby') {
//             iconName = focused ? 'trophy' : 'trophy-outline';
//           } else if (route.name === 'Notifications') {
//             iconName = focused ? 'notifications' : 'notifications-outline';
//           } else if (route.name === 'Account') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           // Return the icon component
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'grey',
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Booking History" component={HistoryScreen} />
//       <Tab.Screen name="Games Nearby" component={GamesNearbyScreen} />
//       <Tab.Screen name="Notifications" component={NotificationsScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//       <Tab.Screen 
//         name="FutsalList"
//         component={FutsalListScreen}
//         options={{ tabBarButton: () => null }} // Hide from the tab bar
//         />
//     </Tab.Navigator>
//   );
// }




import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

// Importing screen components
import MainScreen from '../HomeScreen/MainScreen';
import FutsalList from '../SportLists/FutsalList';
import BasketballCourtsList from '../SportLists/BasketballCourtsList';
import CricketGroundsList from '../SportLists/CricketGroundsList';
import BadmintonCourtsList from '../SportLists/BadmintonCourtsList';
import GamesNearbyScreen from '../GamesNearbyScreen/GamesNearbyScreen';
import HistoryScreen from '../HistoryScreen/HistoryScreen';
import NotificationsScreen from '../NotificationsScreen/NotificationsScreen';
import AccountScreen from '../AccountScreen/AccountScreen';

//Details Screem
import Detail from '../SportLists/Details/Detail';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name='FutsalList' component={FutsalList} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="BasketballCourtsList" component={BasketballCourtsList} />
      <Stack.Screen name="CricketGroundsList" component={CricketGroundsList} />
      <Stack.Screen name="BadmintonCourtsList" component={BadmintonCourtsList} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Booking History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Games Nearby') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Booking History" component={HistoryScreen} />
      <Tab.Screen name="Games Nearby" component={GamesNearbyScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>

  );
}
<ScrollView></ScrollView>