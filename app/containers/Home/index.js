import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Home extends React.Component {
  handleProfileNavigation = () => {
    this.props.navigation.navigate('Profile');
  }

  handleBannerPress = () => {
    Linking.canOpenURL('https://www.google.com/')
    .then((supported) => {
      if (supported) {
        Linking.openURL('https://www.google.com/');
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }

  renderProfileView() {
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row', backgroundColor: '#1565C0', borderRadius: 4, padding: 12 }}
        onPress={this.handleProfileNavigation}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, marginBottom: 8, color: 'white' }}>Satish Bhadra</Text>
          <Text style={{ fontSize: 12, color: 'white' }}>9876543210</Text>
        </View>
        <View style={{ borderRadius: 25, height: 50, width: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#1565C0' }}>SB</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderBanner(uri) {
    return (
      <TouchableOpacity style={{ marginTop: 16, height: 300, width: '100%' }} onPress={this.handleBannerPress}>
        <Image source={{ uri }} resizeMode="cover" style={{ flex: 1, backgroundColor: '#EEEEEE', borderRadius: 4 }} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, padding: 16, backgroundColor: '#F1F1F1' }}>
          {this.renderProfileView()}  
          {this.renderBanner('https://cdn.prezzybox.com/Images/59368.jpg')}
          {this.renderBanner('https://cdn1.vectorstock.com/i/1000x1000/43/20/fitness-quote-and-saying-train-hard-enough-vector-23004320.jpg')}
          {this.renderBanner('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-GsbxEFAdLPigMVAmQGoKeJZp1EUmV0RrCxhpzFjVhO-oKBr')}
          {this.renderBanner('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8TV0HTKWVkM9duMSqLjJnr0h_uilKpZMlpbWA0nCwhSdb98tWA')}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}