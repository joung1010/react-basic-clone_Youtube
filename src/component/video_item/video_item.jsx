import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video,video:{snippet},onClick,dispaly}) => {
    const displayType = dispaly === 'list' ? styles.list : styles.grid;
    return(
        <li className={`${displayType} ${styles.container}`} onClick={()=>onClick(video)}>
            <div className={styles.video}>
                <img className={styles.img} src={snippet.thumbnails.medium.url} alt="thumbnail"/>
                <div className={styles.description}>
                    <h3 className={styles.title}>{snippet.title}</h3>
                    <h4 className={styles.channelTitle}>{snippet.channelTitle}</h4>
                </div>
            </div>
        </li>
    );
}

export default VideoItem;