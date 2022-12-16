import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {SplashLogo} from '../../../Assets/images/index';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <ImageBackground
        source={SplashLogo}
        style={{
          height: 110,
          width: 70,
          justifyContent: 'center',
        }}></ImageBackground>
    </View>
  );
};

export default Splash;
