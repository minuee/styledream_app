import React, {useEffect} from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import NavStack from './src/NavStack';
import SplashScreen from 'react-native-splash-screen';


import codePush from 'react-native-code-push';
import CodePushComponent from './CodePushComponent';
const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
    installMode: codePush.InstallMode.IMMEDIATE,
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RootSiblingParent>
      <CodePushComponent />
      <NavStack />
    </RootSiblingParent>
  );
};

export default App;
