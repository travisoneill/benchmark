const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionTwo = React.createClass({
  render(){
    return(
      <div>
        <ul>
          <p>To test your algorithm, please input it into the text pane of your choice, and pick one of our sorts for the other pane.
          Once you press Run Tests, we will benchmark your code server-side with the use of virtual machines.
          Due to limitations of these virtual machines, we cannot currently allow the use of Promises, or the requirement of any external modules/packages.
          We do not currently have a leaderboard, but that is in the pipene! </p>
        </ul>
      </div>
    );
  }

});

module.exports = SiteDescriptionTwo;