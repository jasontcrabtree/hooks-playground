import React, { useState } from 'react';

function StepTracker() {
    const [steps, setSteps] = useState(0);

    function increase() {
        setSteps(prevState => prevState + 1);
    }

    function decrease() {
        setSteps(prevState => prevState - 1);
    }

    return (
        <div>
            <p>You've taken {steps} steps</p>
            <br/>
            <button onClick={increase}>Walk Forward</button>
            <button onClick={decrease}>Walk Backwards</button>
        </div>
    )
}

export default StepTracker;