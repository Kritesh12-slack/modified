import "./Carousal.css"
import SvgComponent from "./SvgComponent"
import SvgComponentBg from "./SvgComponentBg"

function Carousal() {
    return (
        <>
            <div className="Container">
                <div className="main">
                    <div className="text">
                        <div className="headText">Space Pe</div>
                        <div className="tagText">Your Perfect IT Partner</div>
                    </div>
                    <div className="imageS" style={{ backgroundImage: `url(${SvgComponentBg})` }}>
                        <SvgComponent />
                    </div>
                    
                </div>
                <div className="main2">
                    
                </div>
            </div>
        </>
    )
}

export default Carousal