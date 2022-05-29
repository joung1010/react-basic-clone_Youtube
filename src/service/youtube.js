
class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        });
       return response.data.items;
    }

    async search(query) {
        const response = this.youtube.get('search', {
            params:{
                part: 'snippet',
                maxResults: 25,
                q: query,
                type:'video',
            }
        });
        return response.data.items.map(item => ({...item, id:item.id.videoId}))
    }
}
/*
*   컴포넌트는 최대한 멍청하게 만들자 (무겁게 만들지 말자)
*   외부 통신이 필요하면 그 부분만 새로 서비스로 만들어서 주입하자
*   최상위 경로에 .env 환경 변수 파일을 만들고 여기에 필요한 값을 만들자
*   이떄 prefix 로 REACT_APP 붙이고 사요은 process.env 로 접근가능
*
* */

export default Youtube;