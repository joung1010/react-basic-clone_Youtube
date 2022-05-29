import React, {useEffect, useState} from 'react';
import VideoList from "./component/video_list/video_list";
import YoutubeHeader from "./component/youtube_header/youtube_header";

const App = ({youtube}) => {
    const [videoList,setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSearch = (query) => {
        youtube.search(query)
            .then(items => setVideoList(items));
    };

    useEffect(()=>{
        youtube.mostPopular()
            .then(items => setVideoList(items));

    },[]);


    return (
        <section>
            <YoutubeHeader onSearch={handleSearch}/>
            <VideoList videoList={videoList}/>
        </section>

    );
};

export default App;