import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default class VerifyPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }
  handleNavigation = (screen) => () => {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Verify Phone</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <View>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
              onChangeText={(otp) => this.setState({ otp })}
              value={this.state.otp}
              placeholder="Enter OTP"
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <View style={{ flex: 1 }}>
              <Button title="Submit OTP" onPress={this.handleNavigation('Dashboard')} />
            </View>
            <View style={{ flex: 1 }}>
              <Button title="Cancel" onPress={this.handleNavigation('Register')} />
            </View>  
          </View>
          <View style={{ marginTop: 32, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text>Didn't receive OTP. Please verify your phone number or press</Text>
            </View>
            <View>
              <Button title="Resend OTP" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});