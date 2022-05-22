import React, {Component} from 'react';
import Video from "./video";
import styles from './video.module.css'

class VideoList extends Component {


    render() {
        return (
                <div className={`${styles.section} ${styles.videoContainer}`}>
                    {this.props.videoItems.map(item => (
                        <Video key={item.id.videoId ? item.id.videoId : item.id}
                               id={item.id}
                               snippet={item.snippet}
                               onHandleClick={this.props.onHandleClick}
                        />
                    ))
                    }
                </div>
        );
    }
}

export default VideoList;