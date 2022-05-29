import React, {useRef} from 'react';
import styles from './youtube_header.module.css'

const YoutubeHeader = ({onSearch}) => {
    const inputRef = useRef();

    const onHandleSearch = () => {
        const query = inputRef.current.value;
        onSearch(query);
        inputRef.current.value ='';
    };

    const onHandleClick = () => {
        onHandleSearch();
    };

    const onHandlePress = (event) => {
        if (event.key === 'Enter') {
            onHandleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/img/logo.png" alt="logo"/>
                <h2 className={styles.title}>YouTube</h2>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder={`...Search`} onKeyPress={onHandlePress}/>
            <button className={styles.searchBtn}>
                <img className={styles.btnImg} src="/img/search.png" alt="search" onClick={onHandleClick}/>
            </button>
        </header>
    );

}

export default YoutubeHeader;