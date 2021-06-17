import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './LoginScreen'
import SavedCampaign from './SavedCampaign'
import SelectedCampaign from './SelectedCampaign'
import GenerateCampaign from "./GenerateCampaign"

const Stack = createStackNavigator()

function Main() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Generate Campaign">
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ title: "Login" }}
				/>
				<Stack.Screen
					name="Saved Campaigns"
					component={SavedCampaign}
					options={{ title: "Saved Campaigns" }}
				/>
				<Stack.Screen
					name="Selected Campaign"
					component={SelectedCampaign}
					options={{ title: "Selected Campaign" }}
				/>
				<Stack.Screen
					name="Generate Campaign"
					component={GenerateCampaign}
					options={{ title: "Generate Campaign" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

// class Main extends Component {
// 	render() {
// 		return (
// 			<View
// 				style={{
// 					flex: 1,
// 					flexDirection: "column",
// 					alignItems: "center",
// 					justifyContent: "center",
// 				}}>
// 				<Text style={styles.textStyle}>Home</Text>
// 				<Text
// 					style={styles.textStyle}
// 					onPress={() => navigation.navigate("GenerateCampaign")}>
// 					Generate Campaign
// 				</Text>
// 				<Text
// 					style={styles.textStyle}
// 					onPress={() => navigation.navigate("SavedCampaign")}>
// 					Saved Campaigns
// 				</Text>
// 			</View>
// 		)
// 	}
// }

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 22,
	},
})

export default Main
