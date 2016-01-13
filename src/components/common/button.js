var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} = React;

module.exports = React.createClass({
  render: function(){
    return (
      <TouchableHighlight
        underlayColor={'gray'}
        style={styles.button}
        onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});
