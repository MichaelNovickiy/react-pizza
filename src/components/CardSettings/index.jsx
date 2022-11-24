import React, {useState} from "react";
import "./CardSettings.scss"

const CardSettings = ({types, sizes}) => {

    const availableDoughs = ["тонкое", "традиционное"]
    const availableSizes = [26, 30, 40]

    const [activeType, setActiveType] = useState(types[0])
    const selectType = (type) => setActiveType(type)

    const [activeSize, setActiveSize] = useState(sizes[0])
    const selectSize = (size) => setActiveSize(size)

    return (
        <div className="card-settings">
            <ul className="card-settings-dough">
                {availableDoughs.map((type, index) => {
                    return <li key={index}
                                 className={`${activeType === index ? "active-dough" : ""}
                                 ${!types.includes(index) && "disabled"}`}
                                 onClick={() => selectType(index)}
                    >{type}</li>
                })}
            </ul>

            <ul className="card-settings-size">
                {availableSizes.map((size, index) => {
                    return <li key={index}
                                 className={`${activeSize === size ? "active-size" : ""}
                                 ${!sizes.includes(size) && "disabled"}`}
                                 onClick={() => selectSize(size)}
                    >{size} см.</li>
                })}
            </ul>
        </div>

    );
};

export default CardSettings;