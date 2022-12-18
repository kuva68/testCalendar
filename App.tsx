//import 'react-native-gesture-handler';
import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import {Provider} from 'react-redux';
import alert from './app/services/alert';
import {COLORS} from './app/utils/colors';
import {StyleSheet} from 'react-native';
import RootNavigator from './app/navigation/rootNavigator';
//import {persistor, store} from './app/redux';
import {store} from './app/redux';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <RootNavigator />
      <DropdownAlert
        ref={alert._ref}
        containerStyle={styles.dropAlertContainer}
        contentContainerStyle={styles.contentContainer}
        activeStatusBarBackgroundColor={COLORS.RED_LIGHT}
        updateStatusBar={false}
      />
      {/* </PersistGate> */}
    </Provider>
  );
};
const styles = StyleSheet.create({
  dropAlertContainer: {
    backgroundColor: COLORS.RED_LIGHT,
    paddingTop: 40,
    paddingBottom: 0,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
});

export default App;
