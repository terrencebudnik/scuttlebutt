import profileImage  from "../images/profileImage.svg"
import "./MainNav.css"

function MainNav() {
    return (
        <div className="main-nav">
                <img src={profileImage} style={{height: "30%"}} alt="profile" />
            <div className="main-nav-header">
     
                <h1>Scuttlebutt</h1>
            
            </div>
            
           
        </div>
    )
}

export default MainNav;