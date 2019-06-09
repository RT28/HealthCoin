import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class Levels extends React.Component {
  handleItemPress = (i) => () => {
    Alert.alert('Level', 'Selected Level' + i);
  }

  render() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const levels = items.map((i) => (
      <TouchableOpacity key={i} style={{ borderRadius: 4, marginBottom: 8, backgroundColor: '#FFB74D', padding: 8, alignItems: 'center', height: 80, width: 80 }} onPress={this.handleItemPress(i)}>
        <Text style={{ fontSize: 48, color: 'white' }}>{items[i - 1]}</Text>
        <Text style={{ fontSize: 12, color: 'white', paddingBottom: 8 }}>Level</Text>
      </TouchableOpacity>
    ));
    return (
      <View style={styles.container}>
        {levels}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
})