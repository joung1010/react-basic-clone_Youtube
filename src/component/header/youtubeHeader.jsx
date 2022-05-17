import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css'

class YoutubeHeader extends Component {
    render() {
        return (
            <header className={styles.header}>
                <span className={styles.icon}><FontAwesomeIcon icon={faYoutubeSquare} /></span>
                <span className={styles.headerName}>Youtube</span>
                <input className={styles.headerInput} type="text" placeholder="Search...."/>
                <button className={styles.headerButton}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </header>
        );
    }
}

export default YoutubeHeader;