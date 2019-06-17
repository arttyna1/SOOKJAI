import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image,TouchableOpacity,Button,Dimensions } from 'react-native';
import { Constants } from 'expo';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.paragraph}>
            เลือกภาษา Language
          </Text>
        </View>
        <View style={styles.btn}>
        <Button 
          title="ไทย"/>
        </View>
        <View style={styles.btn}>
        <Button
          title="English"/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});