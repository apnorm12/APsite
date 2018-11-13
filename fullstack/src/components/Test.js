import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

var name = "Aaron's";
var friend = "Jeff"
var message = "Hi " + friend + ", do you like " + name + " website?";

class Test extends React.Component {

  componentDidMount() {
    // timers. listeners
    // console.log(this.props);
    // console.log(this.props.contests);
    // debugger;
  }
  componentWillUnmount() {
    // clear timers, listeners
  }
  render() {
    return (
  		<div className="App">
  			<Header>
          Hello World
        <Header/>
  		</div>
  	);
  }
}

export default Test;
