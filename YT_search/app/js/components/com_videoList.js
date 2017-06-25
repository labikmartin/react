
import React, {Component} from 'react';

import VidItem from './com_videoListItem'

export default class VidList extends Component {
  render() {
    const vids = this.props.videos;
    const vidList = vids.map((vid, i) => {
      return pug`
        ${<VidItem key={vid.etag} video={vid} selectedVid={this.props.selectedVid} />}
      `;
    });
    return pug`
      .col.col-4
        ul.vidList
          ${vidList}
    `;
  }
}
