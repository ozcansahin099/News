import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//page import
import Home from './Home';
import Detail from './Detail';
import Is from './Is';
import Haberdetay from './Haberdetay';

const stack = createStackNavigator({
  home: {
    screen: Home
  },
  detail:{
    screen:Detail
  },
  is:{
    screen:Is
  },
  haberdetay:{
    screen:Haberdetay
  }
  
});

export default createAppContainer(stack);