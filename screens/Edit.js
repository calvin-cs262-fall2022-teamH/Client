import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "../Components/Checkbox";

const Edit = (props) => {
  const [Sun, setSun] = useState(false);
  const [Mon, setMon] = useState(false);
  const [Tue, setTue] = useState(false);
  const [Wed, setWed] = useState(false);
  const [Thu, setThu] = useState(false);
  const [Fri, setFri] = useState(false);
  const [Sat, setSat] = useState(false);

  return (
    <View style={styles.EditBackground}>
      <Text style={styles.EditTitle}>Math-255</Text>
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
      /** Checkboxes: select which days to display */
      <Checkbox
        style={styles.Checkbox}
        title="S"
        onPress={() => setSun(!Sun)}
        isChecked={Sun}
      />
      <Checkbox
        style={styles.Checkbox}
        title="M"
        onPress={() => setMon(!Mon)}
        isChecked={Mon}
      />
      <Checkbox
        style={styles.Checkbox}
        title="T"
        onPress={() => setTue(!Tue)}
        isChecked={Tue}
      />
      <Checkbox
        style={styles.Checkbox}
        title="W"
        onPress={() => setWed(!Wed)}
        isChecked={Wed}
      />
      <Checkbox
        style={styles.Checkbox}
        title="TH"
        onPress={() => setThu(!Thu)}
        isChecked={Thu}
      />
      <Checkbox
        style={styles.Checkbox}
        title="F"
        onPress={() => setFri(!Fri)}
        isChecked={Fri}
      />
      <Checkbox
        style={styles.Checkbox}
        title="S"
        onPress={() => setSat(!Sat)}
        isChecked={Sat}
      />
    </View>
  );
};

export default Edit;

  return (
    <View style={styles.EditBackground}>
      <Text style={styles.EditTitle}>Math-255</Text>

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

      <Checkbox
        style={styles.Checkbox}
        title="S"
        onPress={() => setSun(!Sun)}
        isChecked={Sun}
      />
      <Checkbox
        style={styles.Checkbox}
        title="M"
        onPress={() => setMon(!Mon)}
        isChecked={Mon}
      />
      <Checkbox
        style={styles.Checkbox}
        title="T"
        onPress={() => setTue(!Tue)}
        isChecked={Tue}
      />
      <Checkbox
        style={styles.Checkbox}
        title="W"
        onPress={() => setWed(!Wed)}
        isChecked={Wed}
      />
      <Checkbox
        style={styles.Checkbox}
        title="TH"
        onPress={() => setThu(!Thu)}
        isChecked={Thu}
      />
      <Checkbox
        style={styles.Checkbox}
        title="F"
        onPress={() => setFri(!Fri)}
        isChecked={Fri}
      />
      <Checkbox
        style={styles.Checkbox}
        title="S"
        onPress={() => setSat(!Sat)}
        isChecked={Sat}
      />
    </View>
  );
};

export default Edit;

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
    right: 130,
  },
  writeTaskWrapper: {
    top: 65,
    flexDirection: "row",
    justifyContent: "center",
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
  Days: {
    fontSize: 20,
    color: "#000a",
    textAlign: "left",
    top: 50,
    marginTop: 40,
  },
});
