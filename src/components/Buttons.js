import React from "react";

function Buttons({ calculateResult, resetData }){
    return (
        <div>
            <button onClick={calculateResult}>Calculate</button>
            <button onClick={resetData}>Reset</button>
        </div>
    );
}

export default Buttons;