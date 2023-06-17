import startScuttleButton from "../images/startScuttleButton.svg"
import "./StartScuttle.css"

function StartScuttle() {
    return (
        <div className="start-scuttle-container">
    
            <img src={startScuttleButton} style={{height: "100%", color:"black"}} alt="start scuttle" />
        </div>
    )
}

export default StartScuttle;