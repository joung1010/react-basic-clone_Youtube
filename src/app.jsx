import React, {useEffect, useState} from 'react';
import VideoList from "./component/video_list/video_list";
import YoutubeHeader from "./component/youtube_header/youtube_header";
import VideoDetail from "./component/video_detail/video_detail";
import styles from './app.module.css'

const App = ({youtube}) => {
    const [videoList,setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSearch = (query) => {
        youtube.search(query)
            .then(items => {
                setSelectedVideo(null);
                setVideoList(items)
            });
    };

    const handleClick = (video) => {
        setSelectedVideo(video);
    };

    useEffect(()=>{
        youtube.mostPopular()
            .then(items => setVideoList(items));

    },[]);


    return (
        <div className={styles.app}>
            <YoutubeHeader onSearch={handleSearch}/>
            <section className={styles.content}>
                {  selectedVideo &&
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo}/>
                    </div>
                }
                <div className={styles.list}>
                    <VideoList videoList={videoList} onClickVideo={handleClick}
                    display={selectedVideo ? "list" : "grid"}/>
                </div>
            </section>
        </div>

    );
};

export default App;