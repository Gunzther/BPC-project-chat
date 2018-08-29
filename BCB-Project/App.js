import React from 'react';
import { AppRegistry, Alert, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Container, Footer, Body, Input, Right, Button, Badge, Content, Item } from 'native-base';
import { StackNavigator, Header } from 'react-navigation';
import NavigationBar from 'react-native-navbar';

class IndexPage extends React.Component {

  static navigationOptions = { title: 'Main page', };

  FunctionToOpenSecondActivity = () => {
    this.props.navigation.navigate('ChatRoom');

  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={{ marginLeft: 130, marginBottom: 10, backgroundColor: 'red' }} onPress={this.FunctionToOpenSecondActivity}>
          <Text style={{ marginLeft: 20, marginRight: 20, color: 'white' }}>Chat-Room</Text>
        </Button>
        <Text>This is a mock-up chat button.</Text>
      </View>
    );
  }
}

class ChatRoom extends React.Component {

  static navigationOptions = { title: 'Chat room', };

  constructor(props) {
    super(props);
    this.state = {
      textChat: "",
      chat1: [],
      textFocus: false,
    };
  }

  generated() {
    var array = []
    for (let i = 0; i < this.state.chat1.length; i++) {
      array.push((
        <Badge primary style={{ marginLeft: 15, marginTop: 1, marginBottom: 5, backgroundColor: "red" }}>
          <Text style={{ color: "white", marginLeft: 5, marginRight: 5 }}>{this.state.chat1[i]}</Text>
        </Badge>
      ))
    }
    return array
  }

  handleText() {
    var currentChat = this.state.chat1
    currentChat.push(this.state.textChat)
    this.setState({ chat1: currentChat })
    // database.ref().set({ chat1: this.state.chat1 })
    // chat1.push(this.state.textChat)
    this.setState({ textChat: "" })
    this.component._root.scrollToEnd()
  }

  render() {
    return (


      <Container >


        {/* <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        /> */}

        {/* <Button><Text>Setting</Text></Button> */}

        <KeyboardAvoidingView
          keyboardVerticalOffset={Header.HEIGHT}
          style={{ flex: 1 }}
          behavior="padding"
        >

          <Content ref={c => (this.component = c)} style={{ marginTop: 15, flex: 1 }}>
            {this.generated()}
            <Item style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
              <Input placeholder="Underline Textbox" />
            </Item>
          </Content >
          <Footer style={{ justifySelf: 'flex-end' }}  >
            <Body>
              <Input placeholder='Text Input' style={{ marginLeft: 10 }} onChangeText={(massage) => { this.setState({ textChat: massage }) }} value={this.state.textChat} />
            </Body>
            <Right style={{ marginRight: 5 }}>
              <Button success style={{ marginTop: 15, marginBottom: 15 }} onPress={() => this.handleText()}>
                <Text style={{ marginLeft: 10, marginRight: 10, color: "white" }} >Send</Text>
              </Button>
            </Right>
          </Footer>



        </KeyboardAvoidingView>


      </Container >


    );
  }
}

export default Project = StackNavigator(
  {
    Main: { screen: IndexPage },
    ChatRoom: { screen: ChatRoom }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const styles = {
//   container: {
//     flex: 1,
//   },
// };

// const rightButtonConfig = {
//   title: 'Next',
//   handler: () => alert('hello!'),
// };

// const titleConfig = {
//   title: 'Hello, world',
// };
