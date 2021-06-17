import React from "react"
import { View, Button, Text, StyleSheet } from "react-native"

const SelectedCampaign = ({navigation}) => {
	return (
		<View style={styles.center}>
			<Text>This is the Selected Campaign Screen</Text>
			<Button
				title="Go to Generate Campaign Screen"
				onPress={() => navigation.navigate("GenerateCampaign")}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
})
export default SelectedCampaign
