import React from 'react';

import Header from '../components/Header'

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome Martin!',
    }
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      pug`
        ${<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />}
      `
    );
  }
}
