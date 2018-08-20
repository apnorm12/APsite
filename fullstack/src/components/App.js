// Defines the App component

import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

var name = "Aaron's";
var friend = "Jeff"
var message = "Hi " + friend + ", do you like " + name + " website?";

class App extends React.Component {
  state = {
    pageHeader: "Naming Contests",
    contests: []
  };
  componentDidMount() {
    axios.get('/api/contests') //gives us a promise
    //.then gives us a response object
    .then(resp => {
      // this line showed the response - and we could see a data field
      // console.log(resp); - know we want resp.data.contests in setState
      this.setState({
        contests: resp.data.contests
      });
    })
    .catch(console.error);


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
  			<Header message={this.state.pageHeader}/>
  			<div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
  			</div>
  		</div>
  	);
  }
}

export default App;




// componentWillUnmount() {
//   console.log('Will Unmount');
//   debugger;
// }
