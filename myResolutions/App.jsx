import React from 'react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends React.Component {

  addResolutions (event) {
    evnt.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form className="new-resolution" onSubmit={this.addResolutions.bind(this)}>
          <input
            type="text"
            ref="resolution"
            placeholder="Finish React Meteor Series"
          />
        </form>
      </div>
    )
  }
}
