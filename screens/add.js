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
    top: '5%',
    right: '25%',
  },
  writeTaskWrapper: {
    top: '15%',
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
    top: '8%',
    left: '22%',
    marginTop: '10%',
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
    margin: '2%',
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
    padding: '4%',
    borderRadius: '50%',
    marginRight: '6%',
    marginLeft: '6%',
    bottom: '65%'
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
    bottom: '20%'
  },
});

