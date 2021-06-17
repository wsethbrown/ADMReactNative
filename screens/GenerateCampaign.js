import React from "react"
import { View, Button, Text, StyleSheet } from "react-native"

const GenerateCampaign = ({navigation}) => {
	return (
		<View style={styles.center}>
			<Text>This is the Generate Campaign Screen</Text>
			<Button 
				title="Go to Saved Campaign Screen"
				onPress={() => navigation.navigate("SavedCampaign")}
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
export default GenerateCampaign
