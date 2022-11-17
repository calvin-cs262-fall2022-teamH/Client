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
import Checkbox from "../checkbox/Checkbox";

const NavigateToOptions = (props) => {
  props.navigation.navigate("Options");
};

const Add = (props) => {
  const [Sun, setSun] = useState(false);
  const [Mon, setMon] = useState(false);
  const [Tue, setTue] = useState(false);
  const [Wed, setWed] = useState(false);
  const [Thu, setThu] = useState(false);
  const [Fri, setFri] = useState(false);
  const [Sat, setSat] = useState(false);
  return (
    <View style={styles.EditBackground}>
      <Text style={styles.EditTitle}>Add an Event</Text>

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
      <TouchableOpacity>
        <View style={styles.square}>
          <Text style={styles.buttonTitle}>Add</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  EditBackground: {
    justifyContent: "center",
  },
  EditTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000a",
    textAlign: "center",
    position: "absolute",
    top: 40,
    right: 100,
  },
  writeTaskWrapper: {
    top: 65,
    flexDirection: "row",
    justifyContent: "center",
  },
  miniInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: "1",
    width: 125,
    margin: 15,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: "1",
    width: 250,
  },
  InfoText: {
    fontSize: 15,
    color: "#000a",
    textAlign: "left",
    top: 50,
    left: 90,
    marginTop: 40,
  },
  timeText: {
    fontSize: 15,
    color: "#000a",
    textAlign: "left",
    top: 50,
    left: 90,
    marginBottom: 30,
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 90,
  },
  container: {
    margin: 8,
  },
  TimeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 80,
    marginTop: 30,
  },
  toText: {
    flexDirection: "row",
    justifyContent: "center",
    top: 95,
    fontSize: 15,
  },
  square: {
    backgroundColor: "#ffa500",
    padding: 15,
    borderRadius: 50,
    margin: 25,
  },
  buttonTitle: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  cancelText: {
    fontSize: 20,
    color: "#000a",
    textAlign: "center",
  },
});
