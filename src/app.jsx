import './app.css';
import YoutubeHeader from "./component/header/youtubeHeader";
import React, {Component} from 'react';
import VideoList from "./component/videoList/videoList";

class App extends Component{
    state={
        options: { method: 'GET', redirect: 'follow',},
        kind: "",
        etag: "",
        items: [],
    }

    componentDidMount() {
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA",
            this.state.options)
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

    handleSearch = (search) =>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyAbqjAMe0t9nrmoK55BlzHHLMlTmE6ASSA`,
            this.state.options)
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
         <>
             <YoutubeHeader
                onHandleSearch={this.handleSearch}
             />
             <VideoList
                 videoInfo={this.state.options}
                 videoItems={this.state.items}
             />
         </>
     );
 }

}

export default App;
