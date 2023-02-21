import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import colors from "./Colors";
import AddListModal from "./AddListModal";


export default class App extends Component {
    state = {
        addTodoVisibility: false,
    }

    toggleAddTodoVisibility() {
        this.setState({ addTodoVisibility: !this.state.addTodoVisibility });
    }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisibility} onRequestClose={() => this.toggleAddTodoVisibility()}>
            <AddListModal/>
        </Modal>
        <View style={{flexdirection: "row"}}>
            <Text style={styles.title}>
                <Text style={{fontWeigth:"300", color:'#A7CBD9', fontSize: "50" }}>Sleek</Text>
                <Text style={{fontWeigth:"300", color:'#8E8E93', fontSize: "40" }}>Todo</Text>
            </Text> 
        </View>

            <View style={{marginVertical:48}}>
                <TouchableOpacity style={styles.addListItemStyle} onPress={() => this.toggleAddTodoVisibility()}>
                    <Text style={{fontWeigth:"300", color:'#1C1C1E', fontSize: "30" }}>+</Text>
                </TouchableOpacity>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 1,
  },
  addListItem: {
    borderWidth: 2,
    borderColor: '#8E8E93',
  },
});
