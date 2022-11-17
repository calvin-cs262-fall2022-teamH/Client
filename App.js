/*  WorkAround App.js

  Programmed by:
  - Tanvi Kulkarni
  - Connor Broekhuizen
  - Braden Lint
  - Logan Humphrey
*/
import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";
import EventCalendar from "react-native-events-calendar";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import EventRegister from 'react-native-event-listeners';
//Importing all Screens Needed
import SettingsScreen from "./screens/settings";
import ProfileScreen from "./screens/profile";
import AddScreen from "./screens/add";
import Options from "./screens/options";
import Delete from "./screens/delete";
import EditScreen from "./screens/Edit";


/*  A space to declare global variables */
let primary = "#F38C00"; //  default primary color     (orange)
let secondary = "#0167AB"; //  default secondary color   (blue)
let bgColor = "white"; //  default background color  (white in LM) (black in DM)
let textColor = "black"; //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get("window").width; //full height of screen
const windowHeight = Dimensions.get("window").height; //full width of screen
const Stack = createNativeStackNavigator(); //stack declaration

const Tab = createBottomTabNavigator();

/* function: goHome              workAround logo clicked -> homeScreen                */
function goHome() { }
/* function: goSettings          settings icon clicked -> settings page               */
function goSettings() { }
/* function: goShare             share icon clicked -> share popup                    */
function goShare() { }
/* function: goProfile           profile icon clicked -> profiles page                */
function goProfile() { }
/* function: goNotification      notification bell icon clicked -> notification popup */
function goNotification() {
  alert(
    "Your Notifications are now turned off"
  );
}
/* function: goAdd               add icon clicked -> add event page/popup             */
function goAdd() { }
/* function: goOptions      add event clicked -> event page */
function goOptions() { }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
  },
});


//Header Function
function Header() {
  return (
    <View>
      {/* -----------------------------------------------------------------
      START of Header Toolbar (with profile, notification bell, and logo) */}
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>

        {/* workAround logo / home button */}
        <TouchableOpacity
          style={{ position: "absolute" }} onPress={goHome}>
          <Image style={{
            height: 85,
            width: 160,
            left: 40,
            top: -50,
          }} source={require('./Icons/workAround.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};



{/* HOME SCREEN FUNCTION */ }
function HomeScreen({ navigation }) {
  let primary = "#F38C00"; //  default primary color     (orange)
  let secondary = "#0167AB"; //  default secondary color   (blue)
  let bgColor = "white"; //  default background color  (white in LM) (black in DM)
  let textColor = "black"; //  default textcolor         (black in LM) (white in DM)
  const windowWidth = Dimensions.get("window").width; //full height of screen
  const windowHeight = Dimensions.get("window").height; //full width of screen
  const [events, setEvents] = useState([
    {
      title: "CS-108",
      summary: "SB 223",
      start: "2022-11-05 08:30:00",
      end: "2022-11-05 09:30:00",
    },
    {
      title: "MATH-171",
      summary: "NH 159",
      start: "2022-11-05 11:00:00",
      end: "2022-11-05 11:50:00",
    },
    {
      title: "ENGL-101",
      summary: "CFAC 242",
      start: "2022-11-05 12:00:00",
      end: "2022-11-05 12:50:00",
    },
    {
      title: "REL-121",
      summary: "HH 133",
      start: "2022-11-05 14:00:00",
      end: "2022-11-05 14:50:00",
    },
    {
      title: "CS-195",
      summary: "SB 010",
      start: "2022-11-03 15:00:00",
      end: "2022-11-03 15:50:00",
    },
  ]);

  //On Click of event showing alert from here
  const editEvent = (event) => {
    navigation.navigate('Edit')
  };

  return (
    // homeScreen view of schedule + icons
    <View>
      <View style={styles.calendar}>
        <EventCalendar
          eventTapped={editEvent} // Function on event press
          events={events} // Passing the Array of event
          width={windowWidth} // Container width
          //number of dates rendered before & after initDate (def 30 before, 29 after)
          size={60} //initDate defaulting to today
          scrollToFirst // Scroll to first event of the day (default true)
        />
      </View>
      {/* END of Schedule on homeScreen
        ------------------------------*/}
    </View>
  );
}

//Home Screen Stack- Home Screen that takes you to options
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Schedule" component={HomeScreen} options={{
        headerShown: false
      }} />
      <HomeStack.Screen name="Edit" component={EditScreen}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
};




function App() {

  {/*State For Theme Change Across The App*/ }
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setTheme(data);
      }
    );
    return () => {
      EventRegister.removeEventListner(eventListener);
    };
  });

  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          // Floating Tab Bar...
          style: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10
            },
            paddingHorizontal: 20,
          }
        }}

      >

        {/*Home Screen Tab*/}
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          headerTitle: () => <Header />,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }} >
              <FontAwesome5
                name="home"
                size={30}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} />


        {/*Settings Screen Tab*/}
        <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="cog"
                size={30}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} />

        <Tab.Screen name={"Add a Class"} component={AddScreen} options={{
          headerTitle: () => <Header />,
          tabBarIcon: () => (
            <View style={{
              width: 55,
              height: 55,
              backgroundColor: 'orange',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: Platform.OS == "android" ? 50 : 30
            }}>
              <Image source={require('./Icons/add.png')} style={{
                width: 22,
                height: 22,
                tintColor: 'white',
              }}></Image>
            </View>
          )
        }}></Tab.Screen>

        {/*Profile Screen Tab*/}
        <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={30}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} ></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={EditScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="bell"
                size={30}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer >

  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80; // Horizontal Padding = 20...
  return width / 5; // Total five Tabs...
}



export default App;
