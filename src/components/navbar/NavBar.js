import "./navbar.css"
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillMail, AiOutlineSearch } from "react-icons/ai";
export default function NavBar() {
    return (
        <div className="nav">
            <div className="leftNav">
                <ul>
                <i><AiFillInstagram className="topIcon"/></i>
                <AiFillTwitterCircle className="topIcon"/>
                <AiFillFacebook className="topIcon"/>
                <AiFillMail className="topIcon"/>
                </ul>
            </div>
            <div className="centerNav">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">BLOGS</li>
                    <li className="topListItem">ADD</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">LOGIN</li>

                </ul>
            </div>
            <div className="rightNav">
                <AiOutlineSearch className="searchImg"/>
            </div>
        </div>
    )
}
