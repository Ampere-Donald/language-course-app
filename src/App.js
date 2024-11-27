// src/App.js

// Importing the React library and useState hook
import React, { useState } from 'react';
// Importing the LevelSelector component that we created
import LevelSelector from './components/LevelSelector';

// Main App component
function App() {
    // useState hook to manage the selected level; initialized to null (no level selected)
    const [selectedLevel, setSelectedLevel] = useState(null);

    // Function to handle clicking on a level
    const handleLevelClick = (level) => {
        // Check if the level is 5 or below, meaning free access
        if (level < 5 || level === 5) {
            setSelectedLevel(level); // Updates selectedLevel with the clicked level
        } else {
            // Shows an alert message for levels above 5 requiring payment
            alert("Please make a payment to access levels beyond 5.");
        }
    };

    return (
        // Main div containing all app content
        <div className="App">
            {/* Header section of the app with a title */}
            <header className="App-header">
                <h1>Language Course App</h1>
            </header>
            {/* Including the LevelSelector component and passing handleLevelClick as a prop */}
            <LevelSelector onLevelClick={handleLevelClick} />
            {/* Conditionally rendering the selected level message if a level is selected */}
            {selectedLevel && <p>You've selected Level {selectedLevel}</p>}
        </div>
    );
}

// Exporting the App component as the default export for use in other files
export default App;
