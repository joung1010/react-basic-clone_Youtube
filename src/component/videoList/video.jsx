import React, {PureComponent} from 'react';
import styles from './video.module.css'

class Video extends PureComponent {

    handleClick = (event)=>{
        event.preventDefault();
      this.props.onHandleClick(this.props.snippet,this.props.id);
    };

    render() {
        const {title, thumbnails, channelTitle} = this.props.snippet;
        return (
            <div className={styles.video}>
                <a onClick={this.handleClick}>
                    <img
                        src={thumbnails.default.url}
                        width={thumbnails.default.width}
                        height={thumbnails.default.height}
                        className={styles.thumbnail}
                    />
                </a>
                <div className={styles.contents}>
                    <div>{title}</div>
                    <div className={styles.channelTitle}>{channelTitle}</div>
                </div>
            </div>
        );
    }
}

export default Video;