import React, {Component} from 'react';
import Video from "./video";
import styles from './video.module.css'

class VideoList extends Component {


    render() {
        return (
            <section >
                <div className={`${styles.section} ${styles.videoContainer}`}>
                    {this.props.videoItems.map(item => (
                        <Video key={item.id}
                               snippet={item.snippet}
                        />
                    ))
                    }
                </div>
            </section>
        );
    }
}

export default VideoList;