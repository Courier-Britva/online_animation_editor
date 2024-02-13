import React from 'react';
import styles from './header.module.css';

function Header({handlePreviewClick, showPreview, handleResetClick, handleReplayClick, showPopup, SiteLogo}) {
    
    return (
        <>
            <div 
                className={styles.placeholder}
            >

            </div>

            {showPopup && (
                <div 
                className={styles.popup}
                >
                    <div 
                        className={styles.popup_content}
                    >
                        <span
                            className={styles.popup_head}
                        >
                            Please wait!
                        </span>

                        <p 
                            className={styles.popup_text}
                        >
                            We are prepare an animation preview for you. dont want to wait?
                        </p>

                        <div 
                            className={styles.popup_buttons_container}
                        >
                            <a 
                                className={styles.popup_buttons_element}
                            >
                                19$/monthly
                                <span 
                                    className={styles.popup_button_donate}
                                >
                                    Save time
                                </span>
                            </a>
                            <a 
                                className={styles.popup_buttons_element}
                            >
                                50$/onetime
                                <a 
                                    className={styles.popup_button_donate}
                                >
                                    Save time
                                </a>
                            </a>
                        </div>
                        <span
                            className={styles.popup_head}
                        >
                            What will you get?
                        </span>

                        <ul 
                            className={styles.beinfits_list}
                        >
                            <li 
                                className={styles.benifit_element}
                            >
                                instant preview for your animations
                            </li>
                            <li 
                                className={styles.benifit_element}
                            >
                                ability to download animations and use in your projects
                            </li>
                            <li 
                                className={styles.benifit_element}
                            >
                                10% discount right now
                            </li>
                        </ul>
                    </div>
                </div>

            )}

            <div 
                className={styles.header}
            >
                <div 
                    className={styles.container}
                >
                    <div 
                        className={styles.header_content}
                    >
                        <img 
                            className={styles.logo} 
                            alt='logo' 
                            src={SiteLogo}/>
                        {!showPreview &&(
                            <a 
                                className={styles.preview_button} 
                                onClick={handlePreviewClick}>
                                Preview
                            </a>
                        )}
                        {showPreview &&(
                            <div 
                                className={styles.playground_buttons_container}
                            >
                                <a 
                                    className={styles.replay_button} 
                                    onClick={handleReplayClick}
                                >
                                    Replay animation
                                </a>
                                <a 
                                    className={styles.preview_button} 
                                    onClick={handleResetClick}
                                >
                                    Go back
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;