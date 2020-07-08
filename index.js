import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
MyApp = codePush(codePushOptions)(App);

console.log("testeMarcos");

registerRootComponent(MyApp);

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// messaging().setBackgroundMessageHandler(async remoteMessage => {
// 	console.log('Message handled in the background!', remoteMessage);
// 	//console.log(remoteMessage.data.billing);


// 	//billing
//   });

//   function HeadlessCheck({ isHeadless }) {
//     if (isHeadless) {
//       // App has been launched in the background by iOS, ignore
//       return null;
//     }
  
//     return <App />;
//   }
  
// registerRootComponent(HeadlessCheck);
