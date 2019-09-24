import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Config = {
  apiKey: 'AIzaSyCIrrlg5WB7fyx2_h7ejTCSRYYOXyi2z4g',
  authDomain: 'memoapp-5fd88.firebaseapp.com',
  databaseURL: 'https://memoapp-5fd88.firebaseio.com',
  projectId: 'memoapp-5fd88',
  storageBucket: '',
  messagingSenderId: '1026069054019',
  appId: '1:1026069054019:web:1e2ef402bccec6ddf10af6',
  measurementId: 'G-BKTK7BMC9W',
};
firebase.initializeApp(Config);


const App = createStackNavigator({
  Login     : { screen: LoginScreen },
  Home      : { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit  : { screen: MemoEditScreen },
  Signup    : { screen: SignupScreen },
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
