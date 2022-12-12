import {
  KeyboardAvoidingView,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  Platform,
  TextInput,
} from "react-native";
import React, { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Checkbox from "../Components/Checkbox";

const NavigateToDelete = (props) => {
  props.navigation.navigate("Delete");
};
const NavigateToHome = (props) => {
  props.navigation.navigate("Schedule");
};

const EditScreen = (props) => {
  const [Sun, setSun] = useState(false);
  const [Mon, setMon] = useState(false);
  const [Tue, setTue] = useState(false);
  const [Wed, setWed] = useState(false);
  const [Thu, setThu] = useState(false);
  const [Fri, setFri] = useState(false);
  const [Sat, setSat] = useState(false);
  return (
    <View style={styles.EditBackground}>
      <ScrollView>
        <Text style={styles.EditTitle}>Edit PHIL-205</Text>

        <Text style={styles.InfoText}>Event Name and Instructor:</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={"Event Name"} />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={"Instructor (optional)"} />
        </KeyboardAvoidingView>

        <Text style={styles.InfoText}>Location:</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={"Location (optional)"} />
        </KeyboardAvoidingView>

        <View style={styles.box}>
          <View style={styles.container}>
            <Checkbox title="S" onPress={() => setSun(!Sun)} isChecked={Sun} />
          </View>
          <View style={styles.container}>
            <Checkbox title="M" onPress={() => setMon(!Mon)} isChecked={Mon} />
          </View>
          <View style={styles.container}>
            <Checkbox title="T" onPress={() => setTue(!Tue)} isChecked={Tue} />
          </View>
          <View style={styles.container}>
            <Checkbox title="W" onPress={() => setWed(!Wed)} isChecked={Wed} />
          </View>
          <View style={styles.container}>
            <Checkbox title="TH" onPress={() => setThu(!Thu)} isChecked={Thu} />
          </View>
          <View style={styles.container}>
            <Checkbox title="F" onPress={() => setFri(!Fri)} isChecked={Fri} />
          </View>
          <View style={styles.container}>
            <Checkbox title="S" onPress={() => setSat(!Sat)} isChecked={Sat} />
          </View>
        </View>

        <Text style={styles.timeText}>Event Time:</Text>

        <View style={styles.TimeContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
          >
            <TextInput style={styles.miniInput} placeholder={"0:00 AM"} />
          </KeyboardAvoidingView>

          <Text style={styles.toText}>to</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
          >
            <TextInput style={styles.miniInput} placeholder={"0:00 PM"} />
          </KeyboardAvoidingView>
        </View>
        <View>
          <TouchableOpacity onPress={() => alert("Notifications have been silenced for Math-255")}>
            <Image
              style={{
                height: 60,
                width: 60,
                position: "absolute",
                bottom: '0%',
                left: '3%',
                top: '1%'
              }}
              source={require("../Icons/silence.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.square} onPress={() => NavigateToHome(props)}>
            <Text style={styles.buttonTitle}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigateToDelete(props)}>
            <Image
              style={{
                height: 60,
                width: 60,
                position: "absolute",
                bottom: '30%',
                right: '3%',
              }}
              source={require("../Icons/delete.png")}
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default EditScreen;


const styles = StyleSheet.create({
  EditBackground: {
    justifyContent: "center",
  },
  EditTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000a",
    textAlign: "center",
    position: "absolute",
    top: '3%',
    right: '20%',
  },
  writeTaskWrapper: {
    top: '12%',
    flexDirection: "row",
    justifyContent: "center",
  },
  miniInput: {
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    backgroundColor: "#fff",
    borderRadius: '10%',
    borderColor: "#C0C0C0",
    borderWidth: "1",
    width: 125,
    margin: '8%',
  },
  input: {
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    backgroundColor: "#fff",
    borderRadius: '10%',
    borderColor: "#C0C0C0",
    borderWidth: "1",
    width: '55%',
  },
  InfoText: {
    fontSize: 15,
    color: "#000a",
    textAlign: "left",
    top: '6%',
    left: '22%',
    marginTop: '8%',
  },
  timeText: {
    fontSize: 15,
    color: "#000a",
    textAlign: "left",
    top: '0%',
    left: '22%',
    marginBottom: '8%',
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: '20%',
  },
  container: {
    margin: '1%',
  },
  TimeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: '18%',
    marginTop: 30,
  },
  toText: {
    flexDirection: "row",
    justifyContent: "center",
    top: '55%',
    fontSize: 15,
  },
  square: {
    backgroundColor: "#F38C00",
    padding: '3%',
    borderRadius: '30%',
    margin: '3%',
    bottom: '65%',
    height: '26%',
    width: '45%',
    justifyContent: "center",
    bottom: '35%',
    position: 'relative',
    left: '25%'
  },
  buttonTitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
