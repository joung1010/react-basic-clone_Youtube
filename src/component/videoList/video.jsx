import React, {Component} from 'react';
import styles from './video.module.css'

class Video extends Component {
    render() {
        const {title, thumbnails, channelTitle} = this.props.snippet;
        return (
            <div className={styles.video}>
                <img
                    src={thumbnails.default.url}
                    width={thumbnails.default.width}
                    height={thumbnails.default.height}
                    className={styles.thumbnail}
                />
                <div>
                    <div>{title}</div>
                    <div>{channelTitle}</div>
                </div>
            </div>
        );
    }
}

export default Video;