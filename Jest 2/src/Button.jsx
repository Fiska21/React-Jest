import React from "react"

function Button() {
    const [showText, setShowText] = React.useState(false);

    return (
        <>
            <button onClick={() => setShowText(true)}>
                Click Me
            </button>
            {showText &&
                <p> You Just Click Me</p>
            }
        </>
    )
}

export default Button