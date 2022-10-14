import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Switch, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

/*  A space to declare global variables */
let primary = "#F3F3F3";    //  default primary color     (orange)
let secondary = "#0167AB";  //  default secondary color   (blue)
let bgColor = "white";    //  default background color  (white)
let textColor = "black";  //  default textcolor         (black)
let scrollSchedHeight = window.innerHeight;  // def scrollView height of schedule
let schedHeight = 1000; //def height per day (within the scroll view) nested within scrollSchedHeight
let heightPiece = (schedHeight - 100) / 16; //height peice per hour
let schedWidth = 350;     //def width per day view


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

/* function: renderGrid  -  times & lines placed
  @params: item
*/
function renderGrid(item) {
  const timeView = [];
  const lineView = [];
  const times = ["  8 am", "  9 am", "10 am", "11 am", "12 am", "  1 pm", "  2 pm", "  3 pm", "  4 pm", "  5 pm", "  6 pm", "  7 pm", "  8 pm", "  9 pm", "10 pm", "11 pm", "12 am",]
  for (let i = 0; i <= 16; i += 1) {
    timeView.push(<Text style={{ position: 'absolute', color: textColor, marginTop: i * heightPiece + 50 }}>{times[i]}</Text>);     //  write times
    lineView.push(<View style={{ position: 'absolute' }}>{hLine(280, 50, i * heightPiece + 60, textColor, 1)}</View>)               //  draw horiz lines
  }
  return <View>
    {/* Style day text */}
    <Text style={{ textAlign: "center", fontSize: 24, color: textColor }}>{item}</Text>
    {/* Display both arrays */}
    {timeView}{lineView}
  </View>;
};

const Listitem = ({ item }) => {
  return (
    <View style={{ height: schedHeight, width: schedWidth, backgroundColor: primary, borderRadius: 5 }}>

      {renderGrid(item)}
    </View>
  );
};

export default function App() {
  return (
    <FlatList
      style={{
        marginTop: 25,
        marginBottom: 70,
        marginHorizontal: 10,
      }}
      horizontal
      data={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
      renderItem={({ item }) => <View style={{ height: scrollSchedHeight }}>
        <View style={{ backgroundColor: "white", height: 100, }}>
          <Text>Header</Text>
          <TouchableOpacity
            style={{ backgroundColor: "blue", position: "relative", x: 0 }}
            onPress={goHome}>
            <Image style={{
              height: 80,
              width: 150,
              resizeMode: "cover",
              position: "absolute",
              marginLeft: 200,

            }} source={require('./workAround.png')} />

          </TouchableOpacity>
        </View>


        <ScrollView>
          <Listitem item={item} />
        </ScrollView>

        <View class="toolbar" id="#bottom-toolbar">
          <Text>Footer</Text>
        </View>
      </View >}

      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
      ItemSeparatorComponent={() => { return (<View style={{ width: 10 }} />); }} //the variable "width" affects space between elements in the list
    />
  );
}

const styles = StyleSheet.create({

});
