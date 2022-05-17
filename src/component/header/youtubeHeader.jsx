import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

class YoutubeHeader extends Component {
    render() {
        return (
            <header>
                <span>  <FontAwesomeIcon icon={faYoutube} /></span>
            </header>
        );
    }
}

export default YoutubeHeader;