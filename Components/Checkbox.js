import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props) => {
  const iconName = props.isChecked
    ? "checkbox-marked"
    : "checkbox-blank-outline";

  return (
    <View>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons name={iconName} size={40} color="#F38C00" />
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#000a",
    left: 10,
  },
});
