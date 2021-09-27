import React from 'react'
import './hero.css'
import helpCenter from '../images/right_top/help-centerv4.png';
import easyReturn from '../images/right_top/returns-refunds.png';
import sellOnJumia from '../images/right_top/sell-on-jumia.png';
import primesmall from '../images/right_bottom/Prime-Small-Banner.png';
import { FaRaspberryPi, FaDumbbell } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import {CgMoreO, CgSmartHomeWashMachine} from "react-icons/cg";
import {GiBabyFace,GiPirateCoat, GiPocketRadio, GiSmartphone} from "react-icons/gi";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {RiHealthBookLine} from "react-icons/ri";
import {AiOutlineMacCommand} from "react-icons/ai";

function Hero() {
    return (
        <div className="hero">
            <div className="left_container">
                <div className="side_menu">
                    <ul>
                        <li><a href="Home"> <AiOutlineMacCommand className="side_menu_icon"/>Supermarket</a></li>
                        <li><a href="Home"> <GiSmartphone className="side_menu_icon"/> Phones & Tablets</a></li>
                        <li><a href="Home"><CgSmartHomeWashMachine className="side_menu_icon"/>Home & Office</a></li>
                        <li><a href="Home"><GiPocketRadio className="side_menu_icon"/>Electronics</a></li>
                        <li><a href="Home"><RiHealthBookLine className="side_menu_icon"/>Health & Beauty</a></li>
                        <li><a href="Home"><GiPirateCoat className="side_menu_icon"/>Fashion</a></li>
                        <li><a href="Home"><HiOutlineDesktopComputer className="side_menu_icon"/>Computing</a></li>
                        <li><a href="Home"><FaDumbbell className="side_menu_icon"/>Sporting Goods</a></li>
                        <li><a href="Home"> <GiBabyFace className="side_menu_icon"/>Baby Products</a></li>
                        <li><a href="Home"> <GrGamepad className="side_menu_icon"/>Gaming</a></li>
                        <li><a href="Home"> <FaRaspberryPi className="side_menu_icon"/>Garden & Outdoors</a></li>
                        <li><a href="Home"><CgMoreO className="side_menu_icon"/> Other Categories</a></li>
                    </ul>
                </div>
            </div>
            <div className="middle_container"></div>
            <div className="right_container">
                <div className="top_right">
                    <div className="help_center">
                        <img src={helpCenter} alt="Help Center" className="container_image" />
                        <div className="image_detail">
                            <p>Help Center</p>
                            <span>Guide to Customer Care</span>
                        </div>
                    </div>
                    <div className="help_center">
                        <img src={easyReturn} alt="Easy Return" className="container_image" />
                        <div className="image_detail">
                            <p>Easy Return</p>
                            <span>Quick Refund</span>
                        </div>
                    </div>
                    <div className="help_center">
                        <img src={sellOnJumia} alt="Sell On Jumia" className="container_image" />
                        <div className="image_detail">
                            <p>Sell On Jumia</p>
                            <span>Millions of Customers</span>
                        </div>
                    </div>
                </div>
                <div className="bottom_right">
                    <img src={primesmall} alt="Prime Small"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
