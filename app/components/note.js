import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyProp} style={styles.noteContainer}>
        <Text style={styles.noteText}>{this.props.text}</Text>
        <TouchableOpacity
          style={styles.noteDelete}
          onPress={this.props.deleteMethod}
        />
      </View>
    );
  }
}

const noteWidth = Dimensions.get('screen').width - 60;
const textWidth = noteWidth - (25 + 20);

const styles = StyleSheet.create({
  noteContainer: {
    width: noteWidth,
    height: 100,
    backgroundColor: '#fadadd',
    marginTop: 30,
  },
  noteText: {
    width: textWidth,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  noteDelete: {
    position: 'absolute',
    width: 25,
    height: 100,
    backgroundColor: '#e75480',
    right: 0,
  },
});
