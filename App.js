/*  WorkAround App.js

    desc: Should serve as a home screen for entire app.
    Will have navigation to Settings.js, Edit.js, &
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
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  NavigationContainer,
} from "react-native";
import EventCalendar from "react-native-events-calendar";
import Delete from "./screens/delete";

/*  A space to declare App.js variables */
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
/* function: goHome              workAround logo clicked -> homeScreen                */
function goHome() {}
/* function: goSettings          settings icon clicked -> settings page               */
function goSettings() {}
/* function: goShare             share icon clicked -> share popup                    */
function goShare() {}
/* function: goProfile           profile icon clicked -> profiles page                */
function goProfile() {}
/* function: goNotification      notification bell icon clicked -> notification popup */
function goNotification() {}
/* function: goAdd               add icon clicked -> add event page/popup             */
function goAdd() {}
/* function: goOptions           add event clicked -> event page                       */
function goOptions() {}

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
        {/* Profile Icon (top left)*/}
        <TouchableOpacity onPress={goProfile}>
          <Image
            style={{
              height: 35,
              width: 35,
              left: -130,
              top: -20,
            }}
            source={require("./Icons/profile.png")}
          />
        </TouchableOpacity>

        {/* Notifcation Icon (top left)*/}
        <TouchableOpacity onPress={goNotification}>
          <Image
            style={{
              height: 35,
              width: 35,
              left: -100,
              top: -20,
            }}
            source={require("./Icons/notification.png")}
          />
        </TouchableOpacity>

        {/* workAround logo / home button */}
        <TouchableOpacity style={{ position: "absolute" }} onPress={goHome}>
          <Image
            style={{
              height: 80,
              width: 150,
              left: 70,
              top: -50,
            }}
            source={require("./Icons/workAround.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    alert(
      "TODO: Add Edit for:\n\n" +
        event.title +
        "\n" +
        event.summary +
        "\nstart: " +
        event.start +
        "\nend: " +
        event.end
    );
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

      {/* ----------------------------------------------
      START of Footer Toolbar (with settings and share)*/}

      <View
        style={{
          backgroundColor: "bgColor",
          height: 0.1 * windowHeight,
          width: windowWidth,
          position: "absolute",
          top: 0.95 * windowHeight,
        }}
      >
        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Delete" component={Delete} />
          </Stack.Navigator>
        </NavigationContainer> */}

        {/* Settings Icon (bottom left)*/}
        <TouchableOpacity onPress={() => goSettings(props)}>
          <Image
            style={{
              height: 45,
              width: 45,
              position: "absolute",
              right: windowWidth - 70,
              top: -3,
            }}
            source={require("./Icons/settings.png")}
          />
        </TouchableOpacity>
        {/* Share Icon (bottom right)*/}
        <TouchableOpacity onPress={goShare}>
          <Image
            style={{
              height: 35,
              width: 35,
              position: "absolute",
              left: windowWidth - 70,
            }}
            source={require("./Icons/share.png")}
          />
        </TouchableOpacity>
      </View>
      {/* END of Footer Toolbar (with settings and share)
    ------------------------------------------------ */}

      {/* Add Icon (bottom right on sched) */}
      <TouchableOpacity onPress={goAdd}>
        <Image
          style={{
            // styling add-icon
            height: 60,
            width: 60,
            opacity: 0.8,
            backgroundColor: primary,
            borderColor: "bgColor",
            borderRadius: 50,

            // positioning add-icon
            position: "absolute",
            left: windowWidth - 70,
            bottom: 25,
          }}
          source={require("./Icons/add.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

function App() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          showLabel: false,
          // Floating Tab Bar...
          style: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Header />,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  bottom: 3,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute", // centring Tab Button...
                  bottom: 3,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? "red" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 98,
          // Horizontal Padding = 20...
          left: 50,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 80; // Horizontal Padding = 20...
  return width / 5; // Total five Tabs..
}

export default App;
