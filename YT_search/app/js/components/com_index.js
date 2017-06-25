
import _ from 'lodash';

import React, {Component} from 'react';
import YTsearch from 'youtube-api-search';

import SearchBar from './com_searchBar';
import VidList from './com_videoList';
import VidDetail from './com_videoDetail';

const apiKey = 'AIzaSyCyNCIkwOhDUYQ6V1xS3LSN5jNBsf7b91U';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: [],
      selectedVideo: null,
    };    
  } 

  updateTerm(val) {
    YTsearch({key: apiKey, term: val}, (vids) => {
      this.setState({
        vids: vids,
        selectedVideo: vids[0],
      });
    });        
  }

  selectVideo(selectedVid) {
    this.setState({selectedVideo: selectedVid});
  }

  render() {
    const seachVids = _.debounce((term) => {this.updateTerm(term)}, 500)
    console.log(this.state.selectedVideo);
    return (
      pug`
        div
          h1#pageHeading ${this.state.heading}
          ${<SearchBar updateTerm={searchVids} />}
          .grid
            ${<VidDetail selectedVid={this.state.selectedVideo} />}
            ${<VidList selectedVid={this.selectVideo.bind(this)} videos={this.state.vids} />}
      `
    );
  }
}
