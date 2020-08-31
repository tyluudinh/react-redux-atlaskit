import React from "react";
import {Search} from "@atlaskit/atlassian-navigation";

export const SearchDrawer = () => {
    const onClick = (...args: any[]) => {
        console.log('search click', ...args);
    };

    return (
        <Search onClick={onClick} label="Search..." tooltip="Search"  placeholder={''}/>
    );
};
