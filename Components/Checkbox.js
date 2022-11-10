import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props) => {
	const iconName = props.isChecked ?
		"checkbox-marked" : "checkbox-blank-outline";

	return (
		<View style={styles.container}>
			<Pressable onPress={props.onPress}>
				<MaterialCommunityIcons
					name={iconName} size={40} color="#000" />
			</Pressable>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		width: 150,
		marginTop: 5,
		marginHorizontal: 5,
		flexWrap: 'wrap',
	},
	title: {
		fontSize: 20,
        color: '#000a',
        textAlign: 'left',
        top: 50,
        marginTop: 40,
	},
});
