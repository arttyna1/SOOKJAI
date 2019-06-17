import * as React from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Test
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
});
