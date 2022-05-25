import React, {useEffect, useState} from 'react';
import VideoList from "./component/video_list/video_list";
import {logDOM} from "@testing-library/react";

const App = (props) => {
    const [videoItems,setVideoItems] = useState([]);

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA", requestOptions)
            .then(response => response.json())
            .then(result => setVideoItems(result.items))
            .catch(error => console.log('error', error));
    },[]);

    return(
       <VideoList videoItems={videoItems}/>
)
};

export default App;