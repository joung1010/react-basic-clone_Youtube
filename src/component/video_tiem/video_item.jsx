import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video,video:{snippet}}) => (
    <li className={styles.container}>
     <div className={styles.video}>
         <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="thumbnail"/>
         <div className={styles.description}>
             <p className={styles.title}>{snippet.title}</p>
             <p className={styles.channelNm}>{snippet.channelTitle}</p>
         </div>
     </div>
    </li>
);

export default VideoItem;