import React, {useCallback, useEffect, useState} from 'react';
import styles from './app.module.css'
import VideoList from "./component/video_list/video_list";
import SearchHeader from "./component/search_header/search_header";
import VideoDetail from "./component/video_detail/video_detail,";


function App({youtube}) {
    const [videos,setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo= (video)=>{
        setSelectedVideo(video);
    };

    const search = useCallback( (query)=>{
        youtube.search(query)
            .then(items => {
                setVideos(items)
                setSelectedVideo(null);
            });
    },[youtube]);

    // 업데이트 할때마다 네트워크 동신을 하는 것은 좋지 않다.
    // 텅텅 빈 배열을 인자로 넘겨주면 mount가 되었을 때만 호출된다.
    // 만약 특정 state가 업데이트될떄마다 업데이트가 되었으면 좋겠으면 [video] <- 이런식으로 해당 인자를 넘겨주면된다
    useEffect(()=>{
        youtube.mostPopular()
            .then(items => setVideos(items));
    },[youtube]);

    return (
      <div className={styles.app}>
        <SearchHeader onSearch={search}/>
          <section className={styles.content}>
              {selectedVideo && <div className={styles.detail}>
                 <VideoDetail video={selectedVideo}/>
             </div>}
              <div className={styles.list}>
                  <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
              </div>
          </section>
      </div>
  );
}

export default App;
