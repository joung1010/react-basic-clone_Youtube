import React, {useEffect, useState} from 'react';
import VideoList from "./component/video_list/video_list";
import VideoHeader from "./component/video_header/video_header";
import styles from './app.module.css';
import VideoDetail from "./component/video_detail/video_detail";

const App = ({youtube}) => {
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const search = (query) => {
        youtube.search(query)
            .then(items => {
                setSelectedVideo(null);
                setVideoList(items);
            });
    };

    const click = (video) => {
        setSelectedVideo(video);
    };

    useEffect(() => {
        youtube.mostPopular()
            .then(items => setVideoList(items));
    }, []);

    return (
        <div className={styles.app}>
            <VideoHeader onSearch={search}/>
           <section className={styles.contents}>
               {selectedVideo && <div className={styles.video}>
                   <VideoDetail video={selectedVideo}/>
               </div>}
              <div className={styles.list}>
                  <VideoList videoList={videoList}
                             onClick={click}
                             display={selectedVideo ? "grid" : "list"}
                  />
              </div>
           </section>
        </div>

    );
}
export default App;