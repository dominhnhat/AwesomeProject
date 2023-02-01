import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StackActions} from '@react-navigation/native';

import Config from '../../../branding/carter/configuration/Config';

export const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace(Config.SELECTED_VARIANT));
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View style={{flex: 1, backgroundColor: 'green'}} />;
};
