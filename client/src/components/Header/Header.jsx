import "./Header.scss";

import {useState,useEffect,useContext} from 'react'
import { useNavigate } from "react-router-dom";
//icons
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg"
import {AiOutLineHeart} from "react-icons/ai"
//conponents
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context";

const Header = () => {
    return <div>Header</div>;
};

export default Header;
