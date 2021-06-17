import React from "react"
import { View, Button, Text, StyleSheet } from "react-native"

const SavedCampaign = ({navigation}) => {
	return (
		<View style={styles.center}>
			<Text>This is the Saved Campaign Screen</Text>
			<Button
				title="Go to Selected Campaign Screen"
				onPress={() => navigation.navigate("SelectedCampaign")}
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
export default SavedCampaign
