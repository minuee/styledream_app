import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WebViewComp from './WebViewComp';
import HandleNetworkError from './HandleNetworkError';

const NavStack = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <HandleNetworkError />
      <Stack.Navigator initialRouteName="rootStack">
        <Stack.Screen
          name={'WebViewComp'}
          component={WebViewComp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
