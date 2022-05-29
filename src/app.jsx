import React, {useEffect, useState} from 'react';
import VideoList from "./component/video_list/video_list";
import YoutubeHeader from "./component/youtube_header/youtube_header";

const App = (props) => {
    const [videoList,setVideoList] = useState([]);
    const [searchItem, setSearchItem] = useState(null);

    const handleSearch = (query) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${query}&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA`,
            requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item=>({...item , id:item.id.videoId})))
            .then(items => setSearchItem(items))
            .catch(error => console.log('error', error));
    };

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA", requestOptions)
            .then(response => response.json())
            .then(result => setVideoList(result.items))
            .catch(error => console.log('error', error));
    },[]);


    return (
        <section>
            <YoutubeHeader onSearch={handleSearch}/>
            <VideoList videoList={videoList}/>
        </section>

    );
};

export default App;