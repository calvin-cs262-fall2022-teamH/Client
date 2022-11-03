
import { StatusBar } from 'expo-status-bar';
import Event from './Components/event';
import { Image, ScrollView, StyleSheet, Switch, Text, View, FlatList, TouchableOpacity, Dimensions, Settings } from 'react-native';
import React from 'react';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Options from './screens/options';
import Delete from './screens/delete';
import SettingsScreen from './screens/settings';

/*  A space to declare global variables */
let primary = "#F38C00";      //  default primary color     (orange)
let secondary = "#0167AB";    //  default secondary color   (blue)
let bgColor = "bgColor";        //  default background color  (white in LM) (black in DM)
let textColor = "black";      //  default textcolor         (black in LM) (white in DM)
const windowWidth = Dimensions.get('window').width;         //full height of screen
const windowHeight = Dimensions.get('window').height;       //full width of screen
let heightPiece = (windowHeight) / 12;                      //height peice per hour
const Stack = createNativeStackNavigator();                 //stack declaration



/* function: hLine    to draw horizontal lines
  @params: length, (x, y) displacement, color, thickness
*/
function hLine(length, x, y, color) {
  return <View
    style={{
      borderBottomColor: color,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginLeft: x,
      marginTop: y,
      width: length
    }}
  />;
};

/* function: goHome    workAround logo clicked -> homeScreen */
function goHome() { }

/* function: goSettings    settings icon clicked -> settings page */
const goSettings  = props => {
  props.navigation.navigate('Settings')
 }

/* function: goShare      share icon clicked -> share popup */
function goShare() { }

/* function: goProfile      profile icon clicked -> profiles page */
function goProfile() { }

/* function: goNotification      notification bell icon clicked -> notification popup */
function goNotification() { }

/* function: goAdd      add icon clicked -> add event page/popup */
function goAdd() { }

/* function: goOptions      add event clicked -> event page */
function goOptions() {}


/* function: renderGrid  -  times & lines placed
  @params: item
*/
function renderGrid(item) {
  const timeView = [];
  const lineView = [];
  const times = ["  8 am", "  9 am", "10 am", "11 am", "12 am", "  1 pm", "  2 pm", "  3 pm", "  4 pm", "  5 pm", "  6 pm", "  7 pm", "  8 pm", "  9 pm", "10 pm", "11 pm", "12 am",]
  for (let i = 0; i <= 16; i += 1) {
    timeView.push(<Text style={{ position: 'absolute', color: textColor, marginTop: i * heightPiece + 60 }}>{times[i]}</Text>);     //  write times
    lineView.push(<View style={{ position: 'absolute' }}>{hLine(280, 50, i * heightPiece + 70, textColor, 1)}</View>)               //  draw horiz lines
  }
  {/* Style class view */ }
  return <View>
    {/* Style day-of-week text */}
    <Text style={{ textAlign: "center", fontSize: 24, color: textColor }}>{item}</Text>
    {/* Display both arrays */}
    {timeView}{lineView}
  </View>;
};

/* function: Listitem  -  creates each schedule widget
  @params: item
*/
const Listitem = ({ item }) => {
  return (
    <View style={{
      height: 1.5 * windowHeight,
      width: windowWidth - 20,
      // backgroundColor: "#EFEFEF",
      borderRadius: 5,
      marginRight: 20
    }}>
      {renderGrid(item)}
    </View>
  );
};


export default function App() {
  return (
    <View>

      {/* Header Toolbar (with profile, notification bell, and logo) */}
      <View style={{ backgroundColor: "bgColor", height: .14 * windowHeight }}>

        {/* Profile Icon (top left)*/}
        <TouchableOpacity onPress={goProfile}>
          <Image style={{
            height: 35,
            width: 35,
            position: "absolute",
            top: 50,
            left: 20
          }} source={require('./Icons/profile.png')} />
        </TouchableOpacity>

        {/* Notifcation Icon (top left)*/}
        <TouchableOpacity onPress={goNotification}>
          <Image style={{
            height: 35,
            width: 35,
            position: "absolute",
            top: 50,
            left: 70
          }} source={require('./Icons/notification.png')} />
        </TouchableOpacity>


        {/* workAround logo / home button */}
        <TouchableOpacity
          style={{ position: "absolute" }} onPress={goHome}>
          <Image style={{
            height: 80,
            width: 150,
            position: "absolute",
            left: windowWidth - 170,
            top: 25,
          }} source={require('./Icons/workAround.png')} />
        </TouchableOpacity>
      </View>

      {/* Schedule on homeScreen */}
      <FlatList
        style={{
          borderVerticalColor: textColor,
          borderTopWidth: 3,
          borderBottomWidth: 3,
          marginVerital: 5,
          padding: 10,
        }}
        horizontal
        data={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
        renderItem={({ item }) => <View style={{ height: .75 * windowHeight }}>

          {/* Settings Icon (bottom left)*/}
          <TouchableOpacity onPress={goAdd}>
            <Image style={{
              height: 70,
              width: 70,
              position: "absolute",
              top: .65 * windowHeight,
              left: .78 * windowWidth,
              backgroundColor: primary,
              borderWidth: 6,
              borderColor: "bgColor",
              borderRadius: 100,

            }} source={require('./Icons/add.png')} />
          </TouchableOpacity>

          <ScrollView>
            <Listitem item={item} />
          </ScrollView>
        </View >}

        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />

      {/* Footer Toolbar (with settings and share) */}
      <View style={{ backgroundColor: "bgColor", height: .1 * windowHeight, width: windowWidth, position: "absolute", top: .95 * windowHeight }}>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} />
            
            <Stack.Screen name="Delete" component={Delete} />
          </Stack.Navigator>
        </NavigationContainer>

        {/* Settings Icon (bottom left)*/}
        <TouchableOpacity onPress={() => goSettings(props)}>
          <Image style={{
            height: 45,
            width: 45,
            position: "absolute",
            right: windowWidth - 70,
            top: -3,
          }} source={require('./Icons/settings.png')} />
        </TouchableOpacity>

        {/* Share Icon (bottom right)*/}
        <TouchableOpacity onPress={goShare}>
          <Image style={{
            height: 35,
            width: 35,
            position: "absolute",
            left: windowWidth - 70,
          }} source={require('./Icons/share.png')} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
