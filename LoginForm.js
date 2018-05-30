import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

//a few things about TextInput because they are a bit of a pain in the ass
//by default they render with a height and width of 0
//they also have zero styling in general
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '' };
    }

    OnButtonPress() {
 //destructuring code to make it easier since we are using the same object twice
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ error: 'Escreve certo isso ae' });
            });
        }); 
    }

    render() {
        return (
            <Card>
             <CardSection>
                 <Input 
                 label="Email"
                 //inputtext by defaut draws a line in the end of its View
                 underlineColorAndroid='transparent'
                 placeholder="exemplo@gmail.com"
                 //text is the text the user just entered
                 OnChangeText={email => this.setState({ email })}   
                 //when textInput rerenders because of how state works...
                 //we tell its new value
                 value={this.state.email}                 
                 />
             </CardSection>

             <CardSection>
                <Input
                 underlineColorAndroid='transparent'
                 label="Password"
                 secureTextEntry
                 placeholder="password"
                 OnChangeText={password => this.setState({ password })}
                 value={this.state.password}
                />
             </CardSection>
                
                <Text style={styles.errorTextStyle}> {this.state.email} </Text>

             <CardSection>
              <Button onPress={this.OnButtonPress.bind(this)}>
                  Log In
              </Button>
             </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
