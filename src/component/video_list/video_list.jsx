import React from 'react';
import VideoItem from "../video_tiem/video_item";
import styles from './video_list.module.css'

const VideoList = ({videoList,onClickVideo,display}) => (
    <ul className={styles.list}>
        {
            videoList.map(video => (
              <VideoItem
                  key={video.id}
                  video={video}
                  onClickVideo={onClickVideo}
                  display={display}
              />
            ))
        }
    </ul>
);

export default VideoList;