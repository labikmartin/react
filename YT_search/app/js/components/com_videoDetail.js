
import React, {Component} from 'react';

export default class VidDetail extends Component {
  render() {
    const vid =     this.props.selectedVid;
    if (!vid) {
      return false;
    }
    const vidId =   vid.id.videoId,
          vidUrl = `https://www.youtube.com/embed/${vidId}`,
          vidSnip = vid.snippet;
    return pug`
      div.col.col-8
        iframe(width='100%', height='400', src=${vidUrl}, frameborder='0', allowfullscreen)
        h4 ${vidSnip.title}
        p ${vidSnip.description}
    `;
  }
}