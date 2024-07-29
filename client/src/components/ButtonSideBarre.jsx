import "./../static/ButtonSideBarre.css"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const VariantLogo = {
    hidden: {
        y: 50
    },
    visible: {
        y: 0
    }, 
    last: {
        y: -50
    }
}

export function ButtonSideBarre( { name, buttonVariant, path, image ,ButtonClicked } ){

    const [isHover, setIsHover] =  useState(false)

    const handleclick = (actualPath) => {
        ButtonClicked(actualPath)
    }

    return (
        <motion.button 
        variants={buttonVariant} 
        initial="hidden" 
        animate="visible" 
        whileHover="hover" 
        whileTap="click" 
        onClick={() => handleclick(path)}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}>
            <NavLink to={path}>
            {isHover ? <motion.div variants={VariantLogo} initial="hidden" animate="visible" exit="last"><img src={image} alt="home_image"/></motion.div> :
                <span> {name} </span>
            }
            </NavLink>
        </motion.button>
    )
}

