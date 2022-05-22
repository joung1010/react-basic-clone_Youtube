import React, {Component} from 'react';
import styles from './video.module.css'
import VideoList from "./videoList";

class VideoDetail extends Component {
    render() {
        return (
            <section>
                <div className={`${styles.section} ${styles.videoDetailContainer}`}>
                   <div className={styles.videoItem}>
                       <iframe id={this.props.videoId} type="text/html" width="620" height="405"
                               src={`https://www.youtube.com/embed/${this.props.videoId}`}
                               frameBorder="0" allowFullScreen />
                       <div>
                           {this.props.snippet.title}
                       </div>
                       <div>
                           {this.props.snippet.description}
                       </div>
                   </div>
                    <div className={styles.videoList}>
                        <VideoList
                            videoInfo={this.props.videoInfo} videoItems={this.props.videoItems}
                            onHandleClick={this.props.onHandleClick}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoDetail;