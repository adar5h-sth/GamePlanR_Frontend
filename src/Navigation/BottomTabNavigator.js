import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native'; // Import CommonActions

// Import screen components
import MainScreen from '../HomeScreen/MainScreen';
import FutsalList from '../SportLists/FutsalList';
import BasketballCourtsList from '../SportLists/BasketballCourtsList';
import CricketGroundsList from '../SportLists/CricketGroundsList';
import BadmintonCourtsList from '../SportLists/BadmintonCourtsList';
import GamesNearbyScreen from '../GamesNearbyScreen/GamesNearbyScreen';
import BookingHistory from '../HistoryScreen/BookingHistory';
import NotificationsScreen from '../NotificationsScreen/NotificationsScreen';
import AccountScreen from '../AccountScreen/AccountScreen';

// Other Screens
import Details from '../SportLists/Details/Details';
import PaymentScreen from '../SportLists/Details/PaymentScreen';
import BookingConfirmationScreen from '../SportLists/Details/BookingConfirmationScreen';
import PayOnArrival from '../SportLists/Details/PayOnArrival';
import RequestNowConfirmation from '../SportLists/Details/RequestNowConfirmation';
import GameDetailsScreen from '../GamesNearbyScreen/GameDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Games Nearby
function GamesNearbyStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GamesNearbyScreen" component={GamesNearbyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GameDetails" component={GameDetailsScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FutsalList" component={FutsalList} />
      <Stack.Screen name="BasketballCourtsList" component={BasketballCourtsList} />
      <Stack.Screen name="CricketGroundsList" component={CricketGroundsList} />
      <Stack.Screen name="BadmintonCourtsList" component={BadmintonCourtsList} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: 'Payment' }} />
      <Stack.Screen name="BookingConfirmationScreen" component={BookingConfirmationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RequestNowConfirmation" component={RequestNowConfirmation} options={{ headerShown: false }} />
      <Stack.Screen name="PayOnArrival" component={PayOnArrival} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            const resetAction = CommonActions.reset({
              index: 0,
              routes: [{ name: 'MainScreen' }],
            });
            navigation.dispatch(resetAction); // Reset to MainScreen
          },
        })}
      />
      <Tab.Screen name="Booking History" component={BookingHistory} />
      <Tab.Screen name="Games Nearby" component={GamesNearbyStackNavigator} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
