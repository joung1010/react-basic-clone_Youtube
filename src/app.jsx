import './app.css';
import YoutubeHeader from "./component/header/youtubeHeader";
import React, {Component} from 'react';
import VideoList from "./component/videoList/videoList";
import VideoDetail from "./component/videoList/videoDetail";

class App extends Component {
    state = {
        options: {method: 'GET', redirect: 'follow',},
        kind: "",
        etag: "",
        items: [],
        isDetail: false,
        snippet: {},
        videoId:"",
    };

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
    };


    handleSearch = (search) => {
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
    };
    handleOnClick = (snippet,videoId) => {
        this.setState({isDetail : true, snippet:snippet,videoId:videoId})
    };

    render() {
        const isDetail = this.state.isDetail;
        return (
            <>
                <YoutubeHeader
                    onHandleSearch={this.handleSearch}
                />
                <section>
                    {
                        isDetail
                            ? <VideoDetail snippet={this.state.snippet} videoId={this.state.videoId}
                                           videoInfo={this.state.options} videoItems={this.state.items}
                                           onHandleClick={this.handleOnClick}
                            />
                            :<VideoList  videoInfo={this.state.options} videoItems={this.state.items}
                                onHandleClick={this.handleOnClick}
                            />
                    }
                </section>
            </>
        );
    }

}

export default App;
