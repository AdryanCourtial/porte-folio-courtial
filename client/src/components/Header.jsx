import './../static/Header.css'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tabPage } from '../App'
import { useEffect, useState } from 'react'
import { ButtonSideBarre } from './ButtonSideBarre'


const buttonVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    hover: {
        scale: 1.05,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        textShadow: "0px 0px 8px rgb(255, 255, 255)"
    },
    click: {
        scale: 0.9
    }
}
export function Headers({OnChooseVariant}) {

    const location = useLocation();
    const [actualPage, setActualPage] = useState(location.pathname)

    useEffect(() => {
        setActualPage(location.pathname)
    }, [location])


    function GetLocation(nextPage){
        const curentIndex = tabPage.findIndex(route => route === actualPage);
        const nextIndex = tabPage.findIndex(route => route === nextPage);
        OnChooseVariant(curentIndex, nextIndex)
    }

    return (
    <header>
        <ButtonSideBarre buttonVariant={buttonVariant} path={"/"} name={"Home"} ButtonClicked={GetLocation} image={"/icon_home.png"}/>
        <ButtonSideBarre buttonVariant={buttonVariant} path={"/competence"} name={"Competence"} ButtonClicked={GetLocation}  image={"/competence_icon.png"}/>
        <ButtonSideBarre buttonVariant={buttonVariant} path={"/contact"} name={"Contact"} ButtonClicked={GetLocation}  image={"/contact_icon.png"}/>  
    </header>
    )
}