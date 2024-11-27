// src/components/LevelSelector.js

// Importing the React library to use React components
import React from 'react';

// Importing a CSS file to style the LevelSelector component
import './LevelSelector.css';

// LevelSelector component definition, which receives a prop 'onLevelClick' to handle level selection
const LevelSelector = ({ onLevelClick }) => {
    // Creating an array of 30 numbers (from 1 to 30) to represent the levels in the course
    const levels = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        // Wrapping the component content inside a div with a CSS class 'level-selector'
        <div className="level-selector">
            {/* Title for the level selection section */}
            <h2>Select a Level</h2>
            {/* Div to contain all level buttons, styled with CSS to arrange buttons nicely */}
            <div className="levels">
                {/* Mapping through the levels array to create a button for each level */}
                {levels.map((level) => (
                    <button
                        // Each button has a unique key (level number) to help React track items in the list
                        key={level}
                        // CSS class for styling the buttons
                        className="level-button"
                        // onClick event handler to call onLevelClick with the current level when clicked
                        onClick={() => onLevelClick(level)}
                    >
                        {/* Text inside the button, displaying the level number */}
                        Level {level}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Exporting LevelSelector component to make it available for import in other files
export default LevelSelector;
