import React, {Component} from 'react';
import Video from "./video";
import styles from './video.module.css'

class VideoList extends Component {

    state = {
        kind: "",
        etag: "",
        items: [],
    }

    componentDidMount() {
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA",
            this.props.videoInfo)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    kind: result.kind,
                    etag: result.etag,
                    items: result.items,
                })
            })
            .catch(error => console.log('error', error));
    }


    render() {
        return (
            <section >
                <div className={`${styles.section} ${styles.videoContainer}`}>
                    {this.state.items.map(item => (
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