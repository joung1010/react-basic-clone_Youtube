import React from 'react';
import VideoItem from "../video_item/video_item";
import styles from './video_list.module.css';

const VideoList = ({videoList,onClick,display}) => (
   <ul className={styles.list}>
      {
         videoList && videoList.map(video => (
             <VideoItem
                 video={video}
                 key={video.id}
                 onClick={onClick}
                 dispaly={display}
             />
         ))
      }
   </ul>
);

export default VideoList;