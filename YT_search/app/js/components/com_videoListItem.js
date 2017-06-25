
import React, {Component} from 'react';

export default class VidItem extends Component {
  render() {
    const vid =     this.props.video,
          vidId =   vid.id.videoId,
          vidSnip = vid.snippet;
    return pug`
      li.videoItem.col(onClick = ${() => this.props.selectedVid(vid)})
        img.videoItem__tmb(src=${vidSnip.thumbnails.default.url})
        span.videoItem__title ${vidSnip.title}
    `;
  }
}