/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {appTheme} from 'theme';
import Routes from 'routes/routes';
import {NavigationContainer} from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: appTheme.COLORS.primary,
    accent: appTheme.COLORS.secondary,
    surface: appTheme.COLORS.white,
    onSurface: appTheme.COLORS.black,
    background: appTheme.COLORS.background_color,
    error: appTheme.COLORS.red,
    text: appTheme.COLORS.black,
    disabled: appTheme.COLORS.disabled,
    placeholder: appTheme.COLORS.placeholder,
  },
};

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <MaterialCommunityIcons {...props} />,
      }}
      theme={theme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
