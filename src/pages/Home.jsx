import React from "react";
import Dropdown from "../components/Dropdown";
function HomePage(){
    return(
        <>
        <Dropdown/>
        <div>
        <search><input type="text" placeholder="seacrh"/></search>
        <ul className="tag">
            <li>
                <a href="#">Tag</a>
                <ul>
                    <li>Theme</li>
                    <li>Player Count:</li>
                    <li>Collection Management</li>
                    <li>Game Type:</li>
                    <li>Player Status:</li>
                </ul>
            </li>
        </ul>
        </div>
        
        

        </>
    )
}
export default HomePage