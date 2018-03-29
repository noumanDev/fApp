import {Navigation} from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';

export const registerScreens = ()=>{
    Navigation.registerComponent('instagramclone.FeedsScreen',()=>FeedsScreen);
}