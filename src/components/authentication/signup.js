var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

var Button = require('../common/button');
var Parse = require('parse/react-native');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    };
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <Text style={styles.label}>Username</Text>
          <TextInput
            style = {styles.input}
            value = {this.state.username}
            onChangeText={(text) => this.setState({username: text})}
          />

          <Text style={styles.label}>Password</Text>
            <TextInput
              style = {styles.input}
              secureTextEntry={true}
              value = {this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />

            <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style = {styles.input}
                secureTextEntry={true}
                value = {this.state.passwordConfirmation}
                onChangeText={(text) => this.setState({passwordConfirmation: text})}
              />
              <Text style={styles.label}>{this.state.errorMessage}</Text>
              <Button text={'Sign Up'} onPress={this.onSignupPress}/>
              <Button text={'I have an account...'} onPress={this.onSigninPress}/>

      </View>
    );
  },
  onSignupPress: function() {
    if (this.state.password !== this.state.passwordConfirmation) {
      return this.setState({errorMessage: 'Your passwords do not match'});
    }

    var user = new Parse.User();
    user.set('username',this.state.username);
    user.set('password',this.state.password);

    user.signUp(null, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'online'}]); },
      error: (user, error) => { this.setState({ errorMessage: error.message}) }
    })
  },

  onSigninPress: function() {
    this.props.navigator.pop();
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});
