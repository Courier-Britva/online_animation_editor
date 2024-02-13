import React, { useState } from 'react';
import Header from "./components/Header/header.jsx";
import Body from "./components/Body/body.jsx";
import Preview from './components/Preview/preview.jsx';

function App() {

    if(localStorage.getItem('animationSettings')){
        var initialSettings = JSON.parse(localStorage.getItem('animationSettings'));
    }else{
        var initialSettings = {
            img: {
                X: { min: 0, max: 100, value: 100},
                Y: { min: 0, max: 100, value: 0},
                Opacity: { min: 0, max: 100, value: 50},
                Scale: { min: 0, max: 30, value: 10},
                Blur: { min: 0, max: 20, value: 1},
                Speed: { min: 1, max: 100, value: 30},
                Delay: { min: 0, max: 100, value: 0}, 
                Easing: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
                selectedEasing: "linear",
                replay: false
            },
            button: {
                X: { min: 0, max: 100, value: 50},
                Y: { min: 0, max: 100, value: 50},
                Opacity: { min: 0, max: 100, value: 100},
                Scale: { min: 0, max: 30, value: 10},
                Blur: { min: 0, max: 20, value: 10},
                Speed: { min: 1, max: 100, value: 20},
                Delay: { min: 0, max: 100, value: 0},  
                Easing: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
                selectedEasing: "linear",
                replay: false
            },
            title:{
                X: { min: 0, max: 100, value: 30},
                Y: { min: 0, max: 100, value: 0},
                Opacity: { min: 0, max: 100, value: 100},
                Scale: { min: 0, max: 30, value: 10},
                Blur: { min: 0, max: 20, value: 20},
                Speed: { min: 1, max: 100, value: 30},
                Delay: { min: 0, max: 100, value: 0},  
                Easing: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
                selectedEasing: "linear",
                replay: false
            },
            description: {
                X: { min: 0, max: 100, value: 40},
                Y: { min: 0, max: 100, value: 0 },
                Opacity: { min: 0, max: 100, value: 1},
                Scale: { min: 0, max: 30, value: 10},
                Blur: { min: 0, max: 20, value: 1},
                Speed: { min: 1, max: 100, value: 10},
                Delay: { min: 0, max: 100, value: 0},  
                Easing: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
                selectedEasing: "linear",
                replay: false
            }
        };
    }

    const selectElement = (element) => {
        setSelectedElement(element);
    };
    
    const handleSettingsChange = (element, setting, newValue) => {
        if (setting === "Easing") {
            setSettings(prevSettings => ({
                ...prevSettings,
                [element]: {
                    ...prevSettings[element],
                    selectedEasing: newValue, 
                },
            }));
        } else if (setting === "replay") {
            setSettings(prevSettings => ({
                ...prevSettings,
                [element]: {
                    ...prevSettings[element],
                    replay: newValue, // Correctly update the replay property
                },
            }));
        } else {
            setSettings(prevSettings => ({
                ...prevSettings,
                [element]: {
                    ...prevSettings[element],
                    [setting]: {
                        ...prevSettings[element][setting],
                        value: newValue, 
                    },
                },
            }));
        }
    };
    

    const [showPopup, setShowPopup] = useState(false);

    const handlePreviewClick = () => {
        localStorage.setItem('animationSettings', JSON.stringify(settings));
        setShowPopup(true); 
    
        setTimeout(() => {
            setShowPopup(false); 
            setShowPreview(true);
        }, 5000); 
    };

    const handleResetClick = () => {
        setShowPreview(false);
    }


    const [key, setKey] = useState(0); 

    const handleReplayClick = () => {
        setKey(prevKey => prevKey + 1); 
    };

    const [isReplayEnabled, setIsReplayEnabled] = useState(false);
    const [settings, setSettings] = useState(initialSettings);
    const [selectedElement, setSelectedElement] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div className="App">

            <Header 
                handlePreviewClick ={handlePreviewClick}
                showPreview={showPreview}    
                handleResetClick={handleResetClick}
                handleReplayClick={handleReplayClick}
                showPopup={showPopup}
            />

            <Body
                settings={settings}
                setSettings={setSettings}
                selectElement={selectElement}
                handleSettingsChange={handleSettingsChange}
                selectedElement={selectedElement}
                showPreview={showPreview}
                setIsReplayEnabled={setIsReplayEnabled}
            />

            {showPreview && 
            <Preview 
            isReplayEnabled = {isReplayEnabled}
                settings={settings} 
                key={key}
            />}

        </div>
    );
}

export default App;