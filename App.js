import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

//makes a horrizontal line, given length, (x,y) displacement, a color, and thickness of the a line
function hLine(length, x, y, color, width) {
  return <View style={{width: length, height: 1, backgroundColor: color,
  borderBottomColor: color,
  borderWidth: width, top: y, marginLeft: x}} />;
};
//makes a vertical line, given length, (x,y) displacement, a color, and thickness of the a line
function vLine(length, x, y, color, width) {
  return <View style={{width: 1, height: length, backgroundColor: color,
  borderColor:color,
  borderWidth: width, top: y, marginLeft: x, position: 'absolute'}} />;
};

function renderGrid() {
  const grid = [];
  const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
  const times = ["8 AM","9 AM","10 AM","11 AM", "12 AM", "1 PM","2 PM","3 PM", "4 PM", "5 PM", "6 PM", "7 PM","8 PM","9 PM", "10 PM", "11 PM","12 PM"]
  for (let i=40; i <= 250; i+=20) {
    grid.push(vLine(250,i+20,30,"grey",1));
    grid.push(hLine(210,50,i,"black",1));
  }
  return grid;
};
export default function App() {
  return (
    <View style={styles.zoomWrapper}> 
      <ReactNativeZoomableView
        maxZoom={1.9}
        minZoom={0.3}
        zoomStep={80}
        initialZoom={0.9}
        bindToBorders={false}
        captureEvent={true}
        movementSensibility={5}
        //style={styles.zoomWrapper}
      >
        <View style={{backgroundColor: "white", height:300, length:400, position: 'absolute'}}>
        {renderGrid()}

        </View>
      </ReactNativeZoomableView>
      </View>
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