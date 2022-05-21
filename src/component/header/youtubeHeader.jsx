import React, { PureComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css'

class YoutubeHeader extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();

    handleSearch = (event) => {
        event.preventDefault();
        const searchName = this.inputRef.current.value;
        searchName && this.props.onHandleSearch(searchName);
        this.formRef.current.reset();
    }

    render() {
        return (
            <section>
                <form ref={this.formRef} onSubmit={this.handleSearch}>
                    <div className={`${styles.section} ${styles.header}`}>
                        <div className={styles.headerNameBox}>
                            <div className={styles.icon}><FontAwesomeIcon icon={faYoutubeSquare}/></div>
                            <div className={styles.headerName}>Youtube</div>
                        </div>
                        <div className={styles.headerBox}>
                            <input ref={this.inputRef} className={styles.headerInput} type="text"
                                   placeholder="Search...."/>
                            <button className={styles.headerButton} >
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default YoutubeHeader;