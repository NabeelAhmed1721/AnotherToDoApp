import React from 'react';
import Note from './note';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      noteArray: [],
      textInputValue: '',
    };
  }

  render() {
    let notes = this.state.noteArray.map((note, index) => {
      return (
        <Note
          key={index}
          keyProp={index}
          text={note.text}
          deleteMethod={() => this.deleteNote(index)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Another To-Do App</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* <Note text="Remember to finish that app!" /> */}
          {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter note here..."
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            returnKeyType="send"
            onChange={value =>
              this.setState({
                textInputValue: value.nativeEvent.text,
              })
            }
            value={this.state.textInputValue}
            onSubmitEditing={() => {
              this.addNote();
            }}
          />
        </View>
      </View>
    );
  }
  addNote() {
    this.state.noteArray.push({text: this.state.textInputValue});
    this.setState({
      noteArray: this.state.noteArray,
      textInputValue: '',
    });
  }
  deleteNote(index) {
    this.state.noteArray.splice(index, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 50,
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 100,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  textInput: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
});
