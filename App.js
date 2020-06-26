import React from 'react'


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Tabs } from './routes/tab';
import ProfileToEdit from './screen/ProfileToEdit'
import ChooseIcon from './screen/ChooseIcon'
import Camera from './screen/Camera'
import {GetLocation} from './services/movieFilter';




const Stack = createStackNavigator();


const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Tabs"
					component={Tabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ProfileToEdit"
					component={ProfileToEdit}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ChooseIcon"
					component={ChooseIcon}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Camera"
					component={Camera}
					options={{ headerShown: false }}
				/>				
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App
