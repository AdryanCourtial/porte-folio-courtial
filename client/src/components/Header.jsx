import './../static/Header.css'
import { NavLink } from 'react-router-dom'
// import { motion } from 'framer-motion'

export function Headers() {
    return (
    <header className='bg-my-white w-fit px-6 flex mx-auto mt-2 rounded-full min-h-[7vh]'>
        <NavLink to={'/'} className='px-4 h-full flex items-center underline underline-offset-8 decoration-secondary-color'> Home </NavLink>
        <NavLink to={'/competences'} className='px-4 h-full flex items-center'> Competences </NavLink>
        <NavLink to={'/contacts'} className='px-4 h-full flex items-center'> Contact </NavLink>
    </header>
    )
}