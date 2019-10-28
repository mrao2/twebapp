import React from "react";
import IconLink from "../buttons/iconLink";
import Github from "../../res/github.png";


const Footer = () => {
    return (
        <div className="footer">
            <span>
                OpenSTL © 2019
            </span>
            <IconLink
                href={"https://github.com/rmbh4211995/passport-react"}
                icon={Github}
                title="Github"
                className="social-icon"
                buttonStyle={{ verticalAlign: "sub" }}
            />
            
        </div>
    );
};

export default Footer;