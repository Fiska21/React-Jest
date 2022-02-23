import React from "react"

function Greeting() {
    const [name, setName] = React.useState("");

    return (
        <>
            <label htmlFor="name-input"> Enter your Name </label>
            <input
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p> Welcome to React {name ? `${name}` : ""}! </p>

            {/* <div>
                <button 
            </div> */}
        </>
    )
}

export default Greeting