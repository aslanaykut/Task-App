import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import RootNavigator from './scr/router/rootNavigator';
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
