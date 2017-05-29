import React from 'react';

import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title)
  }
  render() {
    return (
      pug`
        div
          h1 ${this.props.title}
          ${<Link to='about'>about</Link>}
          input(value=${this.props.title}, onChange=${this.handleChange.bind(this)})
      `
    );
  }
}
