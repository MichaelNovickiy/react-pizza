import React, {useState} from "react";
import "./CardSettings.scss"

const CardSettings = ({dough = "thin", size = 26}) => {

    const [activeDough, setActiveDough] = useState(dough)
    const selectDough = (dough) => setActiveDough(dough)

    const [activeSize, setActiveSize] = useState(size)
    const selectSize = (size) => setActiveSize(size)

    return (
        <div className="card-settings">
            <div className="card-settings-dough">
                <span className={`${activeDough === "thin" ? "active-dough" : ""}`}
                      onClick={() => selectDough("thin")}
                >тонкое</span>

                <span className={`${activeDough === "traditional" ? "active-dough" : ""}`}
                      onClick={() => selectDough("traditional")}
                >традиционное</span>
            </div>
            <div className="card-settings-size">
                <span className={`${activeSize === 26 ? "active-size" : ""}`}
                      onClick={() => selectSize(26)}
                >26 см.</span>
                <span className={`${activeSize === 30 ? "active-size" : ""}`}
                      onClick={() => selectSize(30)}
                >30 см.</span>
                <span className={`${activeSize === 40 ? "active-size" : ""}`}
                      onClick={() => selectSize(40)}
                >40 см.</span>
            </div>
        </div>

    );
};

export default CardSettings;