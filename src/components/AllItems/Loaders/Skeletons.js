import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
    return (
        <ContentLoader style={{margin: "30px 12px 73px"}}
                       speed={2}
                       width={280}
                       height={460}
                       viewBox="0 0 280 460"
                       backgroundColor="#c4c4c4"
                       foregroundColor="#ffffff"
        >
            <rect x="10" y="265" rx="8" ry="8" width="257" height="30"/>
            <rect x="10" y="316" rx="15" ry="15" width="259" height="82"/>
            <rect x="8" y="418" rx="0" ry="0" width="86" height="28"/>
            <circle cx="135" cy="130" r="120"/>
            <rect x="128" y="407" rx="26" ry="26" width="139" height="46"/>
        </ContentLoader>
    );
};

export default Loader;