import React from 'react';
import { View, Text } from 'react-native';

export default class Steps extends React.Component {
  render() {
    return (
      <View style={{ padding: 16 }}>
        <View style={{ backgroundColor: '#EFEFEF', padding: 8, borderRadius: 4 }}>
          <Text style={{ color: '#1565C0', textAlign: 'center', fontSize: 48 }}>3667</Text>
          <Text style={{ textAlign: 'center', marginTop: 8 }}>Steps Today</Text>
        </View>
        <View style={{ marginTop: 12, flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#90CAF9', padding: 8, borderRadius: 4, flex: 1 }}>
            <Text style={{ color: '#1565C0', textAlign: 'center', fontSize: 48 }}>10</Text>
            <Text style={{ textAlign: 'center', marginTop: 8 }}>Coins Earned Today</Text>
          </View>
          <View style={{ backgroundColor: '#1DE9B6', padding: 8, borderRadius: 4, flex: 1, marginLeft: 8 }}>
            <Text style={{ color: '#484848', textAlign: 'center', fontSize: 48 }}>30</Text>
            <Text style={{ textAlign: 'center', marginTop: 8 }}>Coins Available Today</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#EFEFEF', padding: 8, borderRadius: 4, marginTop: 12 }}>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
        <View style={{ marginTop: 12, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: '#FFB74D', padding: 8, marginRight: 8, borderRadius: 4 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <Text style={{fontSize: 30, color: 'white',  }}>#1</Text>
              <Text style={{ fontSize: 12, color: 'white',  }}>Reward</Text>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#81C784', padding: 8, marginRight: 8, borderRadius: 4 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <Text style={{fontSize: 30, color: 'white',  }}>#2</Text>
              <Text style={{ fontSize: 12, color: 'white',  }}>Reward</Text>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#F06292', padding: 8, borderRadius: 4 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <Text style={{fontSize: 30, color: 'white',  }}>#3</Text>
              <Text style={{ fontSize: 12, color: 'white',  }}>Reward</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}