import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, View, FlatList } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

/*  A space to declare global variables */
let primary = "#F38C00";  // def primary color (orange)
let secondary = "#0167AB"; // def secondary color (blue)


/* function: hLine  -  draws horizontal lines
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

function renderGrid(item) {
  const timeView = [];
  const lineView = [];
  const times = ["  8 AM", "  9 AM", "10 AM", "11 AM", "12 AM", "  1 PM", "  2 PM", "  3 PM", "  4 PM", "  5 PM", "  6 PM", "  7 PM", "  8 PM", "  9 PM", "10 PM", "11 PM", "12 PM"]
  for (let i = 0; i <= 16; i += 1) {
    timeView.push(<Text style={{ position: 'absolute', color: "white", marginTop: i * 20 + 30 }}>{times[i]}</Text>);     //  writes times
    lineView.push(<View style={{ position: 'absolute' }}>{hLine(280, 50, i * 20 + 40, "white", 1)}</View>)               //  draws horiz lines
  }
  return <View>
    <Text style={{ textAlign: "center" }}>{item}</Text>
    {timeView}{lineView}
  </View>;
};

const Listitem = ({ item }) => {
  return (
    <View style={{ height: 600, width: 350, backgroundColor: primary, borderRadius: 5 }}>
      {renderGrid(item)}
    </View>
  );
};

export default function App() {
  return (
    <FlatList
      style={{
        marginTop: 120,   //creates room for "toolbar"
        marginLeft: 10,
        marginRight: 10,
      }}
      horizontal
      data={["Mon", "Tues", "Wed", "Thurs", "Fri"]}
      renderItem={({ item }) => <Listitem item={item} />}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
      ItemSeparatorComponent={() => { return (<View style={{ width: 10 }} />); }} //the variable "width" affects space between elements in the list
    />
  );
}

const styles = StyleSheet.create({
  zoomWrapper: {
    flex: 1,
    backgroundColor: "grey",
    overflow: 'hidden',
    height: 2000,
    length: 1000,
  },
});