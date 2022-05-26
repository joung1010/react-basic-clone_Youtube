import React from 'react';
import styles from './youtube_header.module.css'

const YoutubeHeader = (props) => (
   <header className={styles.header}>
       <div className={styles.logo}>
           <img className={styles.img} src="/img/logo.png" alt="logo"/>
           <h2 className={styles.title}>YouTube</h2>
       </div>
      <input className={styles.input} type="search" placeholder={`...Search`}/>
       <button className={styles.searchBtn}>
           <img className={styles.btnImg} src="/img/search.png" alt="search"/>
       </button>
   </header>
);

export default YoutubeHeader;