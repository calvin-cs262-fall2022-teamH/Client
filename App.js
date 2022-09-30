import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Square />
    </View>
  );
}
const Square = () => {
  return <View style={styles.square} />;
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 200,
    backgroundColor: "white",
    borderBottomColor:"black",
    borderWidth:2
  },
});