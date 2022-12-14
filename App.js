/*  WorkAround App.js

    desc: Should serve as a home screen for entire app.
    Will have navigation to Settings.js, Edit.js, Profile.js &
    Add.js.

    Main components:
    - header with User Icon, Notification Bell, & Logo
    - schedule window with events repeating on proper days,
    as well as an add icon bottom right of schedule.
    - footer with Settings Icon & Share Icon (and maybe home)

  Programmed by:
  - Tanvi Kulkarni
  - Connor Broekhuizen
  - Braden Lint
  - Logan Humphrey
*/

import React, { useState, useEffect } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  DrawerLayoutAndroidBase,
} from "react-native";
import EventCalendar from "react-native-events-calendar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
//Importing all Screens Needed
import SettingsScreen from "./screens/settings";
import ProfileScreen from "./screens/profile";
import AddScreen from "./screens/add";
import EditScreen from "./screens/edit";
import NotificationsScreen from "./screens/notifications";
import DeleteScreen from './screens/delete';
import AboutScreen from './screens/about';

/*  A space to declare global variables */
let primary = "#F38C00"; //  default primary color     (orange)
let secondary = "#0167AB"; //  default secondary color   (blue)
let bgColor = "white"; //  default background color  (white in LM) (black in DM)
let textColor = "black"; //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get("window").width; //full height of screen
const windowHeight = Dimensions.get("window").height; //full width of screen
const Stack = createNativeStackNavigator(); //stack declaration
const Tab = createBottomTabNavigator();

/**
 * A block of function declarations for future use:
 * - to be used for each icon to be clicked & redirect
 * to according pages. (e.g. Add button -> Add Page)
 */

/* function: goNotification      notification bell icon clicked -> notification popup */
function goNotification() {
  alert(
    "Your Notifications are now turned off"
  );
}
/* function: goAdd               add icon clicked -> add event page/popup             */
function goAdd() { }
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
        <View >
          <Image style={{
            height: 85,
            width: 160,
            left: 100,
            top: -50,
          }} source={require('./Icons/workAround.png')} />
        </View>
      </View>
    </View>
  );
};


//takes in date obj and startTime and returns string in format YYYY-MM-DD TT:TT:TT 
//where date portion is drom date and time is from startTime
function formatedDate(date, startTime) {
  var month = date.getMonth() + 1; //because the month is given as an index
  //for some reason, event calendar needs all single digit values to have a 0 infront, hence all the offsetter values
  var zeroOffsetter = '';
  var dayOffsetter = '';
  var monthOffsetter = '';
  var monthStr = month.toString();
  var day = date.getDate();
  if (startTime[1] == ':') { zeroOffsetter = '0'; }
  if (monthStr[1] == ':') { monthOffsetter = '0'; }
  if (day < 10) { dayOffsetter = '0'; }
  return date.getFullYear().toString() + '-' + monthOffsetter + monthStr + '-' + dayOffsetter + day.toString() + ' ' + zeroOffsetter + startTime + ':00';
}

//returns {title, summary (location), startTime, endTime}
//params: values: same as values in getWeekly(), day: int for which day (monday is 1, tuesday is 2 etc), start/endTime in format 'TT:TT:TT'
function eventObjMaker(values, day, startTime, endTime) {
  const current = new Date().getTime() - 18000000;
  const lastSunday = current - (86400000 * new Date(current).getDay());//gets date for last sunday
  var date = new Date(lastSunday + day * 86400000);
  const hold = {
    title: values[1],
    summary: values[5],
    start: formatedDate(date, startTime),
    end: formatedDate(date, endTime)
  };
  return hold;
}
//takes in [{eventID, name, startTime, endTime, dayDesignation, location, eventLead, scheduleID}]
//returns weekly classes of [{title, summary (location), startTime, endTime}] STARTING ON THE LAST MONDAY
function getWeekly(classes) {
  var finalClasses = [];
  const regex = /(.*)-(.*)-(.*) (.*)/; //regex to parse startTime and endTime of elements of each course
  for (var i = 0; i < classes.length; i++) {
    var values = Object.values(classes[i]); // [eventID, name, startTime, endTime, dayDesignation, location, eventLead, scheduleID]
    var dayDes = values[4];
    // var startTimeData = [...values[2].matchAll(regex)][0]; // [original string, year, month, date, time]
    // var endTimeData = [...values[3].matchAll(regex)][0]; // [original string, year, month, date, time]
    if (dayDes.includes("M")) { finalClasses.push(eventObjMaker(values, 1, values[2], values[3])); }
    if (dayDes.includes("W")) { finalClasses.push(eventObjMaker(values, 3, values[2], values[3])); }
    if (dayDes.includes("F")) { finalClasses.push(eventObjMaker(values, 5, values[2], values[3])); }
    if (dayDes.includes("TH")) {
      if (dayDes.includes("TWTH") || dayDes.includes("TTH")) {
        finalClasses.push(eventObjMaker(values, 2, values[2], values[3]));
        finalClasses.push(eventObjMaker(values, 4, values[2], values[3]));
      }
      else { finalClasses.push(eventObjMaker(values, 4, values[2], values[3])); }
    }
    else {
      if (dayDes.includes("T")) { finalClasses.push(eventObjMaker(values, 2, values[2], values[3])); }
    }
    if (dayDes.includes("SU")) {
      if (dayDes.includes("SSU")) { finalClasses.push(eventObjMaker(values, 6, values[2], values[3])); finalClasses.push(eventObjMaker(values, 7, values[2], values[3])); }
      else { finalClasses.push(eventObjMaker(values, 7, values[2], values[3])); }
    }
    else {
      if (dayDes.includes("S")) { finalClasses.push(eventObjMaker(values, 6, values[2], values[3])); }
    }
  }
  return finalClasses;
}
{/* HOME SCREEN FUNCTION */ }

