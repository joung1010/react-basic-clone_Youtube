import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video,video:{snippet},onClickVideo,display}) => {
 const displayType = display === 'list' ? styles.list: styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onClickVideo(video)}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="thumbnail"/>
                <div className={styles.description}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channelNm}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
}
export default VideoItem;