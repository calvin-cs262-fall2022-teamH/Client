/*  WorkAround App.js

  Programmed by:
  - Tanvi Kulkarni
  - Connor Broekhuizen
  - Braden Lint
  - Logan Humphrey
*/
import React, { useState } from 'react';
import { Animated, Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRef } from 'react';
import SettingsScreen from '../screens/Settings';
import EventCalendar from 'react-native-events-calendar';
import Delete from './screens/delete';




/*  A space to declare global variables */
let primary = "#F38C00";    //  default primary color     (orange)
let secondary = "#0167AB";    //  default secondary color   (blue)
let bgColor = "white";      //  default background color  (white in LM) (black in DM)
let textColor = "black";      //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get('window').width;         //full height of screen
const windowHeight = Dimensions.get('window').height;       //full width of screen
const Stack = createNativeStackNavigator();                 //stack declaration

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
function goNotification() { }
/* function: goAdd               add icon clicked -> add event page/popup             */
function goAdd() { }
/* function: goOptions      add event clicked -> event page */
function goOptions() { }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
  },
})

//Header Function
function Header() {

  return (
    <View>
      {/* -----------------------------------------------------------------
      START of Header Toolbar (with profile, notification bell, and logo) */}
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

        {/* Profile Icon (top left)*/}
        <TouchableOpacity onPress={goProfile}>
          <Image
            style={{
              height: 35,
              width: 35,
              left: -130,
              top: -20
            }}
            source={require('./Icons/profile.png')} />
        </TouchableOpacity>

        {/* Notifcation Icon (top left)*/}
        <TouchableOpacity onPress={goNotification}>
          <Image style={{
            height: 35,
            width: 35,
            left: -100,
            top: -20
          }} source={require('./Icons/notification.png')} />
        </TouchableOpacity>

        {/* workAround logo / home button */}
        <TouchableOpacity
          style={{ position: "absolute" }} onPress={goHome}>
          <Image style={{
            height: 80,
            width: 150,
            left: 70,
            top: -50,
          }} source={require('./Icons/workAround.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};



{/* HOME SCREEN FUNCTION */ }
function HomeScreen({ navigation }) {
  let primary = "#F38C00";    //  default primary color     (orange)
  let secondary = "#0167AB";    //  default secondary color   (blue)
  let bgColor = "white";      //  default background color  (white in LM) (black in DM)
  let textColor = "black";      //  default textcolor         (black in LM) (white in DM)
  const windowWidth = Dimensions.get('window').width;         //full height of screen
  const windowHeight = Dimensions.get('window').height;       //full width of screen
  const [events, setEvents] = useState([
    {
      title: 'CS-108',
      summary: 'SB 223',
      start: '2022-11-05 08:30:00',
      end: '2022-11-05 09:30:00',
    },
    {
      title: 'MATH-171',
      summary: 'NH 159',
      start: '2022-11-05 11:00:00',
      end: '2022-11-05 11:50:00',
    },
    {
      title: 'ENGL-101',
      summary: 'CFAC 242',
      start: '2022-11-05 12:00:00',
      end: '2022-11-05 12:50:00',
    },
    {
      title: 'REL-121',
      summary: 'HH 133',
      start: '2022-11-05 14:00:00',
      end: '2022-11-05 14:50:00',
    },
    {
      title: 'CS-195',
      summary: 'SB 010',
      start: '2022-11-03 15:00:00',
      end: '2022-11-03 15:50:00',
    },
  ]);

  //On Click of event showing alert from here
  const editEvent = (event) => {
    alert("TODO: Add Edit for:\n\n" + (event.title) + "\n" + (event.summary)
      + "\nstart: " + (event.start) + "\nend: " + (event.end));
  };

  return (
    // homeScreen view of schedule + icons
    <View>
      <View style={styles.calendar}>
        <EventCalendar
          eventTapped={editEvent}// Function on event press
          events={events}           // Passing the Array of event
          width={windowWidth}             // Container width
          //number of dates rendered before & after initDate (def 30 before, 29 after)
          size={60}                 //initDate defaulting to today
          scrollToFirst             // Scroll to first event of the day (default true)
        />
      </View>
      {/* END of Schedule on homeScreen
        ------------------------------*/}


      {/* Add Icon (bottom right on sched) */}
      <TouchableOpacity onPress={goAdd}>
        <Image style={{
          // styling add-icon
          height: 60,
          width: 60,
          opacity: .8,
          backgroundColor: primary,
          borderColor: "bgColor",
          borderRadius: 50,

          // positioning add-icon
          position: "absolute",
          left: windowWidth - 70,
          bottom: 25,
        }} source={require('./Icons/add.png')} />
      </TouchableOpacity>
    </View >

  );
}


function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          showLabel: false,
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
        }}>

        <Tab.Screen name="Home" component={HomeScreen}

          options={{
            headerTitle: () => <Header />, tabBarIcon: ({ focused }) => (
              <View style={{
                // centring Tab Button...
                position: 'absolute',
                bottom: 3
              }}>
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? 'blue' : 'gray'}
                ></FontAwesome5>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absolute', // centring Tab Button...
                bottom: 3
              }}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? 'blue' : 'gray'}
                ></FontAwesome5>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

        <Tab.Screen name="" component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absolute', // centring Tab Button...
                bottom: 3
              }}>
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? 'blue' : 'gray'}
                ></FontAwesome5>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

        <Tab.Screen name={"Add a Class"} component={AddScreen} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'orange',
                borderRadius: 30,
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
            </TouchableOpacity>
          )
        }} />
      </Tab.Navigator>

      <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 98,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 80  // Horizontal Padding = 20...
  return width / 5    // Total five Tabs..
}

export default App;