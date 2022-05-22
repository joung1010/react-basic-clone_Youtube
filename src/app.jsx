import React, {useEffect, useState} from 'react';
import './app.css';
import VideoList from "./component/video_list/video_list";

function App() {
    const [videos,setVideos] = useState([]);
    // 업데이트 할때마다 네트워크 동신을 하는 것은 좋지 않다.
    // 텅텅 빈 배열을 인자로 넘겨주면 mount가 되었을 때만 호출된다.
    // 만약 특정 state가 업데이트될떄마다 업데이트가 되었으면 좋겠으면 [video] <- 이런식으로 해당 인자를 넘겨주면된다
    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA",
            requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    },[]);

  return (
   <VideoList videos={videos}/>
  );
}

export default App;
