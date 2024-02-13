import React from 'react';
import styles from './body.module.css';

function  Body({ settings, selectElement, handleSettingsChange, selectedElement, showPreview, setIsReplayEnabled, PLaygroundImg}) {
    const formatSettingValue = (name, value) => {
        switch (name) {
            case 'Opacity':
                return `${value}%`; 
            case 'Scale':
                return (value / 10).toFixed(1); 
            case 'Speed':
            case 'Delay':
                return value === 0 ? '0s' : `${(value / 10).toFixed(1)}s`; 
            default:
                return value; 
        }
    };     

    
    return (
        <div 
            className={styles.body}
        >
            <div    
                className={styles.playground}
            >
                <div 
                    className={styles.playground_content}
                >
                    <div 
                        className={styles.playground_text_container}
                    >
                        <h1
                            className={`${styles.playground_title} ${selectedElement === 'title' ? styles.selected_element_top : ''}`}
                            onClick={() => selectElement('title')}
                        >
                            <div 
                                className={`${selectedElement === 'title' ? styles.selected_element_bottom : ''} `}
                            >
                                <div 
                                    className={`${selectedElement === 'title' ? styles.selected_element : ''}`}
                                >
                                    <div
                                        className={styles.position_marker}
                                        style={{
                                            visibility: selectedElement === 'title' ? 'visible' : 'hidden',
                                            transform: `translate(${settings.title?.X?.value || 0}px, ${settings.title?.Y?.value || 0}px)`
                                        }}
                                    ></div>
                                </div>
                                Animation Settings
                            </div>
                        </h1>
                        <p
                            className={`${styles.playground_description} ${selectedElement === 'description' ? styles.selected_element_top : ''}`}
                            onClick={() => selectElement('description')}
                        >
                            <div 
                                className={`${selectedElement === 'description' ? styles.selected_element_bottom : ''}`}
                            >
                                <div 
                                    className={`${selectedElement === 'description' ? styles.selected_element : ''}`}
                                >
                                    <div
                                        className={styles.position_marker}
                                        style={{
                                            visibility: selectedElement === 'description' ? 'visible' : 'hidden',
                                            transform: `translate(${settings.description?.X?.value || 0}px, ${settings.description?.Y?.value || 0}px)`
                                        }}
                                    ></div>
                                </div>
                                The user should have the option to select any element on the page and set up its animation using the controls in the right panel. A dotted line will show the element's position and state before the animation begins, giving the user a clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.
                            </div>
                        </p>
                        <button
                            className={`${styles.playground_button} ${selectedElement === 'button' ? styles.selected_element_top : ''}`}
                            onClick={() => selectElement('button')}
                        >
                            <div 
                                className={`${styles.playground_button} ${selectedElement === 'button' ? styles.selected_element_bottom : ''}`}
                            >
                                <div 
                                    className={`${selectedElement === 'button' ? styles.selected_element : ''}`}
                                >
                                    <div
                                        className={styles.position_marker}
                                        style={{
                                            visibility: selectedElement === 'button' ? 'visible' : 'hidden',
                                            transform: `translate(${settings.button?.X?.value || 0}px, ${settings.button?.Y?.value || 0}px)`
                                        }}
                                    ></div>
                                </div>
                                Button
                            </div>
                        </button>
                    </div>
                <div
                    className={`${styles.playground_img_container} ${selectedElement === 'img' ? styles.selected_element_top : ''}`}
                >
                    <div 
                        className={`${styles.playground_img} ${selectedElement === 'img' ? styles.selected_element_bottom : ''}`}
                    >
                        <div
                            className={`${selectedElement === 'img' ? styles.selected_element : ''}`}
                        >
                            <div
                                className={styles.position_marker}
                                style={{
                                    visibility: selectedElement === 'img' ? 'visible' : 'hidden',
                                    transform: `translate(${settings.img?.X?.value || 0}px, ${settings.img?.Y?.value || 0}px)`
                                }}
                            ></div>
                        </div>
                        <img
                            onClick={() => selectElement('img')}
                            src={PLaygroundImg}
                            alt='animation setting'
                        ></img>
                    </div>
                </div>
                </div>
            </div>
            {selectedElement && !showPreview && (
                <div 
                    className={styles.settings}
                >
                    <ul 
                        className={styles.settings_list}
                    >
                        {Object.entries(settings[selectedElement]).map(([name, setting]) => {
                            if (name === "Easing") {
                                return (
                                    <li 
                                        className={styles.settings_element} 
                                        key={name}
                                    >
                                        <span 
                                            className={styles.settings_name}
                                        >
                                            {name}
                                        </span>
                                        <select
                                            className={styles.settings_input_selector}
                                            value={settings[selectedElement].selectedEasing || settings[selectedElement][name][0]}
                                            onChange={(e) => handleSettingsChange(selectedElement, name, e.target.value)}
                                        >
                                            {settings[selectedElement][name].map((option) => (
                                                <option 
                                                    key={option} 
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                );
                            }else if(name === "selectedEasing") {
                                return(
                                    <>
                                    </>
                                );
                            }else if (name === "replay"){
                                return(
                                    <li 
                                        className={styles.settings_element}
                                    >
                                        <span 
                                            className={styles.settings_name}
                                        >
                                            Replay
                                        </span>
                                        <div 
                                            className={styles.checkbox_wrapper_2}
                                        >
                                            <input 
                                                type="checkbox" 
                                                className={`${styles.ikxBAC} ${styles.ikxBAC}`} 
                                                checked={settings[selectedElement]?.replay || false}
                                                onChange={(e) => handleSettingsChange(selectedElement, 'replay', e.target.checked)}
                                            />
                                        </div>
                                    </li>
                                )
                            }else {
                                return (
                                    <li 
                                        className={styles.settings_element} 
                                        key={name}
                                    >
                                        <span 
                                            className={styles.settings_name}
                                        >
                                            {name}
                                        </span>
                                        <input
                                            className={styles.settings_input}
                                            type="range"
                                            value={setting.value}
                                            min={setting.min}
                                            max={setting.max}
                                            onChange={(e) => handleSettingsChange(selectedElement, name, parseInt(e.target.value))}
                                        />
                                        <span 
                                            className={styles.settings_value}
                                        >
                                            {formatSettingValue(name, setting.value)}
                                        </span>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Body;