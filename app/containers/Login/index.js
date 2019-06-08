import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Login extends React.Component {
  handleNavigation = (screen) => () => {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <View style={{ flex: 1, justifyContent: 'center',
      alignItems: 'center' }}>
          <View>
            <Button title="Login" onPress={this.handleNavigation('Dashboard')} />
          </View>
          <View>
            <Button title="Login with Facebook" onPress={this.handleNavigation('Dashboard')} />
          </View>
          <View>
            <Button title="Login with Google" onPress={this.handleNavigation('Dashboard')} />
          </View>
          <View>
            <Button title="Signup" onPress={this.handleNavigation('Register')} />
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