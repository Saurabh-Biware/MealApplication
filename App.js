import React, { useState } from 'react';
import { useScreens } from 'react-native-screens';



import MealsNavigator from './navigation/MealsNavigator';

useScreens();

export default function App(){
  return(
   <MealsNavigator />
  );
}

