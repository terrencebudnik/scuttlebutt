import SendScuttle from "../components/SendScuttle";
import "./ScuttleMainPage.css";

function ScuttleMainPage() {

    return (
        <div className="scuttle-main-page">
        <div className="scuttle-main-page-container">
            <h1>What's the Scuttlebutt?</h1>
            <SendScuttle />
        </div>
        </div>
    );
    }

export default ScuttleMainPage;
