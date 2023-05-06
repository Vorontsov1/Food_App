import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';



const App = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-person" size={30} color={colors.primary} />
      <Text style={styles.text}>
        If you are having trouble with iOS, try to reinstall the dependencies by
        running: cd ios to navigate to the bundle install to install Bundler If
        needed: install a Ruby Version Manager and update the Ruby version
        bundle exec pod install to install the iOS dependencies.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    fontFamily: 'Montserrat-light',
  },
});

export default App;
