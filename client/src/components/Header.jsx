import './../static/Header.css'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Headers() {
    return (
    <header>
        <motion.button whileHover={{ scale: 1.1, width: 100, textAlign: 'left' }} whileTap={{ scale: 0.9 }} ><NavLink to='/'> Home </NavLink></motion.button>
        <motion.button><NavLink to='/competence'> Competence </NavLink></motion.button>
        <motion.button><NavLink to='/contact'> Contact </NavLink></motion.button>
    </header>
    )
}