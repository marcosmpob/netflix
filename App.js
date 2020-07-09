import React, { useState, useEffect,useContext } from 'react'


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Tabs } from './routes/tab';
import ProfileToEdit from './screen/ProfileToEdit'
import ChooseIcon from './screen/ChooseIcon'
import Camera from './screen/Camera'
import messaging from '@react-native-firebase/messaging';
import { Alert, AsyncStorage } from 'react-native';
import  { ProfieContext }  from './context/ProfileContext';


messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
});

const Stack = createStackNavigator();

const App = () => {

	const [user, setUser] = useState();
	const changeProfile = (user) => setUser(user);

	if(!user){
		setUser("Jose");
	}

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		messaging().getToken().then((token) => {
			console.log(token)
		})

		return unsubscribe;
	}, []);

	return (
		<ProfieContext.Provider value={{user,changeProfile}}>
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
		</ProfieContext.Provider>
	);
}

export default App
