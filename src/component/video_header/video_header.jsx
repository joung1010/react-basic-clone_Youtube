import React, {useRef} from 'react';
import styles from './video_header.module.css'

const VideoHeader = ({onSearch}) => {

    const inputRef = useRef();
    const onHandleSearch = ()=>{
        const query = inputRef.current.value;
        onSearch(query);
    }
    const onKeyPress = (event)=>{
        if (event.key === 'Enter') {
            onHandleSearch();
        }
    };
    const onClick = () => {
        onHandleSearch();
    };

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="img/logo.png" alt=""/>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder={`search....`}
                onKeyPress={onKeyPress}
            />
            <button className={styles.button}>
                <img className={styles.btnImg} src="img/search.png" alt="search" onClick={onClick}/>
            </button>
        </header>
    );
}

export default VideoHeader;