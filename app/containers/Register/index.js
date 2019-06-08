import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Register extends React.Component {
  handleNavigation = (screen) => () => {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <View style={{ flex: 1, justifyContent: 'center',
      alignItems: 'center' }}>
          <View>
            <Button title="Register" onPress={this.handleNavigation('VerifyPhone')} />
          </View>
          <View>
            <Button title="Login" onPress={this.handleNavigation('Login')} />
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
});