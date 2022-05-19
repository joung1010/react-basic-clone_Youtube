import './app.css';
import YoutubeHeader from "./component/header/youtubeHeader";
import React, {Component} from 'react';
import VideoList from "./component/videoList/videoList";

class App extends Component{
    state={
        options: { method: 'GET', redirect: 'follow',},
    }



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
