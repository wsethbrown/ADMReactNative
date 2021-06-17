import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GenerateCampaign from "../screens/GenerateCampaign";
import SavedCampaign from "../screens/SavedCampaign";
import SelectedCampaign from "../screens/SelectedCampaign";


const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#457b9d",
	},
	headerTintColor: '#fff',
}

const MainStackNavigator = () => {
  return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="GenerateCampaign" component={GenerateCampaign} />
			<Stack.Screen name="SavedCampaign" component={SavedCampaign} />
			<Stack.Screen name="SelectedCampaign" component={SelectedCampaign} />
		</Stack.Navigator>
	)
};
export { MainStackNavigator };