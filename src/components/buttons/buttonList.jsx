import React from "react";
import IconButton from "./iconButton";
import GradientButton from "./gradientButton";
import { data } from "../../data";

const ButtonList = () => {
    return data.map(app => {
        if (app.colors)
            return <GradientButton app={app} key={app.name} />;

        return (
            <IconButton app={app} key={app.name} />
        );

    });
};

export default ButtonList;