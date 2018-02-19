import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();
    if (res.length < 1) {
      return (
        <div>
          Loading
        </div>
      )
    }
    return (
      <div>
        <h1>Hello World</h1>
        <div>
          {res[0].text}
        </div>
      </div>
    )
  }
}
