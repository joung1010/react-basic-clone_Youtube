import React, { PureComponent} from 'react';
import styles from './video.module.css'

class Video extends PureComponent {
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
                <div className={styles.contents}>
                    <div>{title}</div>
                    <div className={styles.channelTitle}>{channelTitle}</div>
                </div>
            </div>
        );
    }
}

export default Video;