import React, {useState} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Nav = () => {
    const [currentTab, setCurrentTab] = useState("profiles");

    return (
        <Tabs>
            <Tab />
        </Tabs>
    );
};

export default Nav;