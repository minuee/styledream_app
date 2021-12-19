import React, {useEffect} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import RootSiblings from 'react-native-root-siblings';

/*
네트워크 연결 상태를 감지하여 에러 페이지 띄워주는 컴포넌트.
해당 컴포넌트는 네비게이션 스택 최상단 경로에 위치해야 함.(NavigationContainer)
*/

let elements = [];

const ErrorScreen = () => {
  const netInfo = NetInfo.useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected !== null) {
      //console.log('\n#isConnected : ', netInfo.isConnected);
      if (netInfo.isConnected) {
        setTimeout(destroySibling, 2000);
      } else if (!elements.length) {
        setTimeout(addSibling, 2000);
      }
    }
  });

  const addSibling = () => {
    let sibling = new RootSiblings(
      (
        <View
          style={{
            height: Dimensions.get('window').height,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Network Error!
          </Text>
        </View>
      ),
    );
    elements.push(sibling);
  };

  const destroySibling = () => {
    let lastSibling = elements.pop();
    lastSibling && lastSibling.destroy();
  };

  return null;
};

export default ErrorScreen;
