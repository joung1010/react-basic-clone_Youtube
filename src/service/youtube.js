class Youtube {
    constructor(key) {
        this.key = key;
        this.options  = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    mostPopular = async () => {
        let response =await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.options);
        console.log(response);
        let result = await  response.json();
        return result.items;
    };

    search = async (query) => {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=25&q=${query}&key=${this.key}`,
            this.options);
        let result =await response.json();
        return result.items.map(item => ({...item, id:item.id.videoId}));
    };
}

export default Youtube;