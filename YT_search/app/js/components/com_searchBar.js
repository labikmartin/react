
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    }
  }

  handleTerm(text) {
    this.props.updateTerm(text);
  }

  writeTerm(e) {
    const heading = document.getElementById('pageHeading'),
          input =   e.target,
          inputVal = input.value,
          term = this.state.searchTerm;
    this.setState({searchTerm: inputVal});
    this.handleTerm(inputVal);
  }  

  render() {
    return pug`
      div
        label.col-12(for='search') Search videos
        input#search.vidSearch(type='text', value=${this.state.searchTerm}, name='search', placeholder='Write here', onChange=${this.writeTerm.bind(this)})
    `
  }
};


