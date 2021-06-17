import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {MainStackNavigator} from './navigation/StackNavigator'

function App() {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	)
}

export default App
