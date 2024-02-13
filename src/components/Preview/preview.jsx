import React, { useEffect, useRef } from 'react';
import styles from './preview.module.css';

function Preview({ settings, isReplayEnabled, PLaygroundImg}) {
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            if(settings.img.replay === true){
                imgRef.current.style.setProperty('--start-img-infinite', "infinite");
            }else{
                imgRef.current.style.setProperty('--start-img-infinite', "inhirit");
            }
            imgRef.current.style.setProperty('--start-img-opacity', settings.img.Opacity.value.toString());
            imgRef.current.style.setProperty('--start-img-x', `${settings.img.X.value}px`);
            imgRef.current.style.setProperty('--start-img-y', `${settings.img.Y.value}px`);
            imgRef.current.style.setProperty('--start-img-scale', (settings.img.Scale.value / 10).toString());
            imgRef.current.style.setProperty('--start-img-blur', `${settings.img.Blur.value}px`);
            imgRef.current.style.setProperty('--start-img-speed', `${settings.img.Speed.value / 10}s`);
            imgRef.current.style.setProperty('--start-img-delay', `${settings.img.Delay.value / 10}s`);
            imgRef.current.style.setProperty('--start-img-selected-easing', settings.img.selectedEasing);
        }
    }, [settings]);

    useEffect(() => {
        if (titleRef.current) {
            if(settings.title.replay === true){
                titleRef.current.style.setProperty('--start-title-infinite', "infinite");
            }else{
                titleRef.current.style.setProperty('--start-title-infinite', "inhirit");
            }
            titleRef.current.style.setProperty('--start-title-opacity', settings.title.Opacity.value.toString());
            titleRef.current.style.setProperty('--start-title-x', `${settings.title.X.value}px`);
            titleRef.current.style.setProperty('--start-title-y', `${settings.title.Y.value}px`);
            titleRef.current.style.setProperty('--start-title-scale', (settings.title.Scale.value / 10).toString());
            titleRef.current.style.setProperty('--start-title-blur', `${settings.title.Blur.value}px`);
            titleRef.current.style.setProperty('--start-title-speed', `${settings.title.Speed.value / 10}s`);
            titleRef.current.style.setProperty('--start-title-delay', `${settings.title.Delay.value / 10}s`);
            titleRef.current.style.setProperty('--start-title-selected-easing', settings.title.selectedEasing);
        }
    }, [settings]);

    useEffect(() => {
        if (descriptionRef.current) {
            if(settings.description.replay === true){
                descriptionRef.current.style.setProperty('--start-description-infinite', "infinite");
            }else{
                descriptionRef.current.style.setProperty('--start-description-infinite', "inhirit");
            }
            descriptionRef.current.style.setProperty('--start-description-opacity', settings.description.Opacity.value.toString());
            descriptionRef.current.style.setProperty('--start-description-x', `${settings.description.X.value}px`);
            descriptionRef.current.style.setProperty('--start-description-y', `${settings.description.Y.value}px`);
            descriptionRef.current.style.setProperty('--start-description-scale', (settings.description.Scale.value / 10).toString());
            descriptionRef.current.style.setProperty('--start-description-blur', `${settings.description.Blur.value}px`);
            descriptionRef.current.style.setProperty('--start-description-speed', `${settings.description.Speed.value / 10}s`);
            descriptionRef.current.style.setProperty('--start-description-delay', `${settings.description.Delay.value / 10}s`);
            descriptionRef.current.style.setProperty('--start-description-selected-easing', settings.description.selectedEasing);
        }
    }, [settings]);

    useEffect(() => {
        if (buttonRef.current) {
            if(settings.button.replay === true){
                buttonRef.current.style.setProperty('--start-button-infinite', "infinite");
            }else{
                buttonRef.current.style.setProperty('--start-button-infinite', "inhirit");
            }
            buttonRef.current.style.setProperty('--start-button-opacity', settings.button.Opacity.value.toString());
            buttonRef.current.style.setProperty('--start-button-x', `${settings.button.X.value}px`);
            buttonRef.current.style.setProperty('--start-button-y', `${settings.button.Y.value}px`);
            buttonRef.current.style.setProperty('--start-button-scale', (settings.button.Scale.value / 10).toString());
            buttonRef.current.style.setProperty('--start-button-blur', `${settings.button.Blur.value}px`);
            buttonRef.current.style.setProperty('--start-button-speed', `${settings.button.Speed.value / 10}s`);
            buttonRef.current.style.setProperty('--start-button-delay', `${settings.button.Delay.value / 10}s`);
            buttonRef.current.style.setProperty('--start-button-selected-easing', settings.button.selectedEasing);
        }
    }, [settings]);
    
    return (
        <div 
            className={styles.preview_container}
        >
            <div 
                className={styles.playground_content}
            >
                    <div    
                        className={styles.playground_text_container}
                    >
                        <h1
                            ref={titleRef}     
                            className={`${styles.titleStartStyle}`}
                        >
                            Animation Settings
                        </h1>
                        <p  
                            ref={descriptionRef}
                            className={`${styles.descriptionStartStyle}`}
                        >
                            The user should have the option to select any element on the page and set up its animation using the controls in the right panel. A dotted line will show the element's position and state before the animation begins, giving the user a clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.
                        </p>
                        <button 
                            ref={buttonRef}
                            className={`${styles.buttonStartStyle}`}
                        >
                            Button
                        </button>
                    </div>
                    <div 
                        className={styles.playground_img_container}
                    >
                        <img 
                            ref={imgRef} 
                            src={PLaygroundImg}
                            alt='animation setting' 
                            className={`${styles.imgStartStyle}`}
                        />
                    </div>
                </div>
        </div>
    );
}

export default Preview;