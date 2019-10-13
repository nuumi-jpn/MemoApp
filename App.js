import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


import ENV from './env.json';
// eslint-disable-next-line
require("firebase/firestore");

const Config = {
  apiKey              : ENV.FIREBASE_API_KEY,
  authDomain          : ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL         : ENV.FIREBASE_DB_URL,
  projectId           : ENV.FIREBASE_PRJ_ID,
  storageBucket       : ENV.FIREBASE_STRAGE,
  messagingSenderId   : ENV.FIREBASE_SENDER_ID,
  appId               : '1:1026069054019:web:1e2ef402bccec6ddf10af6',
  measurementId       : 'G-BKTK7BMC9W',
};
firebase.initializeApp(Config);


const App = createStackNavigator({
  Login               : { screen: LoginScreen },
  MemoCreate          : { screen: MemoCreateScreen },
  Signup              : { screen: SignupScreen },
  Home                : { screen: MemoListScreen },
  MemoDetail          : { screen: MemoDetailScreen },
  MemoEdit            : { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MEMOT',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
