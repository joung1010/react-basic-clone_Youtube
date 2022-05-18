import './app.css';
import YoutubeHeader from "./component/header/youtubeHeader";
import React, {Component} from 'react';
import VideoList from "./component/videoList/videoList";

class App extends Component{
    state={
        options: { method: 'GET', redirect: 'follow',},
    }

    handleVideo = () => {

      return   fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxWidth=25&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA",
            this.state.options)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));

    };


 render() {
     return (
         <>
             <YoutubeHeader/>
             <VideoList
                 videoInfo={this.state.options}
                onHandleVideo={this.handleVideo}
             />
         </>
     );
 }

}

export default App;
