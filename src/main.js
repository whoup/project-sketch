var React = require('react-native');

var {
  StyleSheet,
  Navigator
} = React;

var Signin = require('./components/authentication/signin');
var Parse = require('parse/react-native');
var Signup = require('./components/authentication/signup');
var Online= require('./components/tweets/online');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  online: Online
}
module.exports = React.createClass({

  componentWillMount: function(){
    Parse.initialize("JY0H4vWqjKZnRrwMqz4y0tx4AK1Fns2AFjlOnTK5", "JBmHTIjdOLHiYxk3CZe0WUuV62Dp1rcgh62BRlZG");
  },

  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
