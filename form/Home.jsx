import React, { useState } from 'react';

function Home() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label>
                Type something:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default Home;
