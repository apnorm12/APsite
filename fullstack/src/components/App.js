// Defines the App component

import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
// import axios from 'axios';

// just abstracted so this is the only function that needs to be modified
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: "Naming Contests",
    contests: this.props.initialContests
  };
  componentDidMount() {
    // axios.get('/api/contests')
    //   .then(resp => {
    //     this.setState({
    //       contests: resp.data.contests
    //     });
    //   })
    //   .catch(console.error);
    // timers. listeners
    // console.log(this.props);
    // console.log(this.props.contests);
    // debugger;
  }
  componentWillUnmount() {
    // clear timers, listeners
  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
  };

  render() {
    return (
  		<div className="App">
  			<Header message={this.state.pageHeader}/>
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}/>
  		</div>
  	);
  }
}

export default App;