/**
 * HomeScreen function
 * @param {*} param0
 * @returns GUI outputted with:
 *  - workAround logo
 *  - schedule with events
 *  - share & settings icons
 */
function HomeScreen({ navigation }) {
  let primary = "#F38C00"; //  default primary color     (orange)
  let secondary = "#0167AB"; //  default secondary color   (blue)
  let bgColor = "white"; //  default background color  (white in LM) (black in DM)
  let textColor = "black"; //  default textcolor         (black in LM) (white in DM)
  const windowWidth = Dimensions.get("window").width; //full height of screen
  const windowHeight = Dimensions.get("window").height; //full width of screen
  {/* Back up hard coded classes list
        ------------------------------*/}
  const courses = [
    {
      title: "CS-108",
      summary: "SB 223",
      start: "2022-11-18 08:30:00",
      end: "2022-11-18 09:30:00",
    },
    {
      title: "MATH-171",
      summary: "NH 159",
      start: "2022-11-18 11:00:00",
      end: "2022-11-18 11:50:00",
    },
    {
      title: "ENGL-101",
      summary: "CFAC 242",
      start: "2022-11-18 12:00:00",
      end: "2022-11-18 12:50:00",
    },
    {
      title: "REL-121",
      summary: "HH 133",
      start: "2022-11-18 14:00:00",
      end: "2022-11-18 14:50:00",
    },
    {
      title: "CS-195",
      summary: "SB 010",
      start: "2022-11-18 15:00:00",
      end: "2022-11-18 15:50:00",
    },
  ];


  //testing client->server
  const student = "Logan Humphrey";
  const semesterYear = "2023 Spring";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://workaroundservice.herokuapp.com/' + student + '/' + semesterYear)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  //testing client->server
  const editEvent = (event) => {
    navigation.navigate('Edit')
  };


  return (
    // homeScreen view of schedule + icons
    <View>
      <View style={styles.calendar}>
        <EventCalendar
          eventTapped={editEvent} // Function on event press
          events={getWeekly(data)} // Passing the Array of event
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
      <HomeStack.Screen name="Edit" component={EditStackScreen}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
};


//Edit Screen Stack- Home Screen that takes you to delete page
const EditStack = createNativeStackNavigator();

function EditStackScreen() {
  return (
    <EditStack.Navigator>
      <HomeStack.Screen name="Edit" component={EditScreen} options={{
        headerShown: false
      }} />
      <HomeStack.Screen name="Delete" component={DeleteScreen}
        options={{
          headerShown: false
        }}
      />
    </EditStack.Navigator>
  );
};


//Settings Screen Stack- Home Screen that takes you to about page
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <EditStack.Navigator>
      <HomeStack.Screen name="Settings" component={SettingsScreen} options={{
        headerShown: false
      }} />
      <HomeStack.Screen name="About" component={AboutScreen}
        options={{
          headerShown: false
        }}
      />
    </EditStack.Navigator>
  );
};

{/* START of main App function- includes tab navigator
        ------------------------------*/}

function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
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
                color={focused ? '#0167AB' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} />


        {/*Settings Screen Tab*/}
        <Tab.Screen name={"Settings"} component={SettingsStackScreen} options={{
          headerTitle: () => <Header />,
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="cog"
                size={30}
                color={focused ? '#0167AB' : 'gray'}
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
                color={focused ? '#0167AB' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} ></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={NotificationsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="bell"
                size={30}
                color={notificationsEnabled ? '#0167AB' : 'gray'}
                onPress={() => {
                  // Update the state variable when the button is pressed
                  setNotificationsEnabled(!notificationsEnabled);
                  if (!notificationsEnabled) {
                    alert("Notifications have been enabled");
                  } else {
                    alert("Notifications have been disabled");
                  }
                }}

              ></FontAwesome5>
            </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer >

  );
}


export default App;
