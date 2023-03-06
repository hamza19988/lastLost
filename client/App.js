import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { AntDesign } from 'react-native-vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome5Brands } from 'react-native-vector-icons';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';



import {
  DashboardScreen,
  HomeAdminScreen,
  StaffDashboardScreen,
  AbsenceGlobalScreen,
  LoginScreen,
  HomeTechScreen,
  TeamScreen,
  TimeManagementScreen,
  QualityDasshboardScreen,
  ScheduleInternchangeScreen,
  VacationScreen,
  UserAbsenceScreen,
  WelcomeScreen,
  UserHomeScreen,
  TransportScreen,
  MyscheduleScreen,
  AbsenceGlobaladminScreen,
  Schedulerequestscreen,
} from "./src/screens/Index";
import DrawerItems from "./src/Components/DrawerItems";
import { View } from "react-native";
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import Savoir from "./src/screens/Savoir";
import NextWeekSchedule from "./src/screens/NextWeekSchedule";
import wellnessScreen from "./src/screens/Wellness";
import Opsscreen from "./src/OPs";
import Trasporthome from "./src/screens/Trasporthome";
import PickupScreen from "./src/screens/Pickup";
import RidetoScreen from "./src/screens/Rideto";
import TransporthomeScreen from "./src/screens/Trasporthome";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        default: "Welcome",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Savoir" component={Savoir} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Manager" component={Manager} />
      <Stack.Screen name="NextWeekSchedule" component={NextWeekSchedule} />
      <Stack.Screen name="Transporteur" component={Transporteur} />
    </Stack.Navigator>
  );
}
function User() {
  return (
    
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          paddingTop: 100,
          width: 280,
        },
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: '#8E8E93',
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
      >
      <Drawer.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Quality Dashboard"
        component={QualityDasshboardScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
       <Drawer.Screen
        name="My Schedule"
        component={MyscheduleScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="calendar-day"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Schedule Exchange"
        component={ScheduleInternchangeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="exchange-alt"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Vacation Request"
        component={VacationScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="cloud-sun"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="My Absence"
        component={UserAbsenceScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="list-alt"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
            
          ),
        }}
      />
     
      <Drawer.Screen
      name="Book My Transport"
      component={TransportScreen}
      options={{
      drawerIcon: ({ focused, color, size }) => (
        <Ionicons
          name={focused ? 'bus' : 'bus-outline'}
          size={size}
          color={color}
      />
      
    ),
    
  }}
/>
<Drawer.Screen
  name="Wellness Bot"
  component={wellnessScreen}
  options={{
    drawerIcon: ({ focused, size }) => (
      <Image
        source={require('./assets/images/Welly.gif')}
        style={{ width: 30, height: 50 }}
      />
    ),
  }}
/>

    </Drawer.Navigator>
  );
}

function Admin() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          paddingTop: 65,
          width: 290,
        },
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
      contentContainerStyle={{ flex: 1 }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeAdminScreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen 
      name="Staff Dashboard" 
      component={DashboardScreen} 
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <AntDesign
            name="piechart"
            size={size}
            color={color}
          />

    ),
  }}
/>
      <Drawer.Screen 
       name="Ops Upper Staff" 
        component={StaffDashboardScreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesomeIcon
              icon={faUserTie}
              size={size}
              color={color}
            />
          ),
  }}
/>
      <Drawer.Screen 
        name="Global Absence" 
        component={AbsenceGlobaladminScreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign
              name="areachart"
              size={size}
              color={color}
            />
            
            
          ),
        }}
      />
      <Drawer.Screen 
        name="Asus" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/asus.png')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
      <Drawer.Screen 
        name="Bytedance" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, size }) => (
            <Image
        source={require('./assets/images/bytedance.png')}
        style={{ width: size, height: size }}
      />
          
          ),
        }}
      />
      <Drawer.Screen 
        name="C-Discount " 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/cdiscount.png')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
     <Drawer.Screen 
  name="HP" 
  component={Opsscreen} 
  options={{
    drawerIcon: ({ focused, color, size }) => (
      <Image
        source={require('./assets/images/hp.png')}
        style={{ width: size, height: size }}
      />
    ),
  }}
/>

      <Drawer.Screen 
        name="HP canada" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/hp.png')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
      <Drawer.Screen 
        name="Hub Telecom" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/hub.jpg')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
      <Drawer.Screen 
        name="Kiwi" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/kiwi.png')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
      <Drawer.Screen 
        name="Orange Pro" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/orange.jpg')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
      <Drawer.Screen 
        name="Sirius" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/siruis.png')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
      <Drawer.Screen 
        name="Xerox" 
        component={Opsscreen} 
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Image
        source={require('./assets/images/xe.png')}
        style={{ width: size, height: size }}
      />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
}


function Manager() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          paddingTop: 70,
          width: 290,
        },
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
      contentContainerStyle={{ flex: 1 }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeTechScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Team"
        component={TeamScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Quality Dashboard"
        component={QualityDasshboardScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'bar-chart' : 'bar-chart-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
       <Drawer.Screen
        name="Absence Global"
        component={AbsenceGlobalScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? 'chart-area' : 'chart-area'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Vacation Request"
        component={TimeManagementScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="cloud-sun"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Schedule Request"
        component={Schedulerequestscreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={'calendar-day'}
              size={size}
              color={color}
            />
          ),
        }}
      />
     
      <Drawer.Screen
        name="Transport"
        component={TransportScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'bus' : 'bus-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      
      
    </Drawer.Navigator>
  );
}
function Transporteur() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          paddingTop: 70,
          width: 290,
        },
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
      contentContainerStyle={{ flex: 1 }}
    >
      <Drawer.Screen
        name="Home"
        component={TransporthomeScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Give a Ride"
        component={RidetoScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="bus-alt"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pick UP"
        component={PickupScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="bus"
              size={size}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
  
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}
