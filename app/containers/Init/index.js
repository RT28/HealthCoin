import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Init extends React.Component {
  handleNavigation = (screen) => () => {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Init</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Button title="Login" onPress={this.handleNavigation('Login')} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="Register" onPress={this.handleNavigation('Register')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
})