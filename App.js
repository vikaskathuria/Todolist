/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
let count = 0

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  CheckBox
} from 'react-native';

import Styles from "./Styles"
import Buttons from "./Bottons"

const { height, width } = Dimensions.get('window');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ActiveUsersTab: false,
      ActiveData: [1, 2,],
      PendingData: [],
      Data: [],
      todo: '',
      loading: false,
      type: "Add",
      item: null, ind: 0,
    }
  }

  handleTodo = () => {
    const { todo, type, item, ind, Data } = this.state
    if (todo.trim()) {
      if (type == "Add") {
        let arr = []
        Data.push({ name: todo, check: false })
        this.setState({ Data: Data, todo: '' })

      } else if (type == "Edit") {
        Data[ind].name = todo
        this.setState({ todo: '',type:"Add" })
      }

    }    
  }

  handleEdit(item, ind) {
    this.setState({ type: "Edit", item: item, todo: item.name, ind: ind })
    this.todoInput.focus()
  }

  handleCheck(item, index) {
    const { Data } = this.state
    Data[index].check = !Data[index].check
    this.setState({ loading: false })
  }

  deleteTodo(item, index) {
    const { Data } = this.state
    //  Data.splice(index, 1);
    let a = Data.filter((it, ind) => ind !== index);
    this.setState({ Data: a })
  }

  renderItem = ({ item, index }) => {
    const { Data, ActiveUsersTab } = this.state

    if (!ActiveUsersTab && !item.check) {
      return (
        <View style={Styles({ count: count }).AddonRenderItemView}>

          <View style={Styles().AddonRenderItemTextView}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <CheckBox
                value={item.check}
                onValueChange={() => this.handleCheck(item, index)}
              // style={styles.checkbox}
              />
            </View>
            <View style={{ flex: 9, marginHorizontal: height / 100, justifyContent: 'center', }}>
              <Text style={Styles({ status: item.status }).AddonRenderItemText}>{item.name}</Text>

            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={Styles().AddonRenderItemButtonView1}>
              <Buttons
                Label={"Edit"}
                OnPress={() => this.handleEdit(item, index)}
                BackColors={"#00E096"}
              />
            </View>
            <View style={Styles().AddonRenderItemButtonView2}>
              <Buttons
                Label={"Delete"}
                OnPress={() => this.deleteTodo(item, index)}
                BackColors={"#FF3D71"}
                ButtonHorPadding={width / 40}
              />
            </View>
          </View>
        </View>
      )
    }
    else if (ActiveUsersTab && item.check) {
      return (
        <View style={Styles({ count: count }).AddonRenderItemView}>

          <View style={Styles().AddonRenderItemTextView}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <CheckBox
                value={item.check}
                onValueChange={() => this.handleCheck(item, index)}
              // style={styles.checkbox}
              />
            </View>
            <View style={{ flex: 9, marginHorizontal: height / 100, justifyContent: 'center', }}>
              <Text style={Styles({ status: item.status }).AddonRenderItemText}>{item.name}</Text>

            </View>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={Styles().AddonRenderItemButtonView1}>
              <Buttons
                Label={"Edit"}
                OnPress={() => this.handleEdit(item, index)}
                BackColors={"#00E096"}
              />
            </View>
            <View style={Styles().AddonRenderItemButtonView2}>
              <Buttons
                Label={"Delete"}
                OnPress={() => this.deleteTodo(item, index)}
                BackColors={"#FF3D71"}
                ButtonHorPadding={width / 40}
              />
            </View>
          </View>
        </View>
      )
    }

  }
  onAddButtonPress() { }

  render() {
    const { ActiveUsersTab, ActiveData, PendingData, todo, Data, type } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ height: height / 12, width: width, }}>
            <View style={{ flex: 1., flexDirection: 'row', borderBottomColor: "#788eec", borderBottomWidth: StyleSheet.hairlineWidth * 2, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 5 }}>
                <TouchableOpacity
                  style={Styles({ IsActive: ActiveUsersTab, showrightborder: true }).TabStyle}
                  onPress={() => { this.setState({ ActiveUsersTab: true }); }}>
                  <Text style={Styles({ IsActive: ActiveUsersTab }).TabTextStyle}>Complete</Text></TouchableOpacity>

              </View>
              <View style={{ flex: 5 }}>

                <TouchableOpacity
                  style={Styles({ IsActive: !ActiveUsersTab, showrightborder: false }).TabStyle}
                  onPress={() => this.setState({ ActiveUsersTab: false })}><Text style={Styles({ IsActive: !ActiveUsersTab }).TabTextStyle}>Incomplete</Text></TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={{ flex: 8, backgroundColor: "lightgrey" }}>
            <View style={{ flex: 1 }}>
              <FlatList
                data={Data}
                extraData={this.state}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

          </View>
          <View style={{
            height: height / 6, width: width, justifyContent: 'center', alignItems: 'center'
          }}>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder='Add new entity'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => this.setState({ todo: text })}
                value={todo}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                ref={todo => { this.todoInput = todo }}
              />
              <TouchableOpacity style={styles.button} onPress={() => this.handleTodo()}>
                <Text style={styles.buttonText}>{type}</Text>
              </TouchableOpacity>
            </View>


          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    height: 80,
    width: "80%",
    // marginTop: 40,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: '#788eec',
    width: 80,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  checkbox: {
    alignSelf: "center",
  },
})
