import React from 'react';

import Header from '../components/Header'

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'About project',
    }
  }

  render() {
    return (
      pug`
        ${<Header title={this.state.title} />}
      `
    );
  }
}
