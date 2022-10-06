import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, View, FlatList } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

//makes a horrizontal line, given length, (x,y) displacement, a color, and thickness of the a line
function hLine(length, x, y, color) {
  return <View
  style={{
    borderBottomColor: color,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft:x,
    marginTop:y,
    width: length
  }}
/>;
};

function renderGrid(item) {
  const timeView = [];
  const lineView = [];
  const times = ["  8 AM","  9 AM","10 AM","11 AM", "12 AM", "  1 PM","  2 PM","  3 PM", "  4 PM", "  5 PM", "  6 PM", "  7 PM","  8 PM","  9 PM", "10 PM", "11 PM","12 PM"]
  for (let i=0; i <= 16; i+=1) {
    timeView.push(<Text style={{position:'absolute', marginTop:i*20+20}}>{times[i]}</Text>);
    lineView.push(<View style={{position:'absolute'}}>{hLine(120,50,i*20+30,"black",1)}</View>)
  }
  return <View>
    <Text style={{textAlign:"center"}}>{item}</Text>
    {timeView}{lineView}
    </View>;
};

const Listitem = ({ item }) => {
  return (
    <View style={{height:360, width: 200, backgroundColor: "grey", borderRadius:5}}>
      {renderGrid(item)}
    </View>
  );
};
export default function App() {
  return (
    <FlatList
    style={{marginTop: 100, marginLeft: 20, marginRight:20}}
    horizontal
    data={["Mon", "Tues", "Wed", "Thurs", "Fri"]}
    renderItem={({item}) => <Listitem item={item} />}
    showsHorizontalScrollIndicator={true}
    ItemSeparatorComponent={() => {return (<View style={{width:10}}/>);}}//the variable "width" affects space between elements in the list
  />
  );
}


const styles = StyleSheet.create({
  zoomWrapper: {
    flex: 1,
    backgroundColor: "grey",
    overflow: 'hidden',
    height:2000,
    length: 1000,
  },
});